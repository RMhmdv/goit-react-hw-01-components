import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
    if (friends.length === 0) return null;
    return (
        <ul className={s.friendlist}>
            {friends.map(FriendListItem)}
        </ul>
    )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default FriendList;