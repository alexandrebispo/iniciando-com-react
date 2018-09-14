import React, {	Component } from 'react'

import PropTypes from 'prop-types';

class PropsValidation extends Component {

	constructor(props) {
		console.log(props)
		super(props)
	}

	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<h1>{this.props.age}</h1>
				<h1>{this.props.height}</h1>
			</div>
		)
	}
}

PropsValidation.PropTypes = {
	name	: PropTypes.string,
	age		: PropTypes.number,
	height	: PropTypes.number,
	func	: PropTypes.func,
	obj		: PropTypes.object,
	arr		: PropTypes.array,
	bool	: PropTypes.bool
}


PropsValidation.defaultProps = {
	name	: 'Alexandre',
	age		: 29.5,
	height	: 1.69
}

export default PropsValidation