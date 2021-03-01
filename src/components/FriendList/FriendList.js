import React from 'react'


import s from './FriendList.module.scss';


const FriendList = ({}) = => {
    return (
        <ul className={s.friendlist}>
            <li className={s.item}>
                <span className={s.status}></span>
                <img className={s.avatar} src="" alt="" width="48" />
                <p className={s.name}></p>
            </li>           
        </ul>
    )
}

export default FriendList;