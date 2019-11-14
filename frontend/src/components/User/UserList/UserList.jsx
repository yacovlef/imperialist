import React, { Component } from 'react';

import Info from '../../@common/Info';
import UserListItem from '../UserListItem';

class UserList extends Component {
    componentDidMount() {
        this.props.fetchUserList();
    }

    render() {
        const { userList, error } = this.props;

        if (error) {
            return <Info
                type='error'
            />;
        }

        return userList.map(
            (userItem) => {
                return <UserListItem
                    key={userItem.id}
                    userItem={userItem}
                />
            }
        )
    }
}

export default UserList;
