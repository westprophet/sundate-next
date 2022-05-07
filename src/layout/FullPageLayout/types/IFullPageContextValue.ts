import { fullpageApi, Item } from '@fullpage/react-fullpage';
import { TFullPageTheme } from './TFullPageTheme';

export default interface IFullPageContextValue {
  api: fullpageApi | null;
  state: any;
  theme: {
    value: TFullPageTheme;
    setTheme: (t: TFullPageTheme) => any;
  };
  current: {
    origin: Item;
    destination: Item;
    direction: string;
  } | null;
}
