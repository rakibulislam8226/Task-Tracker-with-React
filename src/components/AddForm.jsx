import { useState } from "react";

import { toast } from 'react-toastify';


export default function AddForm({ onAdd }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert("Name should not be blank.")
            return
        }

        // Display success toast
        toast.success('Task created successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        onAdd({ name, email, reminder })

        setName('')
        setEmail('')
        setReminder(false)

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input
                    type='text'
                    placeholder='Add user name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input
                    type='text'
                    placeholder='Add email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}
