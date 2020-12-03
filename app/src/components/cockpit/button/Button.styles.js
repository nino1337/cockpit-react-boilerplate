import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const Button = styled.a`
  cursor: pointer;
  border-radius: 3px;
  display: block;
  min-width: 200px;
  max-width: 100%;
  padding: 1rem;
  text-align: center;
  transition: color 0.2s, background-color 0.2s;
  width: fit-content;
  margin-bottom: 1.6rem;

  ${({ variant, theme, backgroundColor }) =>
    variant === 'primary' &&
    css`
      background-color: ${backgroundColor || theme.colors.primary};
      color: ${theme.colors.white} !important;
    `}

  &[disabled] {
    color: ${({ theme }) => theme.colors.white} !important;
    background-color: ${({ theme }) => theme.colors.grey} !important;
  }
`;
