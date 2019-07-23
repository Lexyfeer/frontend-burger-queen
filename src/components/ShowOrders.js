import React, { Component, Fragment } from 'react';
import soda from '../assets/images/soda1.png';

class ShowOrders extends Component {
    render() {
            return(
                <Fragment>
                    <h2>ORDENES PENDIENTES DE ENTREGA</h2>

                    <div className="card border-primary mb-3 cardOrder">
                    <img className="car-img-top" src={soda} alt="defaultImage" />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up                     the bulk of the card's content.</p>
                        <input className="btn btn-primary btn-lg" type="submit" value="Pedido Entregado" />
                      </div>
                    </div>
                </Fragment>
            )
        }
    }

export default ShowOrders;