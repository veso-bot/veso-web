import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ConnectionRequired from '../components/ConnectionRequired';
import UserNew from './user/usernew';
import Search from './search';
import UserEdit from './user/useredit';
import UserLibraryAccess from './user/userlibraryaccess';
import UserParentalControl from './user/userparentalcontrol';
import UserPassword from './user/userpassword';
import UserProfile from './user/userprofile';
import UserProfiles from './user/userprofiles';
import Home from './home';
import Movies from './movies';

const AppRoutes = () => (
    <Routes>
        <Route path='/'>
            {/* User routes */}
            <Route path='/' element={<ConnectionRequired />}>
                <Route path='search.html' element={<Search />} />
                <Route path='userprofile.html' element={<UserProfile />} />
                <Route path='home.html' element={<Home />} />
                <Route path='movies.html' element={<Movies />} />
            </Route>

            {/* Admin routes */}
            <Route path='/' element={<ConnectionRequired isAdminRequired />}>
                <Route path='usernew.html' element={<UserNew />} />
                <Route path='userprofiles.html' element={<UserProfiles />} />
                <Route path='useredit.html' element={<UserEdit />} />
                <Route path='userlibraryaccess.html' element={<UserLibraryAccess />} />
                <Route path='userparentalcontrol.html' element={<UserParentalControl />} />
                <Route path='userpassword.html' element={<UserPassword />} />
            </Route>

            {/* Public routes */}
            <Route path='/' element={<ConnectionRequired isUserRequired={false} />}>
                <Route index element={<Navigate replace to='/home.html' />} />
            </Route>

            {/* Suppress warnings for unhandled routes */}
            <Route path='*' element={null} />
        </Route>
    </Routes>
);

export default AppRoutes;
