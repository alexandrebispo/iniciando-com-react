import React, { Component } from 'react'

class Events extends Component {

	constructor(props) {
		
		super(props)

		this.state = {
			name: '',
			email: '',
			data: []
		}

		// Atribuindo o escopo a função
		this.updateInputName	= this.updateInputName.bind(this)
		this.clickEvent			= this.clickEvent.bind(this)
		this.pushInputEmail		= this.pushInputEmail.bind(this)
		this.deleteEvent		= this.deleteEvent.bind(this)
	}

	// Criando método para receber evento
	updateInputName(e) {
		return this.setState({
			name: e.target.value
		})
	}

	pushInputEmail(e) {
		return this.setState({
			email: e.target.value
		})
	}

	// Enviando string state.email para array state.data
	clickEvent(e) {
		this.state.data.push(this.state.email)

		return this.setState({
			email: ''
		})
	}

	// Deletando item do array state data e atribuindo array newState com a alteração a state data.
	deleteEvent(item) {
		// Duplicando array state data
		const newState = this.state.data

		// Verificando se item existe no array duplicado
		if(newState.indexOf(item) > -1) {
			// removendo item caso exista
			newState.splice(newState.indexOf(item), 1)
		}
		
		// Substituindo array original pelo duplicado
		this.setState({
			data: newState
		})

	}

	render() {

		const {	data } = this.state
		const itens = data.map((item) => {
			return <li key={item}>
				{ item.toString() }
				<span> </span>
				<button type="button" onClick={this.deleteEvent.bind(this,item)}>Delete</button>
			</li>
		})
		
		return (
			<div>
				<input type="text" 
				name="name"
				/* Atribuindo valor ao input */
				value={ this.state.name }
				/* Ouvindo Evento toda vez que modificado e passando valor ao input	*/
				onChange={ this.updateInputName } />

				<br /><br />
				<input type="text" 
				name="email"
				/* Atribuindo valor ao input */
				value={ this.state.email }
				/* Ouvindo Evento toda vez que modificado e passando valor ao input	*/
				onChange={ this.pushInputEmail } />
				<br />
				<button type="button" onClick={ this.clickEvent }>Submit</button>

				{/* Printando State Name da classe Events */}
				<h2>{ this.state.name }</h2>
				
				<ul>
					{ itens }
				</ul>
			</div>
		)
	}
}

export default Events