import Greeting from "./components/Greeting/Greeting"

export default function App() {
    return (
        <div>
        <Greeting name="Marcos Ryan" age={340} />
        <Greeting name="Guilherme" age={18} />
        <Greeting name="Clerisson Savio" age={35} />
      </div>
    )
}