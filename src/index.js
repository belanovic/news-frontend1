import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.js';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from './newsContext.js';

import './style/layout/layout.css';
import './style/typography/typography.css';
import './style/alphabet.css';
import './style/variables.css';

/* ReactDom.render(<Provider><Router><App /></Router></Provider>, document.getElementById('root')); ;*/

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <Provider><Router><App/></Router></Provider>
)