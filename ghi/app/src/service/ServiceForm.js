import { createInstance, getInstances } from '../common/api';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { refreshPage } from '../common/window';


export default function ServiceForm () {

    const [userInput, setUserInput] = useState(
        {
            customer: '',
            appointmentDate: '',
            reason:'',
        }
    );

    const [loadData, setLoadData] = useState(
        {
            automobiles: [],
            technicians: [],
        }
    );

    const [noData, setNoData] = useState([]);
    const [alert, setAlert] = useState(<></>);

    useEffect(() => {
        const fetchInstances = async () => {

            try {

                let obj = {};

                obj.automobiles = await getInstances(8100, 'automobiles');
                obj.technicians = await getInstances(8080, 'technicians');


                setNoData(Object.keys(obj).filter(i => obj[i].length == 0));
                setLoadData(obj);

            } catch (e) {
                console.error(e);
            }
        }
        fetchInstances();
    }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setUserInput({
            ...userInput, [name]:value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...userInput};
        data.customer_name = data.customerName;
        delete data.customerName;
        data.appointment_date = data.appointmentDate;
        delete data.appointmentDate;

        let response = await createInstance(8080, 'services', data);

        if (response.ok) {
            const cleared = {
                customer: '',
                appointmentDate: '',
                reason:'',
            };
            setUserInput(cleared);
            setNoData(false);
        // refreshPage();  // how to change the timing?
        } else {
            setAlert(<><div className="alert alert-primary mt-3" role="alert"><div>Invalid input!</div></div></>);
        }
    }

    if (noData.length > 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Uh oh...</h1>
                            <p>
                                You're missing{' '}
                                {noData.map(i => {
                                    return (
                                    <Link key={i} to={`/${i}/new`}>{i}</Link>
                                    )
                                }
                                )}
                                {' '}data!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                {alert}
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Create a service appointment</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <select onChange={handleChange} value={userInput.automobile} required id="automobile" name="automobile" className="form-select">
                                        <option value="">Choose an automobile</option>
                                        {loadData.automobiles.map(automobile => {
                                        return (
                                            <option key={automobile.vin} value={automobile.vin}>
                                                {automobile.model.manufacturer.name} {automobile.model.name} ({automobile.vin})
                                            </option>
                                        )
                                        })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select onChange={handleChange} value={userInput.technician} required id="technician" name="technician" className="form-select">
                                        <option value="">Choose a technician</option>
                                        {loadData.technicians.map(technician => {
                                            return (
                                                <option key={technician.employee_number} value={technician.employee_number}>
                                                {technician.name} ({technician.employee_number})

                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleChange} placeholder="Customer" value={userInput.customer} required type="text" id="customer" name="customer" className="form-control"/>
                                    <label htmlFor="customer">Customer</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleChange} placeholder="Appointment date" value={userInput.appointmentDate} required type="date" id="appointmentDate" name="appointmentDate" className="form-control"/>
                                    <label htmlFor="appointmentDate">Appointment date</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleChange} placeholder="reason" value={userInput.reason} required type="text" id="reason" name="reason" className="form-control"/>
                                    <label htmlFor="reason">Reason for visit</label>
                                </div>
                                <button className="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}