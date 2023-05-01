import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  background-color: white;
  box-shadow: var(--box-shaddow);

  border-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.h2`
  padding: 25px;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;

  margin-top: auto;
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 420px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  flex-basis: calc(100% / 5);
  padding: 15px;

  color: whitesmoke;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
