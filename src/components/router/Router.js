import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../pages/home/Home'
class RouterIndex extends Component {
    render() {
        return (
            <Router>
                
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    {/* <Route path='/1/:typeId' exact component={Business}></Route>
                    <Route path='/2/:any' exact component={UserRouter}></Route>
                    <Route path='/3/:any' exact component={UserInfoRouter}></Route> */}
                </Switch>
            </Router>
        );
    }
}

export default RouterIndex;