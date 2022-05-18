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
                    <div className="card w-96 bg-primary-focus text-primary-content">
  <div className="card-body">
    <h2 className="card-title">{task.name}</h2>
    <p>{task.description}</p>
    <div className="card-actions justify-end">
      <button className="btn text-white bg-neutral-content border-none"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
      <button className="btn text-white bg-warning border-none" onClick={() => handleDelete(task._id)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg></button>
    </div>
  </div>
</div>
                </div>)
            }
        </div>
    );
};

export default Task;