import React from 'react';
import Header from './Header';
import Photo from './Photo';
import TimeLine from './TimeLine';
import Footer from './Footer';

export default React.createClass({

	render: function() {
		return (
			<div className='container'>
				<div className='jumbotron'>
					<Header title={this.props.store.title} 
							subTitle={this.props.store.subTitle}
							/>
					<Photo img={this.props.store.img}/>	
					<TimeLine timeline={this.props.store.timeLine} />		
					<Footer quote={this.props.store.quote}
							reference={this.props.store.reference}/>
				</div>
			</div>);
	}
});