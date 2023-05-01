import { UserDesc } from './UserDesc/UserDesc';
import { UserStats } from './UserStats/UserStats';
import { Container } from './UserProfile.styled';

export const UserProfile = props => (
  <Container>
    <UserDesc {...props} />
    <UserStats {...props.stats} />
  </Container>
);
