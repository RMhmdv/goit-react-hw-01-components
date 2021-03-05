import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';



const FriendListItem = ({ id, avatar, name, isOnline }) => {
    const statusClassName = `${s.status} ${isOnline ? s.online : s.offline}`;
    return (
        <li key={id} className={s.item}>
            <div className="friendFlex">
            <span className={statusClassName}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
            </div>
        </li>
    )
};

FriendListItem.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};


export default FriendListItem;

