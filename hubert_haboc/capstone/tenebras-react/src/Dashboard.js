import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";
import './Sample.css';
import axios from 'axios';

function Dashboard() {

    const onDelete =  async (projectId) => {
        await axios.delete ('http://127.0.0.1:8000/api/projects/' + projectId)
        window.location.reload()
    }

    const columns = [
        {
            name: 'Project ID', 
            center: true,
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Project Name',
            center: true,
            selector: row => row.project_name,
            sortable: true,
        },
        {
            name: 'Project Owner',
            center: true,
            selector: row => row.project_owner,
            sortable: true,
        },
        {
            name: 'Project Type',
            center: true,
            selector: row => row.project_type,
            sortable: true,
        },
        {
            name: 'Project Location',
            center: true,
            selector: row => row.project_location,
            sortable: true,
        },
        {
            name: 'Project Status',
            center: true,
            selector: row => row.project_status,
            sortable: true,
        },
        {
            name: 'Payment Status',
            center: true,
            selector: row => row.payment_status,
            sortable: true,
        },
        {
            name: 'Turnover Date',
            center: true,
            selector: row => row.turnover_date,
            sortable: true,
        },
    ];

    const [data, setData] = useState([]);

    const loginUser = localStorage.getItem('user_name');
    if (loginUser === 'admin'){
        columns.push(
            {
                name: 'Action',
                center: true,
                cell: (row) => <div><button>Edit</button><button onClick={() => onDelete(row.id)}>Delete</button></div>
                
            }
        )
    }

    const loadData = async() => {
        const response = await axios.get('http://localhost:8000/api/projects')
        console.log(response)
        const projects = response.data;
        let filteredProjs = []
        const loginUser = localStorage.getItem('user_name')
        if (loginUser === 'admin') {
            filteredProjs = projects;
        }

        else {
            for (let i = 0; i < projects.length; i++) {
                if (projects[i].project_owner === loginUser) {
                    filteredProjs.push(projects[i])
                }
            }
        }

        setData (filteredProjs);
    }

    useEffect (() => {
        loadData()
    }, [])

    return (
        <div>
            {/* <button onClick={loadData}>Click</button> */}
            <div className='row'>
                <div className='col-12 p-4'>
                    <h3>Hello {loginUser}</h3>
                    <h2 className='dashboard'>My Dashboard</h2>
                    <h4><Link to = "/createProj">Create New Project</Link></h4>
                    <DataTable
                        Title="Feature List"
                        columns={columns}
                        data={data}
                        pagination
                        striped
                        highlightOnHover
                        dense
                    />
                </div>
            </div>
        </div>
    );

};

export default Dashboard;



