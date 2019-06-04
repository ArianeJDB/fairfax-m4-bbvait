import React from 'react';
import { Radar } from 'react-chartjs-2';
class ChartDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGraph: 'frontend',
    };
    this.handleSkillsBtn = this.handleSkillsBtn.bind(this);
  }
  handleSkillsBtn(graph) {
    this.setState(state => ({
      selectedGraph: graph,
    }))
  }
  render() {
    const { chartData } = this.props;
    const { selectedGraph } = this.state;
    const data = {
      labels: [],
      datasets: [
        {
          label: 'html',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [],
          
        }
      ],
    };
    data.labels = Object.keys(chartData.frontend.html)
    data.datasets[0].data = Object.values(chartData.frontend.html)
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
                <button className={`nav-link btn_skills ${selectedGraph === 'frontend' ? 'active' : ''}`} onClick={() => this.handleSkillsBtn('frontend')} >Front end</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link btn_skills ${selectedGraph === 'managenemnt' ? 'active' : ''}`} onClick={() => this.handleSkillsBtn('managenemnt')} >Management</button>
              </li>
              {/* <li className="nav-item">
                  <button className={`nav-link btn_skills ${ selectedGraph === 'others' ? 'active': ''}`} onClick={()=>this.handleSkillsBtn('others')}>Others</button>
                </li> */}
            </ul>
          </div>
        </div>
        <div className="charts" >
          <div className='chart_container ' >
            <div className='card_wrapper' >
              <small>HTML</small>
              <Radar data={data}
              />
            </div>
          </div>
          <div className='chart_container ' >
            <div className='card_wrapper' >
              <small>HTML</small>
              <Radar data={data}
              />
            </div>
          </div>
          <div className='chart_container ' >
            <div className='card_wrapper' >
              <small>HTML</small>
              <Radar data={data}
              />
            </div>
          </div>
          <div className='chart_container'>
            <div className='card_wrapper' >
              <small>HTML</small>
              <Radar data={data}
              />
            </div>
          </div>
          <div className='chart_container'>
            <div className='card_wrapper' >
              <small>HTML</small>
              <Radar data={data}
              />
            </div>
          </div>
          
        </div>
      </div>


    )
  }
}
export default ChartDetail;