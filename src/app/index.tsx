import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header/index';
import ApartmentPage from 'pages/ApartmentPage';
import { InformationBlock } from 'widgets/InformationBlock';
import { IApartmentModel } from 'shared/types';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useApartmentStore } from 'store/useApartmentStore'; // импортируйте соответствующий хранилище
import { contextViewSize } from 'shared/context';

function App() {
	// получение необходимых методов из хранилища апартаментов
	const { addApartments, selectApartment, setServedDates } = useApartmentStore.getState();

	// состояние для получения текущего размера окна
	const [sizeWindow, setSizeWindow] = useState<number>(1024);

	// метод для загрузки апартаментов и дат
	const handleLoader = async (): Promise<AxiosResponse<IApartmentModel[]>> => {
		// формирование базового URL
		const url: string = process.env.REACT_APP_BASE_URL as string;

		// запрос на получение апартаментов
		const response = await axios.get(`${url}/api/apartments`);

		// добавление апартаментов в состояние
		addApartments(response.data);

		// выбор первого апартамента из полученных данных
		selectApartment(response.data[1].id);

		// запрос на получение серверных дат для выбранного апартамента
		const serverDate = await axios.get(`${url}/api/dates/${response.data[1].id}/`);

		// сохранение серверных дат в состояние
		if (serverDate.data[0]) {
			setServedDates(serverDate.data[0].dates ? serverDate.data[0].dates : []);
		}

		return response;
	};

	// прослушивание изменений размера окна и выполнение начальной загрузки данных
	useEffect(() => {
		// вызов метода для загрузки данных
		handleLoader();

		// обработчик изменения размера окна
		const windowSizeObserver = () => {
			setSizeWindow(document.body.getBoundingClientRect().width);
		};

		// добавление обработчика изменения размера окна к событию "resize"
		document.body.addEventListener('resize', windowSizeObserver);

		// вызов обработчика для получения текущего размера окна
		windowSizeObserver();

		// сброс обработчика изменения размера окна при завершении работы компонента
		return () => document.body.removeEventListener('resize', windowSizeObserver);
	}, []);

	return (
		// передача текущего размера окна через контекст
		<contextViewSize.Provider value={sizeWindow}>
			<div className="App">
				<Header />
				<ApartmentPage />
				<InformationBlock />
				<Footer />
			</div>
		</contextViewSize.Provider>
	);
}

export default App;

/* Этот код написан на React и использует хуки useState и useEffect, чтобы отслеживать состояние и взаимодействие с бэкэндом. Вот основные комментарии и смысл кода:

Импорт компонентов и зависимостей:

Импортируются компоненты Footer, Header, ApartmentPage и InformationBlock.
Импортируется интерфейс IApartmentModel.
Импортируются React и хуки useEffect, useState.
Импортируется axios и его тип AxiosResponse для работы с HTTP-запросами.
Импортируется кастомный хук useApartmentStore. Это хранилище состояний, связанное с апартаментами.
Импортируется контекст для передачи размера окна между компонентами.
Создание функционального компонента App:

Создаются методы из хранилища апартаментов: addApartments, selectApartment и setServedDates.
Создаются состояния для размера окна приложения.
Определяется функция handleLoader для загрузки данных с сервера, которая возвращает Promise.
В handleLoader формируется URL для запросов, выполняются запросы для получения списка апартаментов и дат.
С использованием полученных данных обновляются состояния в хранилище апартаментов.
Использование useEffect:

Загрузка данных с помощью handleLoader вызывается при первой отрисовке компонента.
Создается обработчик windowSizeObserver для отслеживания изменения размера окна.
Обработчик добавляется к событию 'resize' и вызывается для получения текущего размера окна.
При размонтировании компонента удаляется обработчик изменения размера окна.
Рендеринг компонента App:

Через контекст передается текущий размер окна.
Отображаются компоненты Header, ApartmentPage, InformationBlock и Footer.
В итоге, данный код создает основную структуру приложения, загружает апартаменты и даты с сервера, и отслеживает изменение размера окна, передавая 
его в дочерние компоненты через контекст.*/
