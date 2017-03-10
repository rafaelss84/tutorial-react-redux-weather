import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    //Estado do componente, completamente separado do Estado
    //da Aplicação controlado pelo Redux
    this.state = {term: ''};
    //Aqui estou informando que THIS tem uma função de onInputChange
    //e estou substituindo o método local pelo método "binded"
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    //console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    //Previne que o comportamento padrão de enviar o form seja chamado
    event.preventDefault();

    //Precisa buscar os dados de previsão
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Obtenha uma previsão de 5 dias para várias cidades"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Enviar</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

//Este conteiner específico não precisa do State, por isso null
export default connect(null, mapDispatchToProps)(SearchBar);
