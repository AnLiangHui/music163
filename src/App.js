import React from 'react';

import { Provider } from "react-redux";
import store from "./store";

import ANMain from './pages/main';

function App() {
  return (
    <Provider store={store}>
      <ANMain/>
    </Provider>
  );
}

export default App;
