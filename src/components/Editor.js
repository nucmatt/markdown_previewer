import React, { useState } from 'react';
import marked from 'marked';
import Previewer from './Previewer';

export const Editor = () => {
	marked.setOptions({
		headerIds: false,
	});
	const defaultMarkdown = '# This is an H1 tag in markdown.';

	const [markdown, setMarkdown] = useState(defaultMarkdown);
	const handleInput = (e) => {
		setMarkdown(e.target.value);
	};
	const convertedMarkdown = marked(markdown);
	return (
		<main className='grid-2-3 bg-dark'>
			<textarea
				name=''
				id='editor'
				className='form-container'
				defaultValue={markdown}
				onChange={handleInput}
			></textarea>
			<Previewer markdown={convertedMarkdown} />
		</main>
		// <textarea name='' id='editor' defaultValue={props.input}></textarea>;
	);
};

export default Editor;
