import React, { useState } from 'react';
import { Container , TextField, Grid, Button} from '@mui/material';
import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';
import { getRoom, joinRoom } from '../api/Api';

export default function EnterRoom({ name }) {
    const [displayName, setDisplayName] = useState(name);
    const [room, setRoom] = useState('');

    function GenerateName(){
        const shortName = uniqueNamesGenerator({
            dictionaries: [adjectives, animals],
            length: 2,
            separator: '-'
          });
        return shortName;
    }

    async function HandleJoinRoom(){
        var name = displayName; 
        if (name === ''){
            name = GenerateName()
        }
        joinRoom(displayName, room);
        const data = await getRoom(room);
        console.log(data);
    }

  return (
    <div>
      <Container maxWidth="sm">
            <div style={{ textAlign: 'center', margin: '50px auto' }}>
                <TextField placeholder='Display Name' fullWidth variant="outlined" margin="normal" onChange={(event) => { setDisplayName(event.target.value);}}/>
                <TextField placeholder='Room' fullWidth variant="outlined" margin="normal" onChange={(event) => { setRoom(event.target.value);}}/>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={HandleJoinRoom}>Join Room</Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    </div>
  )
}
