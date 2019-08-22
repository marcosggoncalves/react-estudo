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
	 			<div>
		 			<div>
		 				<h1>Clientes cadastrados</h1>
		 			</div>
	 			</div>
	 		</header>
	 		<div>
	 			<ul>
		        	{this.state.usuarios.map((usuario,i) => <div  key={i}>{usuario.nome_completo}</div>)}
		      	</ul>
	 		</div>
	 	</div>
 		);
	}
}

export default usuarios;
