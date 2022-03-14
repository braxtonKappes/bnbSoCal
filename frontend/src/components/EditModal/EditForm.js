import React, { useState } from "react";
import { putSpot } from "../../store/spots";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import './EditForm.css';

function EditForm( { spot, spotId } ) {
    const dispatch = useDispatch();
    let history = useHistory();
    // const [isLoaded, setIsLoaded] = useState(false)
    const [address, setAddress] = useState(spot.address);
    const [city, setCity] = useState(spot.city);
    const [state, setState] = useState("California");
    const [country, setCountry] = useState("United States");
    const [name, setName] = useState(spot.name);
    const [price, setPrice] = useState(spot.price);
    const [url, setURL] = useState('')
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateSpot = {
            address,
            city,
            country,
            state,
            name,
            price,
            url,
            spotId,
        };
        let editedSpot;
        try {
            editedSpot = dispatch(putSpot(updateSpot));
        } catch (error) {
        }
        if (editedSpot) {
            setErrors([]);
            history.push(`/spots/${spotId}`);
        }
    };

    const filteredErrors = errors.filter(error => error !== 'Invalid value')


    return (
    <div className="editFormContainer">
        <form className='editForm' onSubmit={handleSubmit}>
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
    );
}

export default EditForm;
