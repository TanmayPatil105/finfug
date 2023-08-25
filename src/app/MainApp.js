import React, { useState } from 'react'
import { Container , Typography, TextField, Grid, Button} from '@mui/material';
import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';

export default function MainApp() {

    const [displayName, setDisplayName] = useState('');

    function GenerateName(){
        const shortName = uniqueNamesGenerator({
            dictionaries: [adjectives, animals],
            length: 2,
            separator: '-'
          });
       
        setDisplayName(shortName)
    }

    function HandleJoinRoom(){
        if (displayName === ''){
            GenerateName()
        }
    }

    function HandleCreateAndJoinRoom(){
        if (displayName === ''){
            GenerateName()
        }
    }

    return (
        <div>
            <Container maxWidth="sm">
                <div style={{ textAlign: 'center', margin: '50px auto' }}>
                    <Typography variant="h4">FinFugal</Typography>
                    <TextField label="Display Name" fullWidth variant="outlined" margin="normal" onChange={(event) => { setDisplayName(event.target.value);}}/>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={HandleJoinRoom}>Join Room</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={HandleCreateAndJoinRoom}>Create Room</Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}
