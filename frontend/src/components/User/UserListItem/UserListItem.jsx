import React from 'react';

import UserEdit from '../UserEdit';
import UserDelete from '../UserDelete';

import './user_list_item.css';

const UserListItem = ({ userItem }) => {
    const {
        firstName,
        lastName,
        email,
        role
    } = userItem;

    return (
        <div className="user_list_item card">
            <div>
                <div>Имя: {firstName}</div>
                <div>Фамилия: {lastName}</div>
            </div>
            <div>
                <div>Адрес эл. почты: {email}</div>
                <div>Роль: {role}</div>
            </div>
            <div>
                <div>
                    <UserEdit
                        user={userItem}
                    />
                </div>
                <div>
                    <UserDelete
                        user={userItem}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserListItem;
