import {FETCH_WEATHER} from '../actions/index';

//O estado default é um array porque nesta aplicação
//vamos manipular um array de previsões de clima
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      //action.payload.data por causa da estrutura retornada
      //pelo serviço
      //Em React e em Redux, o Estado da aplicação nunca
      //deve ser alterado 'inplace'. Caso precise ser alterado
      //deve-se sempre retornar um objeto novo com as alterações.
      //Por esse motivo, usa-se concat ao invés de push para
      //adicionar o item à lista
      //return state.concat([action.payload.data]); Sintaxe ES5
      return [action.payload.data, ...state]; //Sintaxe ES6
  }
  return state;
}
