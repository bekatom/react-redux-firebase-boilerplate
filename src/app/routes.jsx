import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './Components/app';

import HomeIndex from './Components/IndexHome';
import UserLogin from './Components/User/Login';
import UserLogout from './Components/User/Logout';
import UserRegister from './Components/user/register';
import UserProfile from './Components/user/profile';
import ResetPassword from './Components/user/reset_password';
import requireAuth from './utils/authenticated';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeIndex} />
        <Route path="/login" component={UserLogin} />
        <Route path="/logout" component={UserLogout} />
        <Route path="/register" component={UserRegister} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/profile" component={UserProfile} onEnter={requireAuth} />
    </Route>

);
