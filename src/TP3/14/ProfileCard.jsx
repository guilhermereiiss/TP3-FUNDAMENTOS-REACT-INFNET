
import './main.css'
const ProfileCard = ({name, age}) => {
    return (
        <div>
            <h2>Nome: {name}</h2>
            <h3>Idade: {age !== undefined ? age: "Idade não disponivel"}</h3>
        </div>
    )
}

export default ProfileCard