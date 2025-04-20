import { IconType} from '@icons-pack/react-simple-icons'
import '../Styles/Skills.css'

interface Skill {
    skillName: string,
    Color: string,
    IconName?: IconType,
    Size: string
}

const Skill = ({ skillName, Color, IconName, Size}: Skill) => { 
    return (
        <div className='Skills'>
            <div className='Skill'>
                <h3 className='skillName' style={{color:Color}}>{skillName}</h3>
                {IconName && <IconName color={Color} size={Size}></IconName>}
            </div>
        </div>
    )
}

export default Skill