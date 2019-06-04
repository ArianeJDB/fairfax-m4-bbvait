import React from 'react';
import CardUpper from './CardUpper';
import ProjectCard from './ProjectCard';
import Header from './Header';
import bbva from '../images/bbva.jpg';

function Managers(props) {

    const { projects, staff } = props;
    const idSelected = parseInt(props.match.params.id);

    const newProject = projects.find(project => project.id === idSelected);
    const newElements = staff
        .filter(person => person.cod_project === idSelected)
        .map((project) => {
            return (
                <li key={person.id}>
                    <ProjectCard
                        item={project}
                        areaLink="projects"
                    />
                </li>
            );
        })

    return (

        <div className="box__container" style={{ backgroundImage: `url(${bbva})` }}>
            <Header />
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

export default Managers;