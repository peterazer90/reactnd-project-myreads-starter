import React from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/Search' component={Search}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default BooksApp
