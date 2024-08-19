import { Status } from '../../components/status'
import './history.css'

export function HistoryPage() {   // Exportação Nomeada
    return (
        <div className="container--history">
            <h1>Meu Histórico</h1>
             <table>
            <thead>
                <tr>
                    <th>Tarefa</th>
                    <th>Duração</th>
                    <th>Início</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Consertar Débitos Técnico</td>
                    <td>20 minutos</td>
                    <td>Há cerca de 2 meses</td>
                    <td>
                        <Status>Concluído</Status>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}