import { useState } from "react";
import { Button } from "../../components/button";
import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";
import { useForm, FormProvider } from 'react-hook-form';
import './home.css'

export function HomePage() {   // Exportação Nomeada
    const methods = useForm();
    const { handleSubmit } = methods
    const [cycles, setCycles] = useState([])  
    const [activeCycleId, setActiveCycleId] = useState(null)

    /**
     * 
     * @param {Object} data Dados para criação de um novo ciclo
     * @param {string} data.task Tarefa do novo ciclo
     * @param {number} data.minutesAmount Duração do novo ciclo
     */
    function createNewCycle({task, minutesAmount}) {
        const id = String(new Date().getTime())

        const NewCycle = {
            id,
            task,
            minutesAmount,
            startDate: new Date()
        }

        setCycles((prevCycles) => [...prevCycles, NewCycle])
        setActiveCycleId(id)
    }

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    return (
        <form className="container--home" onSubmit={handleSubmit(createNewCycle)}>
            <FormProvider {...methods}>
                <NewCycle />
            </FormProvider>
            <Timer activeCycle={activeCycle} />
            <Button>Começar</Button>
        </form>
    )
}