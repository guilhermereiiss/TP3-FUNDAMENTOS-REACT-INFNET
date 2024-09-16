import StatusBadge from "./components/StatusBadge/StatusBadge"

export default function App() {
    return (
        <div>
            <h1>Status dos Usuários</h1>
            <StatusBadge status="inativo" />
            <StatusBadge status="ativo" />
            <StatusBadge status="pendente" />
        </div>
    )
}