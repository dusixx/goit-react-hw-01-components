import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/utils';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

const DEF_AVATAR = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

export const FriendListItem = ({ avatar = DEF_AVATAR, name, isOnline }) => (
  <Item>
    <Status online={isOnline} />
    <Avatar bgColor={getRandomHexColor()}>
      <img src={avatar} alt="User avatar" />
    </Avatar>
    <Name>{name}</Name>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
