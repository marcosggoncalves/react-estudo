import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Usuarios from './components/usuarios';
import Cadastrarcliente from './components/cadastrarCliente';

ReactDOM.render(
	<BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Usuarios} />
            <Route path="/cadastrar-cliente" component={Cadastrarcliente} />
        </Switch>
    </ BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
