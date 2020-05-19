'use strict';

var React = require('react'),
	createClass = require('create-react-class')
;

var ClearInput = createClass({
	render: function() {
		return React.createElement('div', {
			onClick: this.setTime
		}, 'Clear');
	},

	setTime: function() {
		this.props.clearDate(true);
	}
});

module.exports = ClearInput;
