import React,{Component} from 'react';
import '../css/index.css';
import axios from 'axios';


class cadastrarUsuario extends Component {
	constructor(props){
		super(props);
		this.state = {
			nome_completo:'',
			cpf:'',
			endereco:'',
			email:'',
		}
	}
	_cadastrar(){
	 axios.post("http://localhost:8001/usuarios/cadastrar",this.state)
      .then(res => {
       	console.log(res.data);
      }).catch((err)=>{
      	console.log(err);
      })
	}
	_updateField (event) {
	    let value = event.target.value;
	    let field = event.target.name;
	    this.setState((prevState) => {
	      prevState[field] = value;
	      return prevState;
	    });
	 }

	render() {
 	return (
 		<div>
	 		<header>
	 			<div className="Logo center">
					<h1>Controle de clientes</h1>
				</div>
	 		</header>
	 		<div className='main' >
	 			<div className='titulo'>
	 				<h1>Cadastrar cliente</h1>
	 			</div>
				<div>
					<form>
						<div className='input-container'>
							<label>Nome completo cliente:</label>
							<input type='text' name='nome_completo'  onChange={this._updateField.bind(this)} />
						</div>
						<div className='input-container'>
							<label>CPF cliente:</label>
							<input type='text' name='cpf' onChange={this._updateField.bind(this)}  />
						</div>
						<div className='input-container'>
							<label>Endereço cliente:</label>
							<input type='text' name='endereco'  onChange={this._updateField.bind(this)} />
						</div>
						<div className='input-container'>
							<label>E-mail cliente:</label>
							<input type='text' name='email'  onChange={this._updateField.bind(this)} />
						</div>
						<div className='input-container button'>
							<input type='button' value='Cadastrar cliente' onClick={this._cadastrar.bind(this)} />
						</div>
					</form>
				</div>
			</div>
	 	</div>
 		);
	}
}

export default cadastrarUsuario;
