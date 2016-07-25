import React, { Component } from 'react';
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Page2 from './page2.js';
import Index from './index.js';
import Page3 from './page3.js';
import Animation_1 from './../module/Animation/Animation_1.js';
import Animation_2 from './../module/Animation/Animation_2.js';

import '../app.css'
// import User from './user.js';



  const Home = ({ children, location: { pathname } }) =>{
      {/*仅仅 是为了解决 路由切换 只取 路径前一个的 ，保证前一个不会重复出现*/}
    const key = pathname.split('/')[1] || 'root';
    return(<h1>
          <ReactCSSTransitionGroup
              component="div" transitionName="swap"

              transitionEnterTimeout={500} transitionLeaveTimeout={500}
              >
            {React.cloneElement(children || <div />, { key })}
          </ReactCSSTransitionGroup>
      </h1>
    )

}







const Page1 = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
        <IndexRoute component={Index}/>
        <Route path="page2" component={Page2}/>
        <Route path="page3" component={Page3}>
          <Route path="Animation_1" component={Animation_1}/>
          <Route path="Animation_2" component={Animation_2}/>
        </Route>

    </Route>
  </Router>

export default Page1;
