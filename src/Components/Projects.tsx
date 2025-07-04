
import PokeApiImg from '../Imgs/backgrounds/PokeApi.png'
import PersonaTunes from '../Imgs/backgrounds/PersonaTunes3.png'
import Project from './Project'
import '../Styles/Projects.css'

const Projects = () => {
  return (
    <section id="projects" >
      <div className='AboutTheProjects'>
        <h1>Projetos</h1>
        <p>Aqui tem alguns dos meus projetos</p>
      </div>

      <div className='AllTheProjects'>

        <Project title='PokeAPI' image={PokeApiImg} projectLink='https://edugiyuu.github.io/Pokemon_API_TypeScript/'></Project>
        <Project title='PersonaTunes' image={PersonaTunes} projectLink='https://edugiyuu.github.io/Persona_Tunes/'></Project>
      
      </div>

    </section>
  )
}

export default Projects