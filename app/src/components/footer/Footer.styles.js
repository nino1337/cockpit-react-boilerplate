import styled from '@emotion/styled';

import mq from '../../styles/mq';

export const Footer = styled.footer`
  font-weight: bold;
  padding: ${({ theme }) => `${theme.globals.spacing}px 0`};
`;

export const FooterLinks = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
  margin-left: 0.6rem;
`;

export const FooterContent = styled.p`
  display: flex;
  color: ${({ theme }) => theme.colors.grey};
  flex-wrap: wrap;
`;

export const FooterLogos = styled.ul`
  display: flex;

  img {
    width: auto;
    height: 60px;
    margin: 0 0 0 1.6rem;
  }

  ${mq.md} {
    justify-content: flex-end;

    img {
      height: 150px;
    }
  }
`;
