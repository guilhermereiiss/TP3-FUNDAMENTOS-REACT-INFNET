import ProfileCard from "./ProfileCard"

const App = () => {
    return (
    <div>
        <ProfileCard name="Gui" age={18}/>
        <ProfileCard name="Ana" age={78}/>
        <ProfileCard name="Arwen" age={23}/>
    </div>
    )
}

export default App;