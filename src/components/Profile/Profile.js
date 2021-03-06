import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import s from './Profile.module.css';


const Profile = ({ name, tag, location, avatar, stats }) => {

    return (

        <div className={s.profile}>
            <div className={s.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={s.avatar}
                />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>
            <Stats {...stats} />
        </div>
    )
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}


export default Profile;