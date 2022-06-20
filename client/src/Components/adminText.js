import React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import "./adminText.scss"

function AdminText() {
    return (
        <Container>
        <div className="form-main">
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

        
        </div>

        
    </Container>
)
}

export default AdminText