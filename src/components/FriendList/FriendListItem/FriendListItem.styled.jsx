import styled from '@emotion/styled';

const COLOR_ONLINE = 'forestgreen';
const COLOR_OFFLINE = 'tomato';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 20px 20px 30px;
  width: 250px;

  background-color: white;
  box-shadow: var(--box-shaddow);
  border-radius: 5px;
  overflow: hidden;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? COLOR_ONLINE : COLOR_OFFLINE)};
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  overflow: hidden;

  & > img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #292929;
`;
