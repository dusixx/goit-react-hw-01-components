import PropTypes from 'prop-types';
import { formatNumber } from 'components/utils';
import { Stats, Quantity } from './UserStats.styled';

export const UserStats = props => (
  <Stats>
    {Object.entries(props).map(([label, quantity]) => (
      <li key={label}>
        <span>{label}</span>
        <Quantity>{formatNumber(quantity)}</Quantity>
      </li>
    ))}
  </Stats>
);

UserStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
