import { fullpageApi, Item } from '@fullpage/react-fullpage';

export default interface IFullPageContextValue {
  api: fullpageApi | null;
  state: any;
  current: {
    origin: Item;
    destination: Item;
    direction: string;
  } | null;
}
