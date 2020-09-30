import React, { useState } from 'react';
import marked from 'marked';
import Previewer from './Previewer';

export const Editor = () => {
	marked.setOptions({
		headerIds: false,
		breaks: true,
	});
	const defaultMarkdown = `# This is an header/H1 tag.\n
## And a sub-header/H2 tag.\n
###### And so on to an H6 sub-head tag!\n
Here is a [link](https://example.com)\n
Some inline code: \`<div></div>\`\n
A fenced code block for multiple lines of code.
\`\`\`
{
	"firstName": "Jane",
	"lastName": "Doe",
	"age": 30
}
\`\`\`\n
You can make ordered lists:
1. First item
1. Second item
1. Third item\n
And unordered lists:
- First item
- Second item
- Third item\n
You can **bold** text.`;

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
				className='m'
				defaultValue={markdown}
				onChange={handleInput}
			></textarea>
			<Previewer markdown={convertedMarkdown} />
		</main>
		// <textarea name='' id='editor' defaultValue={props.input}></textarea>;
	);
};

export default Editor;
