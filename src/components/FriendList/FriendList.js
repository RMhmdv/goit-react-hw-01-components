import React from 'react';


import s from './FriendList.module.css';

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


const FriendList = ({ friends }) => {
    if (friends.length === 0) return null;
    return (
        <ul className={s.friendlist}>
            {friends.map(FriendListItem)}
        </ul>
    )
};

export default FriendList;