import React, { useState } from 'react'
import { Container , Typography, TextField, Grid, Button} from '@mui/material';
import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';
import { createRoom } from '../api/Api';
import EnterRoom from '../components/EnterRoom';

export default function MainApp() {

    const [displayName, setDisplayName] = useState('');
    const [JoinRoom, setJoinRoom] = useState(false);

    function GenerateName(){
        const shortName = uniqueNamesGenerator({
            dictionaries: [adjectives, animals],
            length: 2,
            separator: '-'
          });
        return shortName;
    }

    function HandleJoinRoom(){
        var name = displayName; 
        if (name === ''){
            name = GenerateName()
        }
        setJoinRoom(true);
    }

    async function HandleCreateAndJoinRoom(){
        var name = displayName; 
        if (name === ''){
            name = GenerateName()
        }
        const data = await createRoom(name);
        console.log(data);
    }

    return (
        <>
            { !JoinRoom && <div>
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
            </div> }
            { JoinRoom && <EnterRoom name={displayName}/>}
        </>
    )
}
