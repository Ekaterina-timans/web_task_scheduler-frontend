import { Doughnut } from "react-chartjs-2"
import "chart.js/auto"

export function Chart({completedTasks, incompleteTasks}) {
    const data = {
        labels: ['Completed Tasks', 'Unfulfilled Tasks'],
        datasets: [{
            data: [completedTasks, incompleteTasks],
            backgroundColor: ['SeaGreen', 'FireBrick'],
        }]
    }

    return (
        <div style={{width: '500px', height: '500px'}}>
            <Doughnut data={data} />
        </div>
    )
}