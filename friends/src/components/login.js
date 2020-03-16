import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    const [newUser, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({ ...newUser, [e.target.name]: e.target.value })

        console.log(newUser)
    }

    const login = (e) => {
        e.preventDefault()
        console.log(newUser)

        axios   
            .post('http://localhost:5000/api/login', newUser)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                console.log(res.data.payload);
            // console.log(state.history)
            props.history.push('/friendslist')
            })
            .catch(err => {
                console.log(err);
            })
    }
    // console.log(state)
    return (
        <div>
            <form onSubmit={e => login(e)}>
                <input
                    type="text"
                    name="username"
                   
                    onChange={e => handleChange(e)}
                />
                <input
                    type='text'
                    name='password'

                    onChange={e => handleChange(e)}
                />
                <button
                    type='submit'
                >Login</button>
            </form>
        </div>
    )
}

export default Login;