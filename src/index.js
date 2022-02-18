import React from 'react';
import { render } from 'react-dom';

import App from './components/App/App'
import './styles.css';

render(
    <App />,
    document.getElementById('todos-app')
);