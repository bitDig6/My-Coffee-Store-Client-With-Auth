import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDeleteUser = (_id) => {
        Swal.fire({
                    title: "Are you sure to delete this user?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(`https://my-coffee-store-server-gold.vercel.app/users/${_id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.deletedCount > 0) {
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Successfully Deleted User",
                                        icon: "success"
                                    });
                                    const remaining = users.filter(user => user._id !== _id);
                                    setUsers(remaining);
                                }
                            })
                    }
                });
    }

    return (
        <div className='my-20'>
            <h2 className="text-3xl font-bold font-rancho text-center">Users: {users.length}</h2>
            <div className="w-4/5 mx-auto overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Signed In At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            users.map( user =>  <tr key={user._id}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignInTime}</td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user._id)} className='btn btn-neutral mr-5'>Delete</button>
                                    <button className='btn btn-neutral'>Edit</button>

                                </td>
                            </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;