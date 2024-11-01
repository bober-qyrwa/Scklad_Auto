import numpy as np
import math

def forward_kinematics_2d(joint_angles, link_lengths):
    """
    Вычисляет координаты конца манипулятора в двумерной системе координат.

    Args:
        joint_angles: Список углов суставов в радианах (например, [theta1, theta2, theta3]).
        link_lengths: Список длин звеньев манипулятора (например, [l1, l2, l3]).

    Returns:
        Кортеж (x, y) координат конца манипулятора.
    """
    x = 0
    y = 0
    for i in range(len(link_lengths)):
        x += link_lengths[i] * np.cos(np.sum(joint_angles[:i+1]))
        y += link_lengths[i] * np.sin(np.sum(joint_angles[:i+1]))
    return (x, y)

def inverse_kinematics_2d(target_position, link_lengths):
    """
    Вычисляет углы суставов манипулятора, чтобы конец манипулятора достиг заданной позиции.
    Возвращает углы в промежутке от 0 до 180 градусов.

    Args:
        target_position: Кортеж (x, y) координат целевой позиции.
        link_lengths: Список длин звеньев манипулятора (например, [l1, l2, l3]).

    Returns:
        Список углов суставов в градусах (например, [theta1, theta2, theta3]).
    """
    x, y = target_position
    l1 = link_lengths[0]
    l2 = link_lengths[1]
    l3 = link_lengths[2]

    # Вычисляем расстояние от основания до целевой позиции
    d = np.sqrt(x*2 + y*2)

    # Используем теорему косинусов для вычисления угла theta2
    theta2 = np.arccos((d*2 - l1*2 - l2*2) / (2 * l1 * l2))

    # Вычисляем угол theta1
    theta1 = np.arctan2(y, x) - np.arctan2(l2 * np.sin(theta2), l1 + l2 * np.cos(theta2))

    # Вычисляем угол theta3
    theta3 = -theta1 - theta2

    # Переводим углы в градусы и ограничиваем их в промежутке от 0 до 180 градусов
    theta1 = np.degrees(theta1) % 180
    theta2 = np.degrees(theta2) % 180
    theta3 = np.degrees(theta3) % 180

    return [theta1, theta2, theta3]

if __name__ == "__main__":
	link_lenghts = [150, 180, 173.55]
	t = forward_kinematics_2d([3.14/4,3.14/4,3.14/4],link_lenghts)
	print(t)
	print(inverse_kinematics_2d(t, link_lenghts))
	