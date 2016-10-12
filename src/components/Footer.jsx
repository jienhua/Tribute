import React from 'react';

export default React.createClass({

	render: function(){
		return (
			<div>
				<blockquote>
					<p>{this.props.quote.quote}</p>
					<footer>{this.props.quote.by}</footer>
				</blockquote>
				<h3>
					If you have time, you should read more about this incredible human being on his
					<a href={this.props.reference.wiki}>Wikipedia entry</a> and
					<a href={this.props.reference.timeLine}>Complete TimeLine</a>.
				</h3>
			</div>
		);
	}
});