import React from 'react';
import CardUpper from './CardUpper';
import CardLower from './CardLower';
import Header from './Header';
import bbva from '../images/bbva.jpg';

function Managers (props) {

    const {managers, projects} = props;
    const idSelected = parseInt (props.match.params.id);

    const newManager = managers.find(manager => manager.id === idSelected);
    const newElements = projects
        .filter(project => project.id_subarea === idSelected)
        .map((project) => {
            return(
                <li key={project.id}>
                    <CardLower item={project} areaLink="projects" position="Gerente"/>
                </li>
            );
        })

    return console.log('*', newManager, newElements);  
}

export default Managers;