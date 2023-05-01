import styled from '@emotion/styled';

const COLOR_BASE = '30, 184, 255';

export const History = styled.table`
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 800px;
  }

  font-size: 14px;
  text-transform: capitalize;
  color: rgb(109, 109, 109);

  border-collapse: collapse;
  background-color: white;
  box-shadow: var(--box-shaddow);

  & th {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    background-color: rgb(${COLOR_BASE});
  }

  & tr {
    height: 55px;
    text-align: center;
  }

  & tr:nth-of-type(even) {
    background-color: rgba(${COLOR_BASE}, 0.1);
  }
`;
