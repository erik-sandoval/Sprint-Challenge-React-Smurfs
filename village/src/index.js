import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , withRouter } from 'react-router-dom'

import './index.css';
import App from './App';

const WithApp = withRouter(App)

ReactDOM.render(<BrowserRouter><WithApp /></BrowserRouter>, document.getElementById('root'));
