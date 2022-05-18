import React from 'react';
import useTasks from '../../hooks/useTasks';

const Task = () => {
    const [tasks, setTasks] = useTasks();

    const handleDelete = id => {
        const proceed = window.confirm ('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/tasks/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                const remaining = tasks.filter(task => task._id !== id);
                setTasks(remaining);
            })
        }
    }


    return (
        <div className='container mx-auto mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                tasks.map(task => <div key={task._id}>
                    <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">{task.name}</h2>
    <p>{task.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-neutral-content">Completed</button>
      <button className="btn btn-primary bg-warning" onClick={() => handleDelete(task._id)}>Delete</button>
    </div>
  </div>
</div>
                </div>)
            }
        </div>
    );
};

export default Task;