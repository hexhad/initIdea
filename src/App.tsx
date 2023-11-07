import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import MainScreen from './screens/MainScreen';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import MainScreen from 'screens/MainScreen';


const App: FC = (): JSX.Element => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <MainScreen />
      </Provider>
    </PersistGate>
  );
}


export default App;
