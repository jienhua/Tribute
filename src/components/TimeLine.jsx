import React from 'react';

export default React.createClass({

	render: function(){
		return (
			<div>
				<h4>Here's a time line of Oda Nobunaga's life:</h4>
				<ul>
					{this.props.timeline.map((line, index) => (
						<li key={index}><strong>{line.year}</strong> - {line.des} {line.id}</li>
					))}
				</ul>
			</div>
		);
	}
})