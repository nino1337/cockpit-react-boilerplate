import styled from '@emotion/styled';

export const Header = styled.header`
  padding: ${({ theme }) => `50px ${theme.globals.spacing}px`};
  background-color: ${({ theme }) => theme.colors.primary};

  a {
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    font-size: 6rem;
    font-weight: bold;
    max-width: 300px;
    text-decoration: none;
  }

  img {
    margin-left: 0;
    margin-right: 0.8rem;
    width: 80px;
  }
`;
