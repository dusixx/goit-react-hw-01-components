import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <List>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </List>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
