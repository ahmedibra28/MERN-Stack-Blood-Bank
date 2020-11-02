import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import ChangePassword from '../auth/ChangePassword';
import Register from '../auth/Register';
import Dashboard from '../dashboard/Dashboard';
import BloodRequest from '../bloodRequest/BloodRequest';
import BloodStore from '../bloodStore/BloodStore';
import BloodIssue from '../bloodIssue/BloodIssue';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';

import PrivateRoute from '../routes/PrivateRoute';
import AdminPrivateRoute from '../routes/AdminPrivateRoute';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route path='/login' component={Login} />
        <AdminPrivateRoute path='/register' component={Register} />
        <PrivateRoute path='/change-password' component={ChangePassword} />
        <Route exact path='/' component={Dashboard} />
        <PrivateRoute exact path='/blood-request' component={BloodRequest} />
        <PrivateRoute exact path='/blood-store' component={BloodStore} />
        <PrivateRoute exact path='/blood-issue/:id' component={BloodIssue} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
