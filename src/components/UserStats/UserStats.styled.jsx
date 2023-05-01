import styled from '@emotion/styled';

export const Stats = styled.ul`
  display: flex;
  margin-top: auto;

  font-weight: 700;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);

  background-color: rgb(231, 231, 231);

  & > :not(:last-child) {
    border-right: 1px solid lightgray;
  }

  & > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;

    padding: 20px 10px 20px 10px;
    width: calc(100% / 3);
    text-transform: capitalize;
  }
`;

export const Quantity = styled.span`
  font-size: 18px;
  color: #292929;
`;
