import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import * as Routes from '../../router/router';
import Nopage from '../../nopage';

const Sidebar = () => (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/" exact component={Routes.Home}/>
            <Route path="/about" component={Routes.About}/>
            <Route path="/gallery" component={Routes.Gallery}/>
            <Route component={Nopage}/>
        </Switch>
    </div>
);

export default Sidebar;