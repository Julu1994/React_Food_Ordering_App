import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AdminCard from "../Components/adminCard";
import AdminText from "../Components/adminText";
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

    return <>
        
    <Container>
            <Grid container>
                <AdminCard />
            </Grid>
        </Container>
        <AdminText />
        </>
}

export default Admin;