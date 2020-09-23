import React from 'react';
import Previewer from './components/Previewer';
import Editor from './components/Editor';
import './scss/style.scss';

function App() {
	return (
		<main className='container grid-2-3 bg-dark'>
			<Editor />
			<Previewer />
		</main>
	);
}

export default App;
