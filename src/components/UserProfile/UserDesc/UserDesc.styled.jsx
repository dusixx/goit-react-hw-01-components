import styled from '@emotion/styled';

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  font-size: 16px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.4);

  & > img {
    width: 100px;
    margin-bottom: 20px;

    background-color: lightblue;
    border-radius: 50%;
  }

  & [data-name] {
    font-size: 24px;
    color: #292929;
  }
`;
