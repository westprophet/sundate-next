import { fullpageApi } from '@fullpage/react-fullpage';

export default interface IFullPageContextValue {
  fullpageApi: fullpageApi | null;
  state: any;
}
