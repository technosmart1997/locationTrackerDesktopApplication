import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const element = <input type="text" placeholder = "Username"/>;
// const ele = (
//     <ul>
//         <li>Ayush</li>
//         <li>Agrawal</li>
//     </ul>
// )

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
