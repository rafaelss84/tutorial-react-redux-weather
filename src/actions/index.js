import axios from 'axios'; //Biblioteca para chamadas Ajax
import {API_KEY} from './api_key';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//É bom colocar os tipos de ação em constantes, de forma
//a manter a consistência por todo a aplicação
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},br`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    //Em um primeiro momento, o request é uma promise. O
    //middleware redux-promise (importado separadamente)
    //cuida dele, de forma que
    //ele pára a ação e espera o promise ser concluído,
    //e então o conteiner recebe os dados já prontos
    payload: request
  };
}
