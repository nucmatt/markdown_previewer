import React, { useState } from 'react';
import marked from 'marked';
import Previewer from './components/Previewer';
// import Editor from './components/Editor';
import './scss/style.scss';

function App() {
  marked.setOptions({
    headerIds: false,
  });
  const defaultMarkdown = '# This is an H1 tag in markdown.'
  
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const handleInput = (e) => {
    setMarkdown(e.target.value);
  }
  const convertedMarkdown = marked(markdown);

	return (
		<main className='container grid-2-3 bg-primary'>
			{/* <Editor input={defaultMarkdown}/> */}
      <textarea
			name=''
      id='editor'
      className='form-container'
      defaultValue={markdown}
      onChange={handleInput}
		></textarea>
			<Previewer markdown={convertedMarkdown}/>
		</main>
	);
}

export default App;
