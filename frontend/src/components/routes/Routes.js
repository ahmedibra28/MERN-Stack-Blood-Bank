import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeScreen from '../../screens/HomeScreen'
import LoginScreen from '../../screens/LoginScreen'
import ProfileScreen from '../../screens/ProfileScreen'
import RegisterScreen from '../../screens/RegisterScreen'
import UserListScreen from '../../screens/UserListScreen'
import BloodStoreScreen from '../../screens/BloodStoreScreen'
import BloodRequestScreen from '../../screens/BloodRequestScreen'
import NotFound from '../NotFound'

import PrivateRoute from '../routes/PrivateRoute'
import AdminPrivateRoute from '../routes/AdminPrivateRoute'
import BloodIssueScreen from '../../screens/BloodIssueScreen'

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <PrivateRoute path='/profile' component={ProfileScreen} />
        <PrivateRoute path='/blood-issue/:id' component={BloodIssueScreen} />
        <PrivateRoute exact path='/blood-store' component={BloodStoreScreen} />
        <PrivateRoute
          path='/blood-store/page/:pageNumber'
          component={BloodStoreScreen}
        />
        <PrivateRoute
          exact
          path='/blood-request'
          component={BloodRequestScreen}
        />
        <PrivateRoute
          path='/blood-request/page/:pageNumber'
          component={BloodRequestScreen}
        />
        <AdminPrivateRoute
          exact
          path='/admin/users'
          component={UserListScreen}
        />
        <AdminPrivateRoute
          path='/admin/users/page/:pageNumber'
          component={UserListScreen}
        />

        <Route exact path='/' component={HomeScreen} />
        <Route component={NotFound} />
      </Switch>
    </section>
  )
}

export default Routes
