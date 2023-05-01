import PropTypes from 'prop-types';
import { Desc } from './UserDesc.styled';

const DEF_AVATAR = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

export const UserDesc = ({ username, tag, location, avatar = DEF_AVATAR }) => (
  <Desc>
    <img src={avatar} alt="User avatar" />
    <p data-name>{username}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </Desc>
);

UserDesc.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};
