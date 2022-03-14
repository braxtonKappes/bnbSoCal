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

        const updateReview = {
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
            history.push('/spots');
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
                    onChange={(e) => setReview(e.target.value)}
                    required
                />
                <label>
                City
                </label>
                <input
                    type="integer"
                    value={city}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
                <button className="submitButton">Submit</button>
        </form>
    </div>
    );
}

export default EditForm;
