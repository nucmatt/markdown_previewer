import React from 'react';

export const Previewer = (props) => {
	return (
		<div
			id='preview'
			dangerouslySetInnerHTML={{ __html: props.markdown }}
		></div>
	);
};

export default Previewer;
