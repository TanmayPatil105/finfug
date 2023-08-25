import React from 'react'
import { Container , TextField, Grid, Button} from '@mui/material';

export default function EnterRoom() {
  return (
    <div>
      <Container maxWidth="sm">
            <div style={{ textAlign: 'center', margin: '50px auto' }}>
                <TextField label="Display Name" fullWidth variant="outlined" margin="normal" />
                <TextField placeholder='Room' fullWidth variant="outlined" margin="normal" />
                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <Button variant="contained" color="primary">Join Room</Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    </div>
  )
}
