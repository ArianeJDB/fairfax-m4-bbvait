import React from 'react';
import ChartDetail from './ChartDetail'
import Header from './Header';
import PropTypes from 'prop-types';

function PersonDetail(props) {
  const {staff, selectedGraph, handleSkillsBtn, infoManagement, handleManagmentBtn, projects, managers, executives} = props;
  const idSelected = props.match.params.id;
  const personalStaff = staff.find (item => item.id === parseInt(idSelected));
  const projectInfo = projects.find (item => item.id === personalStaff.cod_project);
  const areaInfo = managers.find(item => item.id === projectInfo.id_subarea)
  const executiveInfo = executives.find(item => item.id === areaInfo.area)
    return (
      <div className="detail__container">
        <Header pathNav={`/staff/${idSelected}`} labelNav={`${personalStaff.first_name} ${personalStaff.last_name}`} /> 
        <main className='main_wrapper'>
          <div className="block__info ">
            <div className="detail__img" style={{ backgroundImage: `url(${personalStaff.image})` }}></div>
            <div className='info_wrapper'>
              <div className="block_info_container">
                <div className="block__info_names">
                  <h2 className="detail__name">{personalStaff.first_name}</h2>
                  <h2 className="detail__surname">{personalStaff.last_name}</h2>
                </div>
                <div>
                  <h3 className="upper__email">{personalStaff.email}</h3>
                  <p>Telefono: {personalStaff.phone} - Ext: {personalStaff.extension}</p>
                </div>
                <div className="social_media">
                <i className="fab fa-linkedin social_media_icon"></i>
                <i className="fab fa-github-square social_media_icon"></i>
                <i className="fab fa-twitter-square social_media_icon"></i>

                </div>
              </div>
              <div className='info_detail_group'>
                <p>COD-GRUPO: {personalStaff.cod_grupo}</p>
                <p>COD-INT: {personalStaff.cod_int}</p>
                <p>Level: {personalStaff.level} -  Sublevel: {personalStaff.sublevel}</p>
              </div>
            </div>
          </div>
          <div className='detail_subsection'>
            <div>
              <p>Area: {executiveInfo.area}</p>
              <p>Manager: {executiveInfo.first_name} {executiveInfo.last_name}</p>
              <p>Mentor: {personalStaff.mentor}</p>
            </div>
            <div>
              <p>Actividad/Proyectos</p>
              <p>{projectInfo.name}</p>
              <p>{personalStaff.role}</p>
              <div className="cloud_tags_container">
                <p>Tecnologías: </p>
                <ul className="cloud_tags_detail">
                <li className="tag_detail">{projectInfo.technology_1}</li>
                <li className="tag_detail">{projectInfo.technology_2}</li>
              </ul>
              </div>
             
            </div>
          </div>
          <ChartDetail chartData={personalStaff.skills}
          selectedGraph={selectedGraph}
          handleSkillsBtn={handleSkillsBtn}
          handleManagmentBtn={handleManagmentBtn}
          infoManagement={infoManagement}
           />
        </main>
      </div>
    )
  }
  PersonDetail.propTypes = {
    staff:PropTypes.array,
    selectedGraph:PropTypes.string, 
    handleSkillsBtn:PropTypes.func,
    infoManagement:PropTypes.bool, 
    handleManagmentBtn:PropTypes.func, 
    projects:PropTypes.array, 
    managers:PropTypes.array, 
    executives:PropTypes.array
  }
export default PersonDetail;