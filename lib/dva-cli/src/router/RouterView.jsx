import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'dva/router';
export default class RouterView extends Component {
   render() {
      let { routes } = this.props;
      let redirectArr = routes.filter(item => item.redirect);
      let RedirectArr = redirectArr.map((item, index) => {
         return <Redirect key={index} from={item.path} to={item.redirect} />;
      });
      routes = routes.filter(item => !item.redirect);
      return (
         <Switch>
            {routes.map((item, index) => {
               return (
                  <Route
                     key={index}
                     path={item.path}
                     render={props => {
                        return (
                           <item.component
                              {...props}
                              children={item.children}
                           />
                        );
                     }}
                  />
               );
            })}
            {RedirectArr.length !== 0 && RedirectArr}
         </Switch>
      );
   }
}
