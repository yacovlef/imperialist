import React from 'react';

import UserList from './UserList';
import UserAdd from './UserAdd';

import './user.css';

const User = () => {
    return (
        <>
            <div className="user__control card card__control">
                <UserAdd />
            </div>
            <UserList />
        </>
    );
}

export default User;
