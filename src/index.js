import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
	ProductsProvider,
	CartProvider,
	UserProvider,
	FilterProvider,
} from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ProductsProvider>
			<App />
		</ProductsProvider>
	</React.StrictMode>
);


