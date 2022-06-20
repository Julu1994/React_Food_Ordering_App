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
        <TextField fullWidth label="fullWidth" id="fullWidth" />

</div>;
}

export default Admin;