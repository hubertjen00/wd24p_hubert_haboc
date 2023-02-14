import './Sample.css';
import React, { useState } from 'react';

const columns = [
    {
        name: 'Project ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Project Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Project Owner',
        selector: row => row.owner,
        sortable: true,
    },
    {
        name: 'Project Type',
        selector: row => row.type,
        sortable: true,
    },
    {
        name: 'Project Location',
        selector: row => row.location,
        sortable: true,
    },
    {
        name: 'Project Status',
        selector: row => row.status,
        sortable: true,
    },
    {
        name: 'Payment Status',
        selector: row => row.payment,
        sortable: true,
    },
    {
        name: 'Turnover Date',
        selector: row => row.turnover,
        sortable: true,
    },
];

function CreateProj() {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [projStatus, setProjStatus] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const [turnoverDate, setTurnoverDate] = useState('');
    const [data, setData] = useState([{
        id: 1,
        name: 'Tenebras',
        owner: 'Tenebras',
        type: 'Tenebras',
        location: 'Tenebras',
        projStatus: 'Tenebras',
        paymentStatus: 'Tenebras',
        turnoverDate: '1-1-23',
    }]);

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
    const handleSubmitClick = () => {
        setId(data.length + 1);

        setData(oldData => [{
            id: id,
            name: name,
            owner: owner,
            type: type,
            location: location,
            status: projStatus,
            payment: paymentStatus,
            turnover: turnoverDate,
        }, ...oldData]);
    }

    return (
        <div className='col-3 p-4 form-signin'>
            <form>
                <div class="mb-1">
                    <h2 className='dashboard'>Input Project Info</h2>
                    <label htmlFor="exampleInputEmail1" className="form-label">Project Name</label>
                    <input onChange={handleChangeNameInput} type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-1">
                    <label htmlFor="exampleInputPassword1" class="form-label">Project Owner</label>
                    <input onChange={handleChangeOwnerInput} type="owner" className="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-1">
                    <label htmlFor="exampleInputPassword1" class="form-label">Project Type</label>
                    <input onChange={handleChangeTypeInput} type="owner" className="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-1">
                    <label htmlFor="exampleInputPassword1" class="form-label">Project Location</label>
                    <input onChange={handleChangeLocationInput} type="owner" className="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-1">
                    <label htmlFor="exampleInputPassword1" class="form-label">Project Status</label>
                    <input onChange={handleChangeProjStatusInput} type="owner" className="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-1">
                    <label htmlFor="exampleInputPassword1" class="form-label">Payment Status</label>
                    <input onChange={handleChangePaymentStatusInput} type="owner" className="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-1">
                    <label htmlFor="exampleInputPassword1" class="form-label">Turnover Date</label>
                    <input onChange={handleChangeTurnoverDateInput} type="owner" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="button" onClick={handleSubmitClick} className="btn btn-lg btn-dark btn-block d-grid gap-2 col-12 mx-auto">Submit</button>
            </form>
        </div>
    );
};

export default CreateProj;