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
You can **bold** text.\n
You can *italicize* text.\n
***Or both!***
> There are block quotes.\n
> Here is a block quote...
>
> Across multiple lines!
>> With a nested blockquote as well!\n
> #### You can even combine markdown syntaxes like headers.
> - With lists
> - **And text styling**\n
Last but not least... 
![puppy pic!](https://cdn.pixabay.com/photo/2016/03/09/15/21/dog-1246610_960_720.jpg)
puppy images!`;

	const [markdown, setMarkdown] = useState(defaultMarkdown);
	const handleInput = (e) => {
		setMarkdown(e.target.value);
	};
	const convertedMarkdown = marked(markdown);
	return (
		<main className='grid-2-3 bg-success'>
			<textarea
				name=''
				id='editor'
				className='m'
				defaultValue={markdown}
				onChange={handleInput}
			></textarea>
			<Previewer markdown={convertedMarkdown} />
		</main>
	);
};

export default Editor;
