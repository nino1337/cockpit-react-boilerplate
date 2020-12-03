import React from 'react';

import { axe, render } from '../../../utils/testUtils';
import Button from './Button';

describe('<Button />', () => {
  let utils;
  describe('children', () => {
    describe('when children are given', () => {
      it('renders the given children', () => {
        utils = render(<Button text="Test" />);
        const { getByText } = utils;

        expect(getByText('Test')).toBeInTheDocument();
      });
    });
  });

  describe('accessibility', () => {
    it('is accessible according to https://github.com/nickcolley/jest-axe', async () => {
      utils = render(<Button text="Test" />);
      const { container } = utils;
      const component = await axe(container);

      expect(component).toHaveNoViolations();
    });
  });
});
