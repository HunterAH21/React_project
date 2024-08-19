import {useEffect, useState} from 'react';
import React from 'react';
import './api.css';

function APP(){
    const [Users,setUsers] = useState([]);
    const [loading,SetLoading] = useState(true);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>{
            setUsers(data);
            SetLoading(false);
        });
},[]);

if(loading){
    return <p>loading</p>;
}
return (
    <div className='App'>
        <h1></h1>
        <ul>
            {Users.map(user =>(
                <div>
                <li key = {user.id}>ID: {user.id}</li>
                <li key = {user.id}>Name: {user.name}</li>
                </div>
            ))}
        </ul>
    </div>
);
}
export default APP;