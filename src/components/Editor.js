import React from 'react';

export const Editor = (props) => {
	return <textarea name='' id='editor' defaultValue={props.input}></textarea>;
};

export default Editor;
