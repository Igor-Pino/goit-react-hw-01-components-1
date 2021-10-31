import propTypes from 'prop-types';
import s from './Friends.module.css';
import './friend.css';

export default function FriendMarkup(props) {
  const { name, avatar, isOnline } = props;

  return (
    <>
      <span className={`status status-${isOnline && 'offline'}`}></span>
      <img className={s.avatar} src={avatar} alt="{name}" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendMarkup.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};

// const isOnline = true
// {isOnline && 'онлайн'} - якщо онлайн то рендериться
// {isOnline ? 'online' : 'offline'} - якщо онлайн то рендериться 'онлайн', якщо ні то 'офлайн'
