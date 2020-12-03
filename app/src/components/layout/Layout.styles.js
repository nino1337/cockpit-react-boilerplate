import styled from '@emotion/styled';

import mq from '../../styles/mq';

export const Main = styled.main`
  padding: ${({ theme }) => `${theme.globals.spacing}px 0`};

  ${mq.lg} {
    padding: ${({ theme }) => `${theme.globals.spacing * 2}px 0`};
  }
`;
