import './new-cycle.css'

export function NewCycle() {
    return (
        <div className="container--new-cycle">
            <label htmlFor="task">Vou trabalhar em</label>    
            <input type="text" id="task" placeholder='De um nome para o seu projeto'/>

            <label htmlFor="minutesAmount">durante</label>
            <input type="number" id="minutesAmount" />
            <span>minutos.</span>
        </div>
    )
}