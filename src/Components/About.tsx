import FotoPerfil from '../Imgs/user.png';
import '../Styles/About.css'
const About = () => {
  return (
    <section id="about">
        <div>
            <img src={FotoPerfil}/>
        </div>
        <div className='AboutMe'>
            <h1>Sobre Mim</h1>
            <h2>"Você só melhora praticando"</h2>
            <p>Nome: <span>Eduardo</span></p>
            <p>Data de nascimento: <span>25/07/2006</span></p>
            <p>Email: <span>edupaz077@gmail.com</span></p>
            <p>Telefone: <span>+55 11 0000-0000</span></p>
        </div>
    </section>
  )
}

export default About