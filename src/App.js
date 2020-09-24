import React from 'react';
import marked from 'marked';
import Previewer from './components/Previewer';
import Editor from './components/Editor';
import './scss/style.scss';

function App() {
  marked.setOptions({
    headerIds: false,
  });
  const defaultMarkdown = '# This is an H1 tag in markdown.'
  const convertedMarkdown = marked(defaultMarkdown);
	return (
		<main className='container grid-2-3 bg-dark'>
			<Editor input={defaultMarkdown}/>
			<Previewer markdown={convertedMarkdown}/>
		</main>
	);
}

export default App;
