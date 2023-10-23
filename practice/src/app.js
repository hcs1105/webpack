import MainController from "./controllers/MainController.js";
import './main.css';

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});

const alert = msg => window.alert(msg);
const test = new Promise((resolve, reject) => {
  
});

console.log(test);