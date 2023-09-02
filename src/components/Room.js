import React, { useState, useEffect } from 'react';
import { Container, List, ListItem, ListItemText, TextField, Grid} from '@mui/material';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import classnames from 'classnames';
import './Room.css';
import { getRoom, sendMessage } from '../api/Api';

export default function Room(props) {

    const [text, setText] = useState('');
    const [room, setRoom] = useState('');
    const [roomId, setRoomId] = useState('');
    const [lastUpdate, setLastUpdate] = useState('');

    let UserId = props.userId;

    function UpdateTime(){
        const currentDateTime = new Date();
        setLastUpdate(currentDateTime.toISOString());
    }

    async function HandleSendMessage(){
        await sendMessage(UserId, room.SessionId, text);
        UpdateTime();
        setText('');
    }

    function getTime(datetime){
        const dateTime = new Date(datetime);
        return dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    }

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const data = await getRoom(props.roomId);
                setRoom(data);
            } catch (error) {
                throw error;
            }
        };

        fetchRoom();
        if (roomId === ''){
            setRoomId(props.roomId)
        }
    }, [props.roomId, roomId, lastUpdate]);

    return (
        <Container maxWidth="sm" className="chat-window">
            <div
                style={{
                    maxHeight: '600px',
                    maxWidth: '1600px',
                }}
                id="messages-box" 
            >
                <div
                    style={{
                        maxHeight: '450px',
                        maxWidth: '1600px',
                        overflowY: 'auto',
                    }}
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
                                {/* <ListItemText
                                    secondary={getTime(Message.TimeStamp)}
                                /> */}
                            </ListItem>
                        ))}
                    </List>
                </div>
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11} align="left">
                    <TextField placeholder="Message" value={text} fullWidth onChange={(event) => { setText(event.target.value);}}/>
                    </Grid>
                    <Grid xs={1} align="center" className="input">
                        <Fab size="small" color="secondary" aria-label="add" onClick={HandleSendMessage}><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}
