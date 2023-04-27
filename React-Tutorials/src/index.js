import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import Header from './Header.jsx'
import Counter from "./Counter"
ReactDOM.render(<React.Fragment>
        <Header/>
        <App/>
        <Counter/>
    </React.Fragment>, document.getElementById("root"));
    