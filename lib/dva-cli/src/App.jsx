import React from 'react';
import { Router } from 'dva/router';
import RouterView from './router/RouterView';
import routes from './router/routes';

function App({ history }) {
   return (
      <Router history={history}>
         <div className="app">
            <RouterView routes={routes} />
         </div>
      </Router>
   );
}
export default App;
