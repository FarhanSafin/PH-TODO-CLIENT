import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const url = `https://serene-earth-69289.herokuapp.com/addtask`;
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
            <h2 className='text-center mt-5 text-5xl mb-10'>Add Task</h2>
            <form className='d-flex flex-column mt-4' onSubmit={handleSubmit(onSubmit)}>
                <label className='text-4xl'><h5>Task's Name</h5></label>
                <input required className='mb-2' placeholder='Name' {...register("name")} />
                <label className='text-4xl mt-5'><h5>Task's Description</h5></label>
                <textarea required className='mb-2 mt-5' placeholder='Description' {...register("description")} />
                <br />
                <input className='btn btn-success mt-4' type='submit' value="Add Task" />
            </form>
        </div>
    );
};

export default AddTask;