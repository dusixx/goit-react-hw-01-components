import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/utils';
import { Section, Title, List, Item, Label, Percentage } from './Stats.styled';

export const Stats = ({ title, stats }) => (
  <Section>
    {title && <Title>{title}</Title>}
    <List>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id ?? label} bgColor={getRandomHexColor()}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </List>
  </Section>
);

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
