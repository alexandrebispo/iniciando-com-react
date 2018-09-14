// Importando a classe dependente para criar component
import React, { Component } from 'react'

// Importando outro Component
import StateInput from './StateInput'

// Criando classe e extendendo classe de dependência da classe importada
class HelloWord extends Component {
	//Este construtor vai permitir transmitir dados entre componentes
	constructor(props) {
		super(props)
		// props e this.props, são objetos iguais que recebem propriedade declarado no Elemento
		console.log(props, this.props)
		// Atribuindo valor ao State
		this.state = {
			name: 'Alexandre Bispo',
			// Recebendo Propriedade no state
			txt: this.props.txt
		}
	}

	// Método fornecido pela classe Component extendida a minha classe
	render() {
		const result = 4
		const style = {
			color: '#efefef',
			fontSize: 30
		}
		const styleProps = {
			backgroundColor: '#000',
			color: '#fff'
		}
		// Passando paramentro para execução do método
		return (
			// Ao invés de usarmos html puro, vamos usar JSX
			<div className="my-class-from-react">
				{/*	This is my first component	*/}

				{/*	// Fazendo Uso do componente Importado	*/}
				<StateInput />

				<h1 style={style}>Hello Word from Component React.js by Alexandre Bispo</h1>
				<br />
				{/*	// Recebendo State txt	*/}
				<h1 style={styleProps}>{this.state.txt}</h1>
				<h4>{ result === 2 * 2 ? <div><ul><li>'TRUE'</li></ul></div> : <div><ul><li>'FALSE'</li></ul></div>	}</h4>
				{/*	// Acessando State	*/}
				<br /><span>{	this.state.name	}</span>
			</div>
		)
	}
}
// Exportando Component
export default HelloWord