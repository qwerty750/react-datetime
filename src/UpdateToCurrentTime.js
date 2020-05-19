'use strict';

var React = require('react'),
	createClass = require('create-react-class')
;

var UpdateToCurrentTime = createClass({
	render: function() {
		return React.createElement('div', {
			onClick: this.setTime
		}, 'Now');
	},

	setTime: function() {
		this.props.setExactDate(new Date(), true);
	}
});

module.exports = UpdateToCurrentTime;
