import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { store, history } from './redux/store';
import PublicRoutes from './router';

const PublicRouter = () => {

  return (
    <Provider store={store}>
      <PublicRoutes history={history} />
    </Provider>
  );
};

const node = document.getElementById('root');
render(<PublicRouter />, node);

registerServiceWorker();