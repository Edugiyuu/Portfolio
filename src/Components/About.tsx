import FotoPerfil from '../Imgs/Foto de perfil.jpeg';
import '../Styles/About.css';

const About = () => {
  return (
    <section id="about">
      <div className="profile-picture">
        <img src={FotoPerfil}/>
      </div>
      <div className="AboutMe">
        <div className="about-content">
          <h1>Sobre Mim</h1>
          <h2>"Você só melhora praticando"</h2>
          <p>Nome: <span>Eduardo</span></p>
          <p>Data de nascimento: <span>25/07/2006</span></p>
          <p>Email: <span>edupaz077@gmail.com</span></p>
        </div>
      </div>
    </section>
  );
}

export default About;
