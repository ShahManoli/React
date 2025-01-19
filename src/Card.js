import React from 'react'

function Card({ data }) {
    return (
        <>
            {data.map((v) => {
                return (
                    <div className="card" key={v.name}>
                       <p> {v.name}</p> 
                       <p> {v.age} </p> 
                       <p> {v.location}</p> 
                    </div>
                )
            })}
        </>
    )
}

function UserCard({ userData }) {
    return (
        <div>
            <Card data={userData} />
        </div>
    )
}

export default UserCard
