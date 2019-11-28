import React from 'react';

import UserEdit from '../UserEdit';
import UserDelete from '../UserDelete';

import { roleList } from '../../../config/data.json'

import './user-list-item.css';

const UserListItem = ({ userItem }) => {
    const {
        firstName,
        lastName,
        email,
        role
    } = userItem;

    const renderRole = roleList.find(({ value }) => value === role);

    return (
        <div className="user-list-item card">
            <div className="user-list-item__col">
                <div>Имя: {firstName}</div>
                <div>Фамилия: {lastName}</div>
            </div>
            <div className="user-list-item__col">
                <div>Адрес эл. почты: {email}</div>
                <div>Роль: {renderRole.label}</div>
            </div>
            <div className="user-list-item__col">
                <div><UserEdit user={userItem} /></div>
                <div><UserDelete user={userItem} /></div>
            </div>
        </div>
    );
}

export default UserListItem;
