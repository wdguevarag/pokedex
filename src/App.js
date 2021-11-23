import React from 'react';
import './App.scss';

import { AppRoutes } from './routes/app.routes'
import {Provider} from "react-redux";


import { store } from './store/reducer/store'

function App() {
  return (
    <Provider store={store}>
        <AppRoutes/>
    </Provider>
  );
}

export default App;
