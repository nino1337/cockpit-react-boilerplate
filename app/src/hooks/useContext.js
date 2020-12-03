import { useContext } from 'react';

import context from '../localization/context';

const useCustomContext = () => {
  const data = useContext(context);

  return data;
};

export default useCustomContext;
