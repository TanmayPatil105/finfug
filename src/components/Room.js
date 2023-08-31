import React from 'react';
import { Container, List, ListItem, ListItemText, TextField, Grid} from '@mui/material';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import classnames from 'classnames';
import './Room.css';

export default function Room(props) {

    const room = props.room;

    let userId = props.userId;

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
                {room.messages.map((message, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            className={classnames({
                                'user-message': message.userId === userId,
                                'other-message': message.userId !== userId,
                            })}
                            primary={message.text}
                            secondary={message.userId !== userId ? room.participants.find(
                                partcipant => partcipant.userId === message.userId
                            ).name : 'You'}
                        />
                    </ListItem>
                ))}
              </List>
              <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11} align="left">
                    <TextField placeholder="Message" fullWidth />
                    </Grid>
                    <Grid xs={1} align="center" className="input">
                        <Fab size="small" color="secondary" aria-label="add"><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}
