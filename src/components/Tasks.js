import PropTypes from 'prop-types'
import task from "./Task";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) =>{

    return(
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

Tasks.defaultProps = {
}

Tasks.propTypes = {
}

export default Tasks