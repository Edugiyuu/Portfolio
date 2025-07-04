import '../Styles/Projects.css'
interface Project{
      image: string,
      projectLink: string,
      title:string
    }
const Project = ({ image, projectLink,title }:Project) => {
    return (
        <div className='Project'>
          <h3>{title}</h3>
          <img src={image} />
          <a href={projectLink}>Ver Projeto</a>
        </div>
    );
  };
  
  export default Project;