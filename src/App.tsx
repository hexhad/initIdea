import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import MainScreen from './screens/MainScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const App: FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}


export default App;
