import React from 'react';
import CardUpper from './CardUpper';
import ProjectCard from './ProjectCard';
import Header from './Header';
import bbva from '../images/bbva.jpg';
import PropTypes from 'prop-types';

function Managers (props) {
  const {managers, projects} = props;
  const idSelected = parseInt (props.match.params.id);

  const newManager = managers.find (manager => manager.id === idSelected);
  const newElements = projects
    .filter (project => project.id_subarea === idSelected)
    .map (project => {
      return (
        <li key={project.id}>
          <ProjectCard item={project} areaLink="projects" />
        </li>
      );
    });

  return (
    <div className="box__container" style={{backgroundImage: `url(${bbva})`}}>
      <Header pathNav={`/managers/${idSelected}`} labelNav="Gerencia" />
      <div className="upper__block">
        <CardUpper item={newManager} />
      </div>
      <hr className="horizontal-line" />
      <ul className="lower__block">
        {newElements}
      </ul>
    </div>
  );
}
Managers.propTypes = {
  Managers:PropTypes.array,
  projects:PropTypes.number
  }

export default Managers;
