import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const url = `http://localhost:5000/addtask`;
        fetch(url, { 
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            alert('New Task Added');
            const path = `/home`;
            navigate(path);
        })

    };


    return (
        <div className='container mx-auto text-center text-secondary'>
            <h2 className='text-center mt-5'>Add Task</h2>
            <form className='d-flex flex-column mt-4' onSubmit={handleSubmit(onSubmit)}>
                <label className=''><h5>Task's Name</h5></label>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <label className=''><h5>Task's Description</h5></label>
                <textarea className='mb-2' placeholder='Description' {...register("description", { required: true, maxLength: 20 } )} />
                <br />
                <input className='btn btn-success mt-4' type='submit' value="Add Task" />
            </form>
        </div>
    );
};

export default AddTask;