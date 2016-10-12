import React from 'react';

export default React.createClass({

	render: function(){
		return (
			<div className='thumbnail'>
				<img src={this.props.img.link} alt={this.props.img.alt} />
				<div className='caption'>
					<h5 className='text-center'>{this.props.img.des}</h5>
				</div>
			</div>
		);
	}
});