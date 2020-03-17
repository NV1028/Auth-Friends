import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import uuid from 'uuid';

const Friends = (props) => {
    const [friendsList, setFriendsList] = useState([]);
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    useEffect(() => {
        axiosWithAuth()
            .get('./friends')
            .then(res => {
                console.log(res.data);
                setFriendsList(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const addFriend = (e) => {
        e.preventDefault();
        console.log(newFriend)

        axiosWithAuth()
            .post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                axiosWithAuth().get('http://localhost:5000/api/friends')
                .then(res => {
                    setFriendsList(res.data)
                })
                .catch(err => console.log(err))
                console.log(res.data.payload);
           
            // props.history.push('/friendslist')
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = (e) => {
        setNewFriend({ ...newFriend, [e.target.name]: e.target.value })
    }

    console.log('hi guys!')
    return (
        <div>

            <form onSubmit={(e) => addFriend(e)}>
                <p>Name:</p>
                <input
                    type='text'
                    name='name'
                    onChange={(e) => handleChange(e)}
                />
                <p>Age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={(e) => handleChange(e)}
                />
                <p>Email:</p>
                <input
                    type='text'
                    name='email'
                    onChange={(e) => handleChange(e)}
                />
                <p></p>
                <button>Add Friend</button>
            </form>
            {friendsList.map((friend) => {
                return (
                    <div key={friend.id}>
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Friends;