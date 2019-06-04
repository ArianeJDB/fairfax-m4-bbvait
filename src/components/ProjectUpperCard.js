import React from 'react';
import { Link } from 'react-router-dom';
import fotoCard from '../images/fotoCard.jpg';
import { isTemplateElement } from '@babel/types';
import '../stylesheets/_projectUpperCard.scss'

class ProjectUpperCard extends React.Component {
  render () {
    return (
      <div className="project_upper__container">
        <div className="upper-block1">
          <div className="icon_container">
          <i class="far fa-folder-open icon_folder"></i>
          </div>
          <h3 className="project_title">Título del proyecto</h3>
                    
        </div>
        <div className="upper-block3">
          <p className="upper__description">Descripción del proyecto: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."</p>
        </div>
        <div className="project__upper_link">
          <ul className="cloud_tags">
            <li className="tag">
              Java
            </li>
            <li className="tag">
              JavaScript
            </li>
          </ul>
        <Link className="project_link" to=''>Más detalles</Link>
        </div>
        
      </div>
    );
  }
}

export default ProjectUpperCard;
