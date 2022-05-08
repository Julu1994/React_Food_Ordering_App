import React, { useState, useEffect } from "react";

function Drinks() {
    const [users, setUsers] = useState();
    const getApiData = async () => {
        const response = await fetch("https://fakestoreapi.com/products/").then(
            (response) => response.json()
        );

        // update the state
        setUsers(response);
    };
    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div className="app">
            {users?.map((user) => (
                <div className="item-container">
                    Id:{user.id} <div className="title">Title:{user.title}</div>
                </div>
            ))}
            {/* {users &&
                users.map((user) => (
                    <div className="item-container">
                        Id:{user.id}{" "}
                        <div className="title">Title:{user.title}</div>
                    </div>
                ))} */}
        </div>
    );
}

export default Drinks;
