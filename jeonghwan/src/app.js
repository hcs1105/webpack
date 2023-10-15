import {sum} from './math.js';
import './app.css';
import webpackImage from './webpack-sample.png'

window.addEventListener('DOMContentLoaded', () => {
	const el = document.querySelector('#app');
	el.innerHTML = `
		<p>1 + 2 = ${sum(1,2)}</p>
		<img src="${webpackImage}" alt="">
	`;
});