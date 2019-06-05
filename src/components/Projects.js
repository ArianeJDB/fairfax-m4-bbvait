import React from 'react';
import ProjectUpperCard from './ProjectUpperCard';
import Header from './Header';
import bbva from '../images/bbva.jpg';
import CardLower from './CardLower';

function Projects (props) {

    const { projects, staff } = props;
    const idSelected = parseInt(props.match.params.id);
    const newProject = projects.find(project => project.id === idSelected);
    const newElements = staff
        .filter(person => person.cod_project === idSelected)
        .map((person) => {
            return (
                <li key={person.id}>
                    <CardLower
                        item={person}
                        areaLink="staff"
                    />
                </li>
            );
        })

    return (

        <div className="box__container" style={{ backgroundImage: `url(${bbva})` }}>
            <Header pathNav={`/projects/${idSelected}`} labelNav={newProject.name}/>
            <div className="upper__block">
                <ProjectUpperCard item={newProject} />
            </div>
            <hr className="horizontal-line" />
            <ul className="lower__block">
                {newElements}
            </ul>
        </div>
    );
}

export default Projects;