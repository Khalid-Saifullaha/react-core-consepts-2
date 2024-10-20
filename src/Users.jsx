import { useEffect } from "react";
import { useState } from "react"
import User from "./User";

export default function Users(){
    const [users, setUsers]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}

/**
 * 1. declare a state to hold the data
 * 2. useEffect with call back and dependency
 * 3. Use fetch data to lode data
 */