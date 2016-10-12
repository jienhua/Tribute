import React from 'react';

export default React.createClass({

	render: function() {
		return (
			<div>
				<h1 className='text-center'>{this.props.title}</h1>
				<h3 className='text-center'><i>{this.props.subTitle}</i></h3>
			</div>
		);
	}
});