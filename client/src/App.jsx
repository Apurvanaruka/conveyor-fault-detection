import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import About from './components/About';
import contact from './components/contact';
import Profile from './components/Profile';

const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        // Implement your login logic here
        // For simplicity, just toggling the login state
        setLoggedIn(!isLoggedIn);
    };

    return (
<Header/>        
    );
};

export default App;
