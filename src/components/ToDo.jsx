import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import Input from './Input';

const ToDo = () => {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function handleAddTask(e) {
        e.preventDefault();
        setTasks((prevTask) => [
            ...prevTask,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                completed: false,
            },
        ]);
        setNewTask('');
    }

    function handleCompleteTask(id) {
        const updateTask = tasks.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        });

        setTasks(updateTask);
    }

    function handleRemoveTask(id) {
        const removeTask = tasks.filter((task) => task.id !== id);
        setTasks(removeTask);
    }

    return (
        <Card>
            <Card.Title>Todo App with React</Card.Title>
            <Card.Body>
                <form className='mb-2'>
                    <div className='flex items-center gap-x-2'>
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        <Button onClick={handleAddTask} text={'Add Text'} />
                    </div>
                </form>
                {tasks.length > 0 ? (
                    <ol className='space-y-2'>
                        {tasks.map((task) => (
                            <li key={task.id} className='flex items-center justify-between'>
                                <span>
                                    {task.name} {task.completed ? '✔️' : '📌'}
                                </span>

                                <div className='flex items-center gap-x-2'>
                                    <button onClick={() => handleCompleteTask(task.id)} className='px-2 py-1 rounded-sm text-xs bg-green-500'>
                                        Mark as {task.completed ? 'complete' : 'incomplete'}
                                    </button>
                                    <button onClick={() => handleRemoveTask(task.id)} className='px-2 py-1 rounded-sm text-xs bg-red-500'>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>You have {tasks.length} tasks</Card.Footer>
        </Card>
    );
};

export default ToDo;
