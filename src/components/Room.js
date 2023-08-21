import React from 'react';
import { Container, List, ListItem, ListItemText, TextField} from '@mui/material';
import classnames from 'classnames';
import './Room.css';

export default function Room(props) {

    const room = props.room;

    let userId = 'cjfhin0vbiv3iu26hqjg';

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
              <TextField fullWidth variant="outlined" margin="normal" placeholder='Message' className='enter-message'/>
            </div>
        </Container>
    );
}
