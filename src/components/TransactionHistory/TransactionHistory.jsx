import PropTypes from 'prop-types';
import { History } from './TransactionHistory.styled';

const Header = () => (
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
);

const Body = ({ items }) => (
  <tbody>
    {items.map(({ id, type, amount, currency }) => (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    ))}
  </tbody>
);

export const TransactionHistory = ({ items }) => (
  <History>
    <Header />
    <Body items={items} />
  </History>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
