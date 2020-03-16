import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friends = () => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('./friends')
            .then(res => {
                console.log(res.data);
                setFriendsList(res.data);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <div>
            {friendsList.map((friend) => {
                return (<div>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>)
            })}
        </div>
    )
}

export default Friends;