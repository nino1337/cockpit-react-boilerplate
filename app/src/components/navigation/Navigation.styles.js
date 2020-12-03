import { css } from '@emotion/core';
import styled from '@emotion/styled';

import mq from '../../styles/mq';

export const Navigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.globals.spacing}px 0 8px 0`};

  ${mq.md} {
    padding-bottom: ${({ theme }) => theme.globals.spacing}px;
  }
`;

export const NavigationContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${mq.md} {
    flex-wrap: no-wrap;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  ${mq.md} {
    width: auto;
  }
`;

export const NavigationItem = styled.li`
  display: flex;
  margin-bottom: 1.6rem;
  width: 50%;
  justify-content: center;
  transition: opacity 0.2s;

  ${mq.md} {
    margin: 0;
    width: auto;

    &:hover {
      opacity: 0.5;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0.5;
    `}
`;

export const NavigationLink = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  text-decoration: none;

  img {
    width: 50px;
  }

  ${mq.md} {
    margin-right: 3.2rem;

    img {
      margin-bottom: 0.8rem;
      width: 70px;
    }
  }
`;

export const PageIcon = styled.div`
  margin-left: auto;
  width: 350px;
`;
