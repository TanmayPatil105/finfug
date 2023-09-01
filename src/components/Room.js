import React, { useState } from 'react';
import { Container, List, ListItem, ListItemText, TextField, Grid} from '@mui/material';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import classnames from 'classnames';
import './Room.css';
import { sendMessage } from '../api/Api';

export default function Room(props) {

    const [text, setText] = useState(''); 

    let room = JSON.parse(props.room);
    console.log(room);
    let UserId = props.userId;
    console.log(UserId);
    UserId='cjotd10vbiv5ofe8vqhg';

    async function HandleSendMessage(roomid){
        await sendMessage(UserId, room.SessionId, text);
        // setRoom(data);
        // setInRoom(true);
    }

    return (
        <Container maxWidth="sm" className="chat-window">
            <div
                style={{
                    maxHeight: '600px',
                    maxWidth: '1600px',
                    overflowY: 'auto',
                }}
                id="messages-box" 
            >
              <List className='chat-messages'>
                {room.Messages && room.Messages.map((Message, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            className={classnames({
                                'user-message': Message.UserId === UserId,
                                'other-message': Message.UserId !== UserId,
                            })}
                            primary={Message.Text}
                            secondary={Message.UserId !== UserId ? room.Participants.find(
                                Participant => Participant.UserId === Message.UserId
                            ).Name : 'You'}
                        />
                    </ListItem>
                ))}
              </List>
              <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11} align="left">
                    <TextField placeholder="Message" fullWidth onChange={(event) => { setText(event.target.value);}}/>
                    </Grid>
                    <Grid xs={1} align="center" className="input">
                        <Fab size="small" color="secondary" aria-label="add" onClick={HandleSendMessage}><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}
