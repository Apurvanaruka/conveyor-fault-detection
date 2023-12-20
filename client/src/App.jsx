import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form1 from './components/Form1';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/contact';
import Profile from './components/Profile';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <hr />
                <Switch>
                    <Route path="/form1" component={Form1} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
