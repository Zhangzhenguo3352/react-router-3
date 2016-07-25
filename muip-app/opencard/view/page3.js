import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router';

import '../app.css'

const Page3 = ({ children, location: { pathname } }) => (


    <div className="Image">
        <h1><Link to="/">index</Link></h1>
        <p><Link to="/page3/Animation_1">动画1</Link></p>
        <p><Link to="/page3/Animation_2">动画22</Link></p>
        {/*这个动画是控制 page3 里面的子级动画的，component = "div" 是 组件的名字是 ， transitionName="example" 是组件 过度的 名字*/}
        {/*React.cloneElement(第一个参数类似 this,props.children || 有就显示有的，没有就显示默认的 <div/>, 第二参数路名字（这个路由名字是这个页面前的路径，如： 你在Animation_1页面 你从
            /page3 过来 那这个 可以拿的就是 前一个的路径 ，就是 /page3
            这个地方我们看到 路径是 <Link to="/page3/Animation_1">动画1</Link></p>   身上的 "/page3/Animation_1"  这里我们可以看入口的文件
             page1 用  const key = pathname.split('/')[1] || 'root'     对 key 进行了 处理，就是说 ： 仅取 整个 路径的第一部分
             从而保证了 取路径 http://localhost:3333/page3/Animation_1   中 /page3  不会 循环一直 出现
        ）)*/}
        <ReactCSSTransitionGroup
            component="div" transitionName="example"

            transitionEnterTimeout={500} transitionLeaveTimeout={500}
            >
            {React.cloneElement(children || <div/>, { key: pathname })}
        </ReactCSSTransitionGroup>
    </div>

)




export default Page3;
