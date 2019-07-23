import React, { Component, Fragment } from 'react';
import cafeAmericano from '../assets/images/cafeAmericano.png';

class MakeOrders extends Component {
    render() {
            return(
                <Fragment>
                <h2>TOMAR ORDENES</h2>
                    
                    <div className="card border-primary mb-3 cardOrder">
                    <img className="car-img-top" src={cafeAmericano} alt="café americano" />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up                     the bulk of the card's content.</p>
                        <input className="btn btn-primary btn-lg" type="submit" value="Enviar a cocina" />
                      </div>
                    </div>
                </Fragment>
            )
        }
    }

export default MakeOrders;