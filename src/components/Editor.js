import React from 'react';

export const Editor = (props) => {
   
	return (
		<textarea
			name=''
			id='editor'
			cols='30'
			rows='10'
			defaultValue={props.input}
		></textarea>
	);
};

export default Editor;
