import './Sample.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateProj() {

    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [projStatus, setProjStatus] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const [turnoverDate, setTurnoverDate] = useState('');

    const navigate = useNavigate();

    const handleChangeNameInput = (element) => {
        setName(element.target.value);
    }
    const handleChangeOwnerInput = (element) => {
        setOwner(element.target.value);
    }
    const handleChangeTypeInput = (element) => {
        setType(element.target.value);
    }
    const handleChangeLocationInput = (element) => {
        setLocation(element.target.value);
    }
    const handleChangeProjStatusInput = (element) => {
        setProjStatus(element.target.value);
    }
    const handleChangePaymentStatusInput = (element) => {
        setPaymentStatus(element.target.value);
    }
    const handleChangeTurnoverDateInput = (element) => {
        setTurnoverDate(element.target.value);
    }
    const handleSubmitClick = async () => {

        const requestData = {
            project_name: name,
            project_owner: owner,
            project_type: type,
            project_location: location,
            project_status: projStatus,
            payment_status: paymentStatus,
            turnover_date: turnoverDate,
        };

        const response = await axios.post('http://localhost:8000/api/projects', requestData)
        console.log(response);
        navigate ('/dashboard');
    }

    return (
        <div className='col-3 p-4 form-signin'>
            <form>
                <div class="mb-1">
                    <h2 className='dashboard'>Input Project Info</h2>
                    <label htmlFor="exampleInputEmail1" className="form-label">Project Name</label>
                    <input onChange={handleChangeNameInput} type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Project Name"/>
                </div>
                <div class="mb-1">
                    <label htmlFor="exampleInputPassword1" class="form-label">Project Owner</label>
                    <input onChange={handleChangeOwnerInput} type="owner" className="form-control" id="exampleInputPassword1" placeholder="Project Owner"/>
                </div>
                <div class="mb-1">
                    <label htmlFor="exampleInputPassword1" class="form-label">Project Type</label>
                    <input onChange={handleChangeTypeInput} type="owner" className="form-control" id="exampleInputPassword1" placeholder="Project Type"/>
                </div>
                <div class="mb-1">
                    <label htmlFor="exampleInputPassword1" class="form-label">Project Location</label>
                    <input onChange={handleChangeLocationInput} type="owner" className="form-control" id="exampleInputPassword1" placeholder="Project Location"/>
                </div>
                <div class="mb-1">
                    <label htmlFor="exampleInputPassword1" class="form-label">Project Status</label>
                    <input onChange={handleChangeProjStatusInput} type="owner" className="form-control" id="exampleInputPassword1" placeholder="Project Status"/>
                </div>
                <div class="mb-1">
                    <label htmlFor="exampleInputPassword1" class="form-label">Payment Status</label>
                    <input onChange={handleChangePaymentStatusInput} type="owner" className="form-control" id="exampleInputPassword1" placeholder="Payment Status"/>
                </div>
                <div class="mb-1">
                    <label htmlFor="exampleInputPassword1" class="form-label">Turnover Date</label>
                    <input onChange={handleChangeTurnoverDateInput} type="owner" className="form-control" id="exampleInputPassword1" placeholder="Turnover Date"/>
                </div>
                <button type="button" onClick={handleSubmitClick} className="btn btn-lg btn-dark btn-block d-grid gap-2 col-12 mx-auto">Submit</button>
            </form>
        </div>
    );
};

export default CreateProj;