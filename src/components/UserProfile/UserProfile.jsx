import { UserDesc } from 'components/UserDesc/UserDesc';
import { UserStats } from 'components/UserStats/UserStats';
import { Container } from './UserProfile.styled';

export const UserProfile = props => (
  <Container>
    <UserDesc {...props} />
    <UserStats {...props.stats} />
  </Container>
);
