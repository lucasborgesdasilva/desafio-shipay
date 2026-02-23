// UserManagement.js
import React from 'react';

class UserManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' }
      ],
      newUserName: '',
      newUserEmail: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  // Faltou vincular as funções no constructor.
  // Usar o SetState ao invés de setar o estado diretamente, Não se muda estado diretamente.
  handleNameChange(event) {
    this.setState({ newUserName: event.target.value });
  }

  handleEmailChange (event) {
    this.setState({ newUserEmail: event.target.value });
  }

  addUser() {
    const newUser = {
      /*
        Usar o tamanho da lista como id é um problema, pois se algum registro for removido, o indice vai permanecer, ou seja
        o registro que antes era id 3, caso o registro de id 2 seja excluido, o registro que era 3, passa a ser 2
        o melhor é usar um valor que seja unico, e que não mude, caso alguém seja removido.
      */

      /**
       * Por ser um exemplo, eu vou manter assim, eu poderia passar um uuid ou outro valor único que seguisse o padrão, mas o melhor cenário mesmo,
       * seria o id, ficar de responsabilidade do backend.
       */
      id: this.state.users.length + 1,
      name: this.state.newUserName,
      email: this.state.newUserEmail
    };

    this.setState((prev) => ({
      users: [...prev.users, newUser],
      newUserName: '',
      newUserEmail: ''
    }))

    /* 
      Eu tirei o forceUpdate por que o setState, já vai fazer a atualização corretamente para mim, pegando os valores anteriores de users e adicionando o novo
      usuário.
    */
  }

  render() {
    return (
      <div>
        <h2>Gerenciamento de Usuários</h2>
        <div>
          {/* faltou adicionar o onChange no input do Nome */}
          <input
            type="text"
            placeholder="Nome do usuário"
            value={this.state.newUserName}
            onChange={(e) => this.handleNameChange(e)}
          />
          <input
            type="email"
            placeholder="Email do usuário"
            value={this.state.newUserEmail}
            onChange={(e) => this.handleEmailChange(e)}
          />
          <button onClick={() => this.addUser()}>Adicionar Usuário</button>
        </div>
        <ul>
          {/* Aqui no map faltou passar a key. */}
          {this.state.users.map(user => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserManagement;
