import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/_projectCard.scss'


function ProjectCard (props) {
  // const {first_name, last_name, email, phone, area, id} = props.item;
  // const {areaLink, position} = props;
  return (
    <div className="card__container">
      <div className="block2__name">
        <h3 className="project_name">Título del proyecto</h3>
          </div>
          <div className='card__link'>
            <Link className="link" to=''>Más detalles</Link></div>
          </div>
    
  );
}

export default ProjectCard;
