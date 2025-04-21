import Skill from "./Skill"
import '../Styles/Skills.css'
import { SiTypescript, SiTypescriptHex,SiHtml5,SiHtml5Hex, SiJavascript, SiJavascriptHex, SiReact, SiReactHex, SiNodedotjs, SiNodedotjsHex, SiMongodb, SiMongodbHex, SiCss3Hex, SiCss3, SiFirebase, SiFirebaseHex, SiMui, SiMuiHex, SiVite, SiViteHex, SiGit, SiGitHex, SiSwagger, SiSwaggerHex,SiGreensock, SiGreensockHex, SiSqlite, SiNodemon, SiNodemonHex} from '@icons-pack/react-simple-icons'

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="backgroundText">Skills</h2>
      <h1>Skills</h1>
      
      <div className="Skills">
      <Skill skillName="JavaScript" IconName={SiJavascript}  Color={SiJavascriptHex} Size="45px"></Skill>
      <Skill skillName="TypeScript" IconName={SiTypescript} Color={SiTypescriptHex} Size="45px"></Skill>
      <Skill skillName="React" IconName={SiReact} Color={SiReactHex} Size="45px"></Skill>
      <Skill skillName="Node.js"  IconName={SiNodedotjs} Color={SiNodedotjsHex} Size="45px"></Skill>
      <Skill skillName="HTML" IconName={SiHtml5} Color={SiHtml5Hex} Size="45px"></Skill>
      <Skill skillName="CSS" IconName={SiCss3} Color={SiCss3Hex} Size="45px"></Skill>
      <Skill skillName="MongoDB" IconName={SiMongodb} Color={SiMongodbHex} Size="45px"></Skill>
      <Skill skillName="Fire base" IconName={SiFirebase} Color={SiFirebaseHex} Size="45px"></Skill>
      <Skill skillName="MUI Material" IconName={SiMui} Color={SiMuiHex} Size="45px"></Skill>
      <Skill skillName="Vite" IconName={SiVite} Color={SiViteHex} Size="45px"></Skill>
      <Skill skillName="Git" IconName={SiGit} Color={SiGitHex} Size="45px"></Skill>
      <Skill skillName="Swagger" IconName={SiSwagger} Color={SiSwaggerHex} Size="45px"></Skill>
      <Skill skillName="GSAP" IconName={SiGreensock} Color={SiGreensockHex} Size="45px"></Skill>
      <Skill skillName="SQLite" IconName={SiSqlite} Color={SiCss3Hex} Size="45px"></Skill>
      <Skill skillName="Nodemon" IconName={SiNodemon} Color={SiNodemonHex} Size="45px"></Skill>

      </div>
    </section>
  )
}

export default Skills