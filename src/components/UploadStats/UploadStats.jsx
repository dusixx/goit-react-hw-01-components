import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/utils';
import {
  Section,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './UploadStats.styled';

export const UploadStats = ({ title = 'Upload stats', stats }) => (
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

UploadStats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
