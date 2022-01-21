import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

//store
const Root = () => (
    // <Provider> needs store
        <HashRouter>
            <App />
        </HashRouter>
    // </Provider>
)

export default Root; 