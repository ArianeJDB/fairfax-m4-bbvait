import React from 'react';
import fotoCard from '../images/fotoCard.jpg';
import ChartDetail from './ChartDetail'
class PersonDetail extends React.Component {

  skills = {
    "frontend": {
      "html": {
        "accesibility": 1,
        "apis": 4,
        "canvas": 1,
        "forms": 2,
        "html5": 5
      },
    },
  }

  render() {
    return (
      <div className="detail__container">
        <header className="header">
          <h1 className="header__title">BBVA-IT - ORGANIGRAM</h1>
          <p className="logout"><i className="fas fa-sign-out-alt">  Logout</i></p>
        </header>
        <main className='main_wrapper'>
          <div className="block__info ">
            <div className="detail__img" style={{ backgroundImage: `url(${fotoCard})` }}></div>
            <div className='info_wrapper'>
              <div>
                <div className="block__info_names">
                  <h2 className="detail__name">David</h2>
                  <h2 className="detail__surname">Puente</h2>
                </div>
                <div>
                  <h3 className="upper__email">xxxxxxxx@gmail.com</h3>
                  <p>Phone - ext</p>
                </div>
              </div>
              <div className='info_detail_group'>
                <p>COD_GROUP</p>
                <p>COD_INTER</p>
                <p>LEVEL - Sublevel</p>
              </div>
            </div>
          </div>
          <div className='detail_subsection'>
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
          <ChartDetail chartData={this.skills} />
        </main>
      </div>
    )
  }
}
export default PersonDetail;