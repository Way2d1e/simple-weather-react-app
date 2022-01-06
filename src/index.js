import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import App from './components/app';

ReactDOM.render(
	<Provider store={store}>
		<AppProvider i18n={enTranslations}>
			<App />
		</AppProvider>
	</Provider>,
	document.getElementById('root'),
);
