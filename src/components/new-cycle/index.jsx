import { useFormContext } from 'react-hook-form'
import './new-cycle.css'

export function NewCycle() {
    const { register, formState } = useFormContext()

    return (
        <div className="container--new-cycle">
            <label htmlFor="task">Vou trabalhar em</label>
            <div className='container--input-form'>
                <input 
                    type="text" 
                    id="task"
                     list='list-ideas'
                    placeholder='De um nome para o seu projeto'
                    {...register('task',
                        {
                            required: {
                                value: true,
                                message: 'Esse campo é obrigatório'
                            }, minLength: {
                                value: 5,
                                message: 'O nome deve ter pelo menos 5 letras'
                            }
                        }
                    )}
                />
                {formState.errors.task && (
                    <p className='text-error'>
                        {formState.errors.task.message}
                    </p>
                )}
            </div>

            <datalist id="list-ideas">
                <option value="Projeto lab365" />
                <option value="Mini projeto" />
                <option value="Exercicios da semana" />
            </datalist>


            <label htmlFor="minutesAmount">durante</label>
            <input type="number" id="minutesAmount" {...register('minutesAmount', { valueAsNumber: true })} />
            <span>minutos.</span>
        </div>
    )
}