import React from 'react';
import '../stylesheets/_projectUpperCard.scss'
import PropTypes from 'prop-types';

function ProjectUpperCard (props) {
  
    const {name, description, technology_1, technology_2} = props.item;
    return (
      <div className="project_upper__container">
        <div className="upper-block1">
          <div className="icon_container">
          <i className="far fa-folder-open icon_folder"></i>
          </div>
          <h3 className="project_title">{name}</h3>
                    
        </div>
        <div className="upper-block3">
          <p className="upper__description">{description}</p>
        </div>
        <div className="project__upper_link">
          <ul className="cloud_tags">
            <li className="tag">
              {technology_1}
            </li>
            <li className="tag">
              {technology_2}
            </li>
          </ul>
        </div>
        
      </div>
    );
  
}
ProjectUpperCard.propTypes = {
  name:PropTypes.string, 
  description:PropTypes.string,
  technology_1:PropTypes.string, 
  technology_2:PropTypes.string
}
export default ProjectUpperCard;
