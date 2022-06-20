import React, { useState, useEffect } from "react";
import "./admin.scss"
import TextField from '@mui/material/TextField';

import axios from "axios";

function Admin() {
const [products, setProducts] = useState([]);

useEffect(() => {
showProducts();
}, []);

async function showProducts() {
const getProducts = await axios.get("http://localhost:5000/admin");
setProducts(getProducts.data);
}

console.log(products);

    return <div className="form-main">
        <div className="mu-textfield">
            <TextField fullWidth label="Name" id="fullWidth" />

        </div>
        <div className="mu-textfield">
            <TextField fullWidth label="Name" id="fullWidth" />

        </div>
        <div className="mu-textfield">
            <TextField fullWidth label="Name" id="fullWidth" />

        </div>
        <div className="mu-textfield">
            <TextField fullWidth label="Name" id="fullWidth" />

        </div>
        <div className="mu-textfield">
            <TextField fullWidth label="Name" id="fullWidth" />

        </div>
    </div>;
}

export default Admin;