import React, { useState }from 'react'
import * as spotActions from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './HostForm.css'

function HostForm() {
    const dispatch = useDispatch();
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("California");
    const [country, setCountry] = useState("United States");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [url, setURL] = useState("")
    const [errors, setErrors] = useState([]);

    let history = useHistory()

    const sessionUser = useSelector(state => state.session.user);


    const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    try {
        await dispatch(spotActions.hostSpot({ url, userId: sessionUser.id, address, city, state, country, name, price }))
        history.push('/spots')
    } catch (err) {
        const data = await err.json();
        if (data && data.errors) setErrors(data.errors);
    }
}

const filteredErrors = errors.filter(error => error !== 'Invalid value')


    return (
        <div className='HostForm'>
            <div className='formContainer'>
                <form className='hostForm' onSubmit={handleSubmit}>
                    <ul className={filteredErrors.length > 0 ? "errorList" : "hideErrorList"}>
                    {filteredErrors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                    </ul>
                    <label>
                    Address
                    </label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <label>
                    City
                    </label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                    <label>
                    State
                    </label>
                    <input
                        type="text"
                        value={state}
                        disabled
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                    <label>
                    Country
                    </label>
                    <input
                        type="text"
                        value={country}
                        disabled
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                    <label>
                    Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label>
                    Price
                    </label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <label>
                    Image URL
                    </label>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setURL(e.target.value)}
                        required
                    />
                    <button className="submitButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default HostForm;
