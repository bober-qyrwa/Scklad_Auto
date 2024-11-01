import cv2
import numpy as np

def search_qr():
  cap = cv2.VideoCapture(0)
  qcd = cv2.QRCodeDetector()

  ret, frame = cap.read()
  if ret:
    cv2.imwrite("photo.png", frame)
    ret_qr, decoded_info, points, _ = qcd.detectAndDecodeMulti(frame)
    if ret_qr:
      for s, p in zip(decoded_info, points):
        if s:
          print(s)
          return s

  cv2.destroyAllWindows()
  cap.release()

def search_objects(image_path):
  # Загрузите изображение
  image = cv2.imread(image_path)
  if image.shape[0] > image.shape [1] :
    image = cv2.rotate(image, cv2.ROTATE_90_CLOCKWISE)

  # Преобразуйте в оттенки серого
  gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

  # Примените Гауссов фильтр
  blurred = cv2.GaussianBlur(gray, (9, 9), 0)

  # Используйте Canny для обнаружения краев
  edges = cv2.Canny(blurred, 50, 80)

  # Найдите контуры
  contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
  lst = []
  # Отобразите контуры на оригинальном изображении
  output = image.copy()
  for count in contours:
    lst.append(len(count))
  print(sorted(lst, reverse=True))
  lst = sorted(lst, reverse=True)[:5]
  contours = tuple(filter(lambda x: len(x) in lst, contours))

  cv2.drawContours(output, contours, -1, (255, 0, 0), 2)

  return output


def calculate_distance_and_angle(image, contours, focal_length, pixel_size):
  """
  Рассчитывает расстояние и угол для каждого объекта, используя фокусное расстояние и размер пикселя.

  Args:
    image: Исходное изображение.
    contours: Список контуров найденных объектов.
    focal_length: Фокусное расстояние объектива камеры в миллиметрах.
    pixel_size: Размер пикселя в миллиметрах.

  Returns:
    Список кортежей: [(distance_to_object, angle_to_object), ...]
  """

  # Находим центр изображения
  center_x = image.shape[1] // 2
  center_y = image.shape[0] // 2

  results = []

  for contour in contours:
    # Находим центр объекта
    M = cv2.moments(contour)
    if M["m00"] != 0:
      cX = int(M["m10"] / M["m00"])
      cY = int(M["m01"] / M["m00"])

      # Расчет реального размера объекта в миллиметрах
      object_width = cv2.contourArea(contour) * pixel_size**2 # Площадь контура в мм^2
      object_width = np.sqrt(object_width) # Диагональ объекта

      # Расчет расстояния до объекта
      distance = (focal_length * object_width) / (cX - center_x)

      # Расчет угла поворота камеры (в радианах)
      angle = np.arctan((cX - center_x) / center_y)

      # Добавление результатов в список
      results.append((distance, angle))

  return results

if __name__ == "__main__":
  # qr_code = search_qr()
  # if qr_code:
  #   print(f"Найден QR-код: {qr_code}")
  # else:
  #   print("QR-код не найден")

  output = search_objects("i (2).jpg")
  if output is not None:
    cv2.imshow("Обнаруженные объекты", output)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
  else:
    print("Не удалось обработать изображение")
