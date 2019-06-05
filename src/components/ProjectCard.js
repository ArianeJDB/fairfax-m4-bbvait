import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/_projectCard.scss';
import PropTypes from 'prop-types';

function ProjectCard (props) {
  const {name, id} = props.item;
  return (
    <div className="project__container">
      <div className="block2__project-name">
        <h3 className="project_name">{name}</h3>
      </div>
      <div className="project__link">
        <Link className="link" to={`/projects/${id}`}>Más detalles</Link>
      </div>
    </div>
  );
}
ProjectCard.propTypes = {
  name:PropTypes.string,
  id:PropTypes.number
}
export default ProjectCard;
