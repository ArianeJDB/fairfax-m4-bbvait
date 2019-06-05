import React from 'react';
import { Radar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

function ChartDetail(props) {
  const { chartData, selectedGraph, handleSkillsBtn } = props;
  const dataCss = {
    labels: [],
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [],
      }]
  }
  const dataFrameworks = {
    labels: [],
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [],
      }]
  }
  const dataHtml = {
    labels: [],
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [],
      }]
  }
  const dataJs = {
    labels: [],
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [],
      }

    ]
  }

  const dataAgile = {
    labels: [],
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [],
      }

    ]
  }
  dataCss.labels = Object.keys(chartData.frontend.css)
  dataCss.datasets[0].data = Object.values(chartData.frontend.css)
  dataFrameworks.labels = Object.keys(chartData.frontend.frameworks)
  dataFrameworks.datasets[0].data = Object.values(chartData.frontend.frameworks)
  dataHtml.labels = Object.keys(chartData.frontend.html)
  dataHtml.datasets[0].data = Object.values(chartData.frontend.html)
  dataJs.labels = Object.keys(chartData.frontend.js)
  dataJs.datasets[0].data = Object.values(chartData.frontend.js)
  dataAgile.labels = Object.keys(chartData.managenemnt.agile)
  dataAgile.datasets[0].data = Object.values(chartData.managenemnt.agile)


  return (
    <div className="card text-center card_main_wrapper">
      <div className="card-header">
        <div className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <p>Perfil</p>
          </li>
        </div>
      </div>
      <div className="card-body">
        <div className='chart-wrapper'>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <button className={`nav-link btn_skills ${selectedGraph === 'frontend' ? 'active' : ''}`} onClick={() => handleSkillsBtn('frontend')} >Front end</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link btn_skills ${selectedGraph === 'managenemnt' ? 'active' : ''}`} onClick={() => handleSkillsBtn('managenemnt')}   >Management</button>
            </li>
          </ul>
        </div>
      </div>
      <div className={`charts ${selectedGraph !== 'frontend' ? 'hidden' : ''}`}>
        <div className='chart_container ' >
          <div className='card_wrapper' >
            <small>HTML</small>
            <Radar data={dataHtml}
            />
          </div>
        </div>
        <div className='chart_container ' >
            <div className='card_wrapper' >
              <small>CSS</small>
              <Radar data={dataCss}
              />
            </div>
          </div>
          <div className='chart_container ' >
            <div className='card_wrapper' >
              <small>JAVASCRIPT</small>
              <Radar data={dataJs}
              />
            </div>
          </div>
          <div className='chart_container'>
            <div className='card_wrapper' >
              <small>FRAMEWORKS</small>
              <Radar data={dataFrameworks}
              />
            </div>
          </div>          
      </div>
      <div className={`chart_management ${selectedGraph === 'frontend' ? 'hidden' : ''}`}>
        <div className='chart_container ' >
          <div className='card_wrapper' >
            <small></small>
            <Radar data={dataAgile}
            />
          </div>
        </div>
    </div>

    </div>
  )
}
ChartDetail.propTypes = {
  chartData:PropTypes.object,
  selectedGraph:PropTypes.string,
  handleSkillsBtn:PropTypes.func
}
export default ChartDetail;