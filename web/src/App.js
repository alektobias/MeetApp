import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import history from '~/services/history';
import '~/config/ReactotronConfig';
import store from '~/store';
import GlobalStyle from './styles/global';

function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Routes />
				<GlobalStyle />
				<ToastContainer autoClose={3000} />
			</Router>
		</Provider>
	);
}

export default App;
