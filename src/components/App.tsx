import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Page from './Page';

const App = (): JSX.Element => (
    <Provider store={store}>
        <Page />
    </Provider>
);

export default App;
