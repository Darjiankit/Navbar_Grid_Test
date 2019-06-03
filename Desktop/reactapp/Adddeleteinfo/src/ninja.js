import React from 'react';

const Ninja = ({ comp, Deleteitem }) => {
    const companylist = comp.map(companies => {
        return (
            <div key={companies.id}>
                <p>Name : {companies.name}</p>
                <p>Image :{companies.image} </p>
                <p> ComapnyName : {companies.companyname}</p>
                <button onClick={() => { Deleteitem(companies.id) }}>Delete</button>
            </div>
        )
    })

    return (
        <div>
            {companylist}
        </div >
    )
}


export default Ninja;
