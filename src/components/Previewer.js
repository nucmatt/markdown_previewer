import React from 'react';

export const Previewer = (props) => {
	return (
		<div
            id='preview'
			className='bg-light m'
			dangerouslySetInnerHTML={{ __html: props.markdown }}
		></div>
	);
};

export default Previewer;
