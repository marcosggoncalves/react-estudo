import React,{Component} from 'react';
import '../css/index.css';
import axios from 'axios';


class usuarios extends Component {
	constructor(props){
		super(props);
		this.state = {
		   usuarios: []
		}
	}
 	componentDidMount() {
	  axios.get("http://localhost:8001/usuarios")
      .then(res => {
        this.setState({ usuarios:res.data.usuarios });
      }).catch((err)=>{
      	console.log(err);
      })
	}
	render() {
		console.log(this.state.usuarios)
 	return (
 		<div>
	 		<header>
	 			<div className="Logo center">
					<h1>Controle de clientes</h1>
				</div>
	 		</header>
	 		<div className='main' >
	 			<div className='titulo'>
	 				<h1>Clientes cadastrados</h1>
	 			</div>
				<table>
					<thead>
						<tr>
							<th>Nome completo </th>
							<th>CPF</th>
							<th>Endereço</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody id="lista_contatos">
						{this.state.usuarios.map((usuario,i) =><tr key={i}>
							<th>{usuario.nome_completo}</th>
							<th>{usuario.cpf}</th>
							<th>{usuario.endereco}</th>
							<th>{usuario.email}</th>
						</tr>)}
					</tbody>
				</table>
			</div>
	 	</div>
 		);
	}
}

export default usuarios;
