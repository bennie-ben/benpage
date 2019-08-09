import React from 'react';
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Header from "Components/Header";
import About from "Components/Routes/About";
import Comment from "Components/Routes/Comment";
import Home from "Components/Routes/Home";
import Profile from "Components/Routes/Profile";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/comment" component={Comment}/>
                <Route exact path="/profile" component={Profile}/>
                <Redirect from ="*" to="/"/>
            </Switch>
            </>
        </BrowserRouter>
    )
}


export default Router;