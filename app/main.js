//main.js
import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app.jsx';
import styles from "./component/index.css"
ReactDom.render(
    <App />,
    document.getElementById('content')
);