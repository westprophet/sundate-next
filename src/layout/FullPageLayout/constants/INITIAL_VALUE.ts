import IFullPageContextValue from '../types/IFullPageContextValue';

export const INITIAL_VALUE: IFullPageContextValue = {
  api: null,
  state: null,
  theme: {
    value: 'white',
    setTheme: () => {},
  },
  current: null,
};
