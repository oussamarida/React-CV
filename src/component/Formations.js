import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Formations extends Component {
  render() {
    return (
      <section style={{ padding: '10vh 20vh 10vh 20vh', textAlign: 'left' }}>
        <div className="shadow p-3 mb-3 bg-white rounded card"  >
          <div className="card-body" style={{backgroundColor :"black" ,color:"white"}}>
            <div className="card-title h5" >
              Ingenieurie, Informatique & Reseau
            </div>
            <div className="mb-2  card-subtitle h6">
              Ecole Maroccaine des sciences d'ingenieur Marrakech
            </div>
            <p className="card-text">
              2019 - 2024
            </p>
          </div>
        </div>
    
      </section>
    );
  }
}

export default Formations;
