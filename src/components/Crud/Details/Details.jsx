import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const [stData, setStData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/stuinfo/${id}`)
            .then(res => res.json())
            .then(data => {setStData(data)})
    }, [id])

    return (
        <div className='container'>
            <h1 className="main_title">Crud Project With React</h1>
            <div className="user_details">
                <h1 className="d_title">User Details</h1>
                <div className="user_data">
                    <p>ID: {stData?.id}</p>
                    <p>Name:- {stData?.name}</p>
                    <p>Phone:- {stData?.phone}</p>
                    <Link className='details_btn' to='/'>Back</Link>
                </div>
            </div>
        </div>
    );
};

export default Details;