import React from 'react';

import './TodosList.css';

export default ({ children }) => (
    <ul className="todos-list">
        {children}
    </ul>
);