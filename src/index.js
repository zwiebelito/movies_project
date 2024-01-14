import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

import './assets/fonts/AbhayaLibre-Regular.ttf'
import './assets/fonts/Allison-Regular.ttf'
import './assets/fonts/ABeeZee-Regular.ttf'
import './index.css';
import {Provider} from "react-redux";
import {store} from "./redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
