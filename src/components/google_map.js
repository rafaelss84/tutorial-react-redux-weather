import React, {Component} from 'react';

class GoogleMap extends Component {
  //Método do ciclo de vida do componente. É chamado
  //após ele ser renderizado na tela
  componentDidMount() {
    //Biblioteca do google maps que pede uma referencia
    //de um elemento já na tela. Outra possibilidade
    //é usar o react-google-maps, que já tem tudo
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    //Criar uma referencia ao elemento é uma maneira de usar
    //third party libraries como o Google Maps
    return <div ref="map" />;
  }
}

export default GoogleMap;
