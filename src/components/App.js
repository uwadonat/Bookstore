import React from 'react';
import { Provider } from 'React-Redux';
import Books from './appComponents/Books';
import store from '../redux/configureStore';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Books />
        </Provider>
    )
}

export default App;