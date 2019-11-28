import React from 'react';

import UserEdit from '../UserEdit';
import UserDelete from '../UserDelete';

import { roleList } from '../../../config/data.json'

import './user_list_item.css';

const UserListItem = ({ userItem }) => {
    const {
        firstName,
        lastName,
        email,
        role
    } = userItem;

    const renderRole = roleList.find(({ value }) => value === role);

    return (
        <div className="user_list_item card">
            <div>Имя: {firstName}</div>
            <div>Адрес эл. почты: {email}</div>
            <div className="user_list_item__edit"><UserEdit user={userItem} /></div>
            <div>Фамилия: {lastName}</div>
            <div>Роль: {renderRole.label}</div>
            <div className="user_list_item__delete"><UserDelete user={userItem} /></div>
        </div>
    );
}

export default UserListItem;
