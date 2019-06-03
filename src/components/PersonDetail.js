import React from 'react';
import fotoCard from '../images/fotoCard.jpg';
import { Radar } from 'react-chartjs-2';

class PersonDetail extends React.Component {
  data= {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
    datasets: [{
        data: [20, 10, 4, 2]
    }]
}
  render() {
    return (
      <div className="box__container">
        <div className="header">
          <h1 className="header__title">BBVA-IT - ORGANIGRAM</h1>
          <p className="logout"><i className="fas fa-sign-out-alt">  Logout</i></p>
        </div>
        <main>
          <div className="upper-block2__name">
            <div className="detail__img" style={{ backgroundImage: `url(${fotoCard})` }}></div>
            <div className='info_wrapper'>
              <div>
                <div className="upper-block2__name">
                  <h2 className="upper__name">David</h2>
                  <h2 className="upper__surname">Puente</h2>
                </div>
                <div className='upper_contact'>
                  <h3 className="upper__email">xxxxxxxx@gmail.com</h3>
                  <p>Phone - ext</p>
                </div>
              </div>
              <div className='upper_info_group'>
                <p>COD_GROUP</p>
                <p>COD_INTER</p>
                <p>LEVEL - Sublevel</p>
              </div>
            </div>
          </div>
          <div>
            <div className='upper_subsection'>
              <div>
                <p>Area</p>
                <p>Manager</p>
                <p>Mentor</p>
              </div>
              <div>
                <p>actividad de proyectos</p>
                <p>Titulo</p>
                <p>Rol</p>
                <p>Tecnologias</p>
              </div>

            </div>
            <div className="card text-center card_wrapper">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <p>Perfil</p>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className='chart-wrapper'>
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className="nav-link active" href="/">Front end</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Back end</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Others</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="charts">
                <div>
                <div className=' card mb-3'style={{width:'400px'}}>
                {/* <p>{this.props.match.params.areasID}</p> */}
                <div className='card_wrapper' style={{width:'300px'}}>
                    <h2>Doughnut Example</h2>
                    <Radar data={this.data} />
                </div>
            </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
export default PersonDetail;