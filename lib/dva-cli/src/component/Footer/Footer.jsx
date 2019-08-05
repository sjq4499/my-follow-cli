import React, { Component } from 'react';
import { NavLink } from 'dva/router';

export default class Footer extends Component {
   render() {
      return (
         <div className="footer">
            <NavLink to="/home" activeClassName="active">
               首页
            </NavLink>
            <NavLink to="/main" activeClassName="active">
               内容
            </NavLink>
            <NavLink to="/my" activeClassName="active">
               我的
            </NavLink>
         </div>
      );
   }
}
