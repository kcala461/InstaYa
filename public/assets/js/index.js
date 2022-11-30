import React from 'react';
import ReactDom from 'react-dom';
import '..css/main.css';
import  App from './App';
import reportWebVitals from './reportWebVitals'



//vicular hoja de estilos al proyecto
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/bootstrapCustom.css'

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);