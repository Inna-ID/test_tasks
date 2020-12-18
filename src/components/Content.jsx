import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PageMain from './PageMain';
import PageEmployees from './PageEmployees';

const Content = () => {
   return (
      <Switch>
         <Route exact path='/' component={PageMain} />
         <Route path='/employees' component={PageEmployees} />
      </Switch>
   )
}

export default Content;
