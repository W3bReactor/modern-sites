import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import react from '../assets/images/react.png';
import { ILanguage } from './types';

export const Languages: ILanguage[] = [
	{
		id: 1,
		language: 'html',
		highlightLanguage: 'html',
		description:
			'HyperText Markup Language («язык гипертекстовой разметки») - стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.',
		image: html,
		code: `<!doctype html>
<html lang='en'>
	<head>
		<meta charset='UTF-8'>
		<meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>
		<meta http-equiv='X-UA-Compatible' content='ie=edge'>
		<title>Document</title>
	</head>
	<body>
		<!--		Здесь будет HTML-код			-->
	</body>
</html>`,
		links: [
			{
				id: 64352363476,
				link: 'https://doka.guide/html/',
				text: 'Дока, очень хороший сайт для начинающих и продвинутых, кучу статей,  а также легко понять информацию.',
			},
			{
				id: 6346436,
				link: 'https://developer.mozilla.org/ru/docs/Web/HTML',
				text: 'MDN - подойдёт, если хотите углубиться в темы, либо быстро посмотреть информацию, всё очень подробно рассказано, есть руководства для начинающих и информация для продвинутых.',
			},
			{
				id: 54364373,
				link: 'http://htmlbook.ru/html',
				text: 'Сайт немного устарел, но всё ещё хорош для того, чтобы подсматривать некоторые теги.',
			},
			{
				id: 534634634,
				link: 'https://validator.w3.org/',
				text: 'Валидатор для проверки html-кода.',
			},
			{
				id: 6436437,
				link: 'https://webdesign-master.ru/blog/html-css/2.html',
				text: 'Инструкция по плагину Emmet для скоростного написания html-кода.',
			},
			{
				id: 464376437,
				link: 'https://caniuse.com/',
				text: 'Проверка кроссбраузерности html-тега, т.е проверка на работоспособность в разных браузерах.',
			},
			{
				id: 576543654,
				link: 'https://webref.ru/html',
				text: 'Справочник по HTML.',
			},
			{
				id: 645634526234,
				link: 'https://ru.bem.info/methodology/quick-start/',
				text: 'Туториал по методологии БЭМ.',
			},
		],
		videos: [
			{
				id: 64352363476,
				link: 'https://www.youtube.com/watch?v=W4MIiV4nZDY',
			},
			{
				id: 67345,
				link: 'https://www.youtube.com/watch?v=bWNmJqgri4Q',
			},
			{
				id: 67364545,
				link: 'https://www.youtube.com/watch?v=DOEtVdkKwcU',
			},
			{
				id: 5243524,
				link: 'https://www.youtube.com/watch?v=Jrjwewef_Ws',
			},
			{
				id: 5625643634,
				link: 'https://www.youtube.com/watch?v=HihYQVuH64U\n',
			},
		],
		note: 'Каждый  впитывает информацию по своему, поэтому предлагаю посмотреть все сайты с полезной информацией, попробовать  посмотреть видеоролики с обучающим материалом. ',
	},
	{
		id: 2,
		language: 'css',
		highlightLanguage: 'css',
		description:
			'Cascading Style Sheets («каскадные таблицы стилей») это некая краска, которым мы заливаем наш HTML-код, после чего сайт становиться красивым и понятным для человека, который не сталкивался ни c HTML, ни с CSS.',
		image: css,
		code: `p { 
  color: red; // этот код означает что цвет параграфа (p) будет красным
}`,
		links: [
			{
				id: 634634745,
				link: 'https://doka.guide/css/',
				text: 'Дока, очень хороший сайт для начинающих и продвинутых, кучу статей,  а также легко понять информацию.',
			},
			{
				id: 6457453743,
				link: 'https://developer.mozilla.org/ru/docs/Web/CSS',
				text: 'MDN - подойдёт, если хотите углубиться в темы, либо быстро посмотреть информацию, всё очень подробно рассказано, есть руководства для начинающих и информация для продвинутых.',
			},
			{
				id: 64526754754637,
				link: 'http://htmlbook.ru/css',
				text: 'Сайт создан давно, можно найти нужную информацию.',
			},
			{
				id: 3464352346,
				link: 'https://webref.ru/css',
				text: 'Справочник по CSS.',
			},
			{
				id: 53464363,
				link: 'https://sass-scss.ru/',
				text: 'Официальная документация препроцессора, рекомендую к изучению после css, поможет быстро писать css-код.',
			},
			{
				id: 421354376,
				link: 'https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox',
				text: 'Flexbox в MDN, технология, которая используется практически во всех сайтах, без неё никак',
			},
			{
				id: 43245326,
				link: 'https://habr.com/ru/post/467049/',
				text: 'Полезная статья по Flexbox, можно быстро посмотреть информацию',
			},
			{
				id: 6346346,
				link: 'https://doka.guide/css/flexbox-guide/',
				text: 'Flexbox в Доке, более понятно для новичка',
			},
			{
				id: 6457457,
				link: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout',
				text: 'GRID в MDN, технология, обычно используется совместно с Flexbox, нужна чтобы делать более сложные сетки',
			},
			{
				id: 52346243,
				link: 'https://doka.guide/css/grid-guide/',
				text: 'GRID в Доке, более понятно для новичка',
			},
		],
		videos: [
			{
				id: 4573456436,
				link: 'https://www.youtube.com/watch?v=iPV5GKeHyV4',
			},
			{
				id: 7534752462,
				link: 'https://www.youtube.com/watch?v=SpCUuyZZTp8',
			},
			{
				id: 643634,
				link: 'https://www.youtube.com/watch?v=eVZEwEQg4pg',
			},
			{
				id: 532526246,
				link: 'https://www.youtube.com/watch?v=XXlw7TUxRVY',
			},
			{
				id: 643531675,
				link: 'https://www.youtube.com/watch?v=yTLqfUxwdDk',
			},
			{
				id: 634674237345,
				link: 'https://www.youtube.com/watch?v=mO9-tfPiDpw&list=PLCMvV-acWe2CTbkicYsTPmezh-prkEbV8',
			},
		],
		note: 'Каждый  впитывает информацию по своему, поэтому предлагаю посмотреть все сайты с полезной информацией, попробовать  посмотреть видеоролики с обучающим материалом. ',
	},
	{
		id: 3,
		language: 'js',
		highlightLanguage: 'js',
		description:
			'(JavaScript) Язык программирования, который помогает делать сайты динамическими, т.е к примеру: поиск, модальные окна, сортировка.',
		image: js,
		code: `const a = 1
const b = a + 1		
console.log(b) // 2
`,
		links: [
			{
				id: 634634745,
				link: 'https://doka.guide/js/',
				text: 'Дока, есть хорошие обьяснения темы, более понятно для новичка.',
			},
			{
				id: 6457453743,
				link: 'https://learn.javascript.ru/',
				text: 'Лучший сайт для изучения Javascript, кучу полезной информации, но может казаться, что слишком много теории',
			},
			{
				id: 64526754754637,
				link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript',
				text: 'MDN, поможет в моменты, когда незнаешь как работает свойство в Javascript',
			},
			{
				id: 3464352346,
				link: 'https://www.typescriptlang.org/',
				text: 'Typescript, перенос Javascript в сферу ООП, когда все типы явные, рекомендую к изучению после JS.',
			},
		],
		videos: [
			{
				id: 4573456436,
				link: 'https://www.youtube.com/watch?v=Bluxbh9CaQ0',
			},
			{
				id: 7534752462,
				link: 'https://www.youtube.com/watch?v=CxgOKJh4zWE',
			},
			{
				id: 643634,
				link: 'https://www.youtube.com/watch?v=H9XRtCjD3hA&list=PLtL3lrXPn2rXYAkRYdTKOQLRUW1Gdp4v2',
			},
			{
				id: 4537524634,
				link: 'https://www.youtube.com/watch?v=PeNBloogHmE&list=PLtL3lrXPn2rVW98_5Rx0SzPPLXPqGXIWp',
			},
		],
		note: 'Javascript является языком программирования в отличие от HTML и CSS, в любом случае он не учиться за неделю или месяц. Чтобы освоить JS нужно научиться понимать его, а на это может потребоваться много времени.',
	},
	{
		id: 4,
		language: 'react',
		highlightLanguage: 'jsx',
		description:
			'Библиотека (некоторые считают фреймворком), созданная компанией Facebook, которая упрощает создание сайтов, а также имеет хорошую оптимизацию.',
		image: react,
		code: `export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1> <!--  HTML в JS    -->
      <MyButton /> <!--  Функция выглядит как тег, на самом деле можно написать так MyButton()    -->
    </div>
  );
}
`,
		links: [
			{
				id: 634634745,
				link: 'https://ru.react.js.org/',
				text: 'Официальная документаци от REACT.',
			},
			{
				id: 6457453743,
				link: 'https://developer.mozilla.org/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
				text: 'Документация от MDN',
			},
			{
				id: 64526754754637,
				link: 'https://academy.yandex.ru/journal/chto-takoe-react-i-kak-ego-osvoit',
				text: '"React" и как его освоить от Яндекса',
			},
			{
				id: 345783567457,
				link: 'https://create-react-app.dev/',
				text: 'Сборщик от React, со всем, что нужно.',
			},
			{
				id: 624576576,
				link: 'https://create-react-app.dev/',
				text: 'Сборщик от React, со всем, что нужно.',
			},
			{
				id: 65347843523467,
				link: 'https://create-react-app.dev/docs/adding-typescript/',
				text: 'React + Typescript, со сборщиком от CRA',
			},
			{
				id: 75674236423,
				link: 'https://vitejs.dev/',
				text: 'Сборщик от Vite, более продвинутый и быстрый вариант.',
			},
			{
				id: 543643526,
				link: 'https://nextjs.org/',
				text: 'SSR - Server Side Rendering, от NEXT.js, можно изучить после React с Typescript.',
			},
			{
				id: 35263427352,
				link: 'https://redux-toolkit.js.org/',
				text: 'State Manager для React, нужен чтобы делить структуру сайта на UI, BLL, DAL, чтобы при построении огромных проектов не было смешанности и запутанности.',
			},
		],
		videos: [
			{
				id: 4573456436,
				link: 'https://www.youtube.com/watch?v=GNrdg3PzpJQ',
			},
			{
				id: 7534752462,
				link: 'https://www.youtube.com/watch?v=is3T0W0ouT0',
			},
			{
				id: 643634,
				link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
			},
			{
				id: 4537524634,
				link: 'https://www.youtube.com/watch?v=OJ16BaPC6VI',
			},
			{
				id: 3547234576,
				link: 'https://www.youtube.com/watch?v=_UywBskWJ7Q&list=PL0FGkDGJQjJG9eI85xM1_iLIf6BcEdaNl',
			},
			{
				id: 74564578,
				link: 'https://www.youtube.com/watch?v=eS0GL73tkmw',
			},
			{
				id: 53252364367,
				link: 'https://www.youtube.com/watch?v=92qcfeWxtnY',
			},
			{
				id: 643643634,
				link: 'https://www.youtube.com/watch?v=cFWpwtkto1s&list=PL6DxKON1uLOEmw7Jkl_0Ac6wJ-jOjpKrQ',
			},
		],
		note: 'React изучается после Javascript, сам React обычно воспринимается легко, для тех кто знает JS. На данном этапе так-же изучается State-Manager. Это может быть Redux, Redux-Toolkit, Mobx, Effector и другие.',
	},
];
