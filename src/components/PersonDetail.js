import React from 'react';
// import fotoCard from '../images/fotoCard.jpg';
import ChartDetail from './ChartDetail';
import Header from './Header';

function PersonDetail (props) {
  const {
    staff,
    selectedGraph,
    handleSkillsBtn,
    infoManagement,
    handleManagmentBtn,
    projects,
    managers,
    executives,
  } = props;
  const idSelected = props.match.params.id;
  const personalStaff = staff.find (item => item.id === parseInt (idSelected));
  const projectInfo = projects.find (
    item => item.id === personalStaff.cod_project
  );
  const areaInfo = managers.find (item => item.id === projectInfo.id_subarea);
  const executiveInfo = executives.find (item => item.id === areaInfo.area);
  console.log (executiveInfo);
  return (
    <div className="detail__container">
      <Header
        pathNav={`/staff/${idSelected}`}
        labelNav={`${personalStaff.first_name} ${personalStaff.last_name}`}
      />
      <main className="main_wrapper">
        <div className="block__info ">
          <div
            className="detail__img"
            style={{backgroundImage: `url(${personalStaff.image})`}}
          />
          <div className="info_wrapper">
            <div className="block_info_container">
              <div className="block__info_names">
                <h2 className="detail__name">{personalStaff.first_name}</h2>
                <h2 className="detail__surname">{personalStaff.last_name}</h2>
              </div>
              <div className='contact__info'>
                <h3 className="upper__email">{personalStaff.email}</h3>
                <p className='phone__contact'>
                  Telefono:
                  {' '}
                  {personalStaff.phone}
                  {' '}
                  - Ext:
                  {' '}
                  {personalStaff.extension}
                </p>
              </div>
              <div className="social_media">
                <i className="fab fa-linkedin social_media_icon" />
                <i class="fab fa-github-square social_media_icon" />
                <i class="fab fa-twitter-square social_media_icon" />

              </div>
            </div>
            <div className="info_detail_group">
              <p>COD-GRUPO: {personalStaff.cod_grupo}</p>
              <p>COD-INT: {personalStaff.cod_int}</p>
              <p>
                Level:
                {' '}
                {personalStaff.level}
                {' '}
                -  Sublevel:
                {' '}
                {personalStaff.sublevel}
              </p>
            </div>
          </div>
        </div>
        <div className="detail_subsection">
        <div className='info__detail_area'>
            <p>Area: {executiveInfo.area}</p>
            <p>Manager: {executiveInfo.first_name} {executiveInfo.last_name}</p>
            <p>Mentor: {personalStaff.mentor}</p>
          </div>
          <div className='project__info'>
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
        <ChartDetail
          chartData={personalStaff.skills}
          selectedGraph={selectedGraph}
          handleSkillsBtn={handleSkillsBtn}
          handleManagmentBtn={handleManagmentBtn}
          infoManagement={infoManagement}
        />
      </main>
    </div>
  );
}
export default PersonDetail;
