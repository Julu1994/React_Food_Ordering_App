import React, { useState, useEffect } from "react";

function Admin() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        showProducts();
    }, []);
    async function showProducts() {
        const getProducts = await Axios.get("http://localhost:5000/admin");
        console.log(getProducts);
    }
    return <div></div>;
}

export default Admin;
