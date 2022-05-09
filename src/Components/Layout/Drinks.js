import React, { useState, useEffect } from "react";

function Drinks() {
    const [users, setUsers] = useState();
    const [test, setTest] = useState("Old");
    // const getApiData = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products/").then(
    //         (response) => response.json()
    // );
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((response) => response.json())
            .then((json) => setUsers(json))
            .then((json) => console.log(json));
    }, [setTest]);

    return (
        <div className="app">
            {users?.map((user) => {
                return <h1>{JSON.stringify(user)}</h1>;
            })}
            {/* {users &&
                users.map((user) => (
                    <div className="item-container">
                        Id:{user.id}{" "}
                        <div className="title">Title:{user.title}</div>
                    </div>
                ))} */}
            <button onClick={() => setTest("New")}>click </button>
            <h1>{test}</h1>
        </div>
    );
}

export default Drinks;
