import React, { Component, useState } from 'react'
import { Container , Typography, TextField, Grid, Button} from '@mui/material';
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

export default class MainApp extends Component {

    const [displayName, setDisplayName] = useState('')

    JoinRoom(){

    }
    
    CreateAndJoinRoom(){
        
    }

    render() {
        return (
        <div>
            <Container maxWidth="sm">
                <div style={{ textAlign: 'center', margin: '50px auto' }}>
                    <Typography variant="h4">FinFugal</Typography>
                    <TextField label="Display Name" fullWidth variant="outlined" margin="normal" />
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={this.JoinRoom}>Join Room</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={this.CreateAndJoinRoom}>Create Room</Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
        )
    }
}
