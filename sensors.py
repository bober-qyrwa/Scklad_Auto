def get_current_indications(echo_pin,trig_pin):
	# подадим импульс, т . е. установим состояние пина на HIGH
    	GPIO.output(trig_pin, GPIO.HIGH)
    	# длительность импульса 0.00001 сек
    	time.sleep(0.00001)
    	# установим состояние пина TRIGGER на LOW
    	GPIO.output(trig_pin, GPIO.LOW)
    	# считываем состояние пина ECHO
    	# пока ничего не происходит, фиксируем текущее время start
    	while GPIO.input(echo_pin) == 0:
   		start = time.time()
    	# если обнаружено движение, зафиксируем время end
    	while GPIO.input(echo_pin) == 1:
        	end = time.time()
	# рассчитаем длительность сигнала
    	signal_duration = end - start
   	# рассчитаем расстояние до объекта
    	distance = round(signal_duration * 17150, 2)
	return distance