import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import axios from 'axios';

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    

    useEffect(() => {
        const fetchWorkouts = async () => {
            // console.log(  "process.env.REACT_APP_PROXY_HOST 1 " + process.env.REACT_APP_PROXY_HOST)
            // const response = await fetch('/api/workouts')
            const response = await fetch('https://mern-task-app-api-nvn3.onrender.com/api/workouts')
            // const response = await axios('https://mern-task-app-api-nvn3.onrender.com/api/workouts')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchWorkouts()
    }, [dispatch])

    // console.log(  "process.env.REACT_APP_PROXY_HOST " + process.env.REACT_APP_PROXY_HOST)
    // console.log(  "test " + process.env.TEST)

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home