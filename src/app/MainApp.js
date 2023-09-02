import React, { useState } from 'react'
import { Container , Typography, TextField, Grid, Button} from '@mui/material';
import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';
import Room from '../components/Room';
import { createRoom, joinRoom } from '../api/Api';

export default function MainApp() {

    const [displayName, setDisplayName] = useState('');
    const [JoinRoom, setJoinRoom] = useState(false);
    const [InRoom, setInRoom] = useState(false);
    const [userId, setUserId] = useState('');
    const [roomId, setRoomId] = useState('');

    function GenerateName(){
        const shortName = uniqueNamesGenerator({
            dictionaries: [adjectives, animals],
            length: 2,
            separator: '-'
          });
        return shortName;
    }

    function HandleJoinRoomClick(){
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
        setUserId(data.UserId);
        setRoomId(data.SessionId);
        setInRoom(true);
    }

    async function HandleJoinRoom(){
        var name = displayName; 
        if (name === ''){
            name = GenerateName()
        }
        const data = await joinRoom(displayName, roomId);
        setUserId(data.UserId);
        setRoomId(data.SessionId);
        setInRoom(true);
    }

    return (
        <>
            { !InRoom && !JoinRoom && <div>
                <Container maxWidth="sm">
                    <div style={{ textAlign: 'center', margin: '50px auto' }}>
                        <Typography variant="h4">FinFugal</Typography>
                        <TextField label="Display Name" fullWidth variant="outlined" margin="normal" onChange={(event) => { setDisplayName(event.target.value);}}/>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={HandleJoinRoomClick}>Join Room</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={HandleCreateAndJoinRoom}>Create Room</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div> }
            { !InRoom && JoinRoom && <div>
                <Container maxWidth="sm">
                        <div style={{ textAlign: 'center', margin: '50px auto' }}>
                            <TextField value={displayName} placeholder='Display Name' fullWidth variant="outlined" margin="normal" onChange={(event) => { setDisplayName(event.target.value);}}/>
                            <TextField placeholder='Room' fullWidth variant="outlined" margin="normal" onChange={(event) => { setRoomId(event.target.value);}}/>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={HandleJoinRoom}>Join Room</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
            </div> }
            { InRoom && <Room roomId={roomId} userId={userId}/>}
        </>
    )
}
