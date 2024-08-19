import { useFormContext } from 'react-hook-form'
import './new-cycle.css'

export function NewCycle() {
    const { register } = useFormContext()

    return (
        <div className="container--new-cycle">
            <label htmlFor="task">Vou trabalhar em</label>    
            <input type="text" id="task" placeholder='De um nome para o seu projeto' {...register('task')}/>

            <label htmlFor="minutesAmount">durante</label>
            <input type="number" id="minutesAmount" {...register('minutesAmount', {valueAsNumber: true})}/>
            <span>minutos.</span>
        </div>
    )
}