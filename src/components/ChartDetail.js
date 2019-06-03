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
  handleSkillsBtn(graph){
    this.setState(state => ({
      selectedGraph: graph,
    }))
  }
  
  data = {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
    datasets: [{
      data: [20, 10, 4, 2]
    }]
  }
  render() {
    const {selectedGraph} = this.state;
    return (
        <div className="card text-center card_wrapper">
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
                  <button className={`nav-link btn_skills ${ selectedGraph === 'frontend' ? 'active': ''}`} onClick={()=>this.handleSkillsBtn('frontend')} >Front end</button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link btn_skills ${ selectedGraph === 'backend' ? 'active': ''}`} onClick={()=>this.handleSkillsBtn('backend')} >Back end</button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link btn_skills ${ selectedGraph === 'others' ? 'active': ''}`} onClick={()=>this.handleSkillsBtn('others')}>Others</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="charts">
            
              <div className='chart_container card mb-4'   >
                <div className='card_wrapper'>
                  <h2>Example</h2>
                  <Radar data={this.data} />
                </div>
              </div>
            </div>
          </div>
        
     
    )
  }
}
export default ChartDetail;