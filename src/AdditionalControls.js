'use strict';

var React = require('react'),
	createClass = require('create-react-class'),
	UpdateToCurrentTime = require('./UpdateToCurrentTime'),
	ClearInput = require('./ClearInput')
	;

var AdditionalControls = createClass({
	render: function() {
		var items = [];
		if (this.props.showUpdateToCurrentTime) {
			var updateToCurrentTime =
				React.createElement('div', {key: 'dvfi1', className: 'rdtAddAct-item'},
					React.createElement(UpdateToCurrentTime, this.props)
				);
			items.push(updateToCurrentTime);
		}

		if (this.props.showClearTime) {
			var clearInput =
				React.createElement('div', {key: 'dvfi2', className: 'rdtAddAct-item'},
					React.createElement(ClearInput, this.props)
				);
			items.push(clearInput);
		}

		if (items.length > 0) {
			return React.createElement('div', {className: 'rdtAddAct'}, items);
		}

		return null;
	},

	setTime: function() {
		this.props.setExactDate(new Date(), true);
	}
});

module.exports = AdditionalControls;
