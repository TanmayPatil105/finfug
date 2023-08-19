import React from 'react';
import { Container, Typography, List, ListItem, ListItemText} from '@mui/material';

export default function Room(props) {

    const room = props.room;

    return (
        <Container maxWidth="sm">
            <Typography variant="h5">Messages:</Typography>
            <div
                style={{
                    maxHeight: '600px',
                    maxWidth: '800px',
                    overflowY: 'auto',
                }}
                id="messages-box" 
            >
              <List>
                {room.messages.map((message, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={message.text} secondary={`Sent by: ${message.userId}`} />
                    </ListItem>
                ))}
              </List>
            </div>
            
        </Container>
    );
}
