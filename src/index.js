import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainComponent from './Components/MainComponent'

// var books = [array of various book cateogories:; //here i want to reference each category
// var categories = books.slice(0,10); //Here i want to slice the amount per category to 10

ReactDOM.render(<MainComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
