import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Importando um Component
import HelloWord from './HelloWord';
import PropsValidation from './PropsValidation';
import Events from './Events';
import Translate from './Translate';



ReactDOM.render(
	// Passando Component e Props txt
	// <HelloWord txt = 'Aqui temos a props imutavel sendo passado pelo State que é mutavel!' />,
	// <PropsValidation name='Alexandre' age='29' height='1.70' />,
	// <Events />,
	<Translate />,
	document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
