import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './page/Home';
import Detail from './page/Detail';
import Profile from './page/Profile';
import Notification from './page/Notification';

export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Scene key="root" hideNavBar={true}>
                    <Scene key="home" component={Home} initial={true}/>
                    <Scene key="detail" component={Detail} />
                    <Scene key="profile" component={Profile} />
                    <Scene key="notification" component={Notification} />
                </Scene>
            </Router>
        );
    }
}