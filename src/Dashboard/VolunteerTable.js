import React from 'react';

const VolunteerTable = () => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Registering Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Naieem</td>
                    <td>naieem@gmail.com</td>
                    <td>22-01-22</td>
                    <td><i className="fa-regular fa-trash-can"></i></td>
                </tr>
                <tr>
                    <td>Naieem</td>
                    <td>naieem@gmail.com</td>
                    <td>22-01-22</td>
                    <td><i className="fa-regular fa-trash-can"></i></td>
                </tr>
            </tbody>
        </table>
    );
};

export default VolunteerTable;