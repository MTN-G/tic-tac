import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

export default function MyModal (props) {
  const [open, setOpen] = React.useState(false);
  const [winnerName, setName] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.reset();
    setOpen(false);
  };

  const addToList = () => {
    let date = new Date;
    let fullDate = (`${date.getDate()}/${date.getUTCMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    let newObj = {id: 0 , name: winnerName, date: fullDate};
    axios.post('/api/v1/records', newObj);
    axios.get('/api/v1/records')
    .then(res=>{
      props.setClone(res.data)
     })
    setOpen(false);
    props.reset();
  }



  return (
    <div className="modal">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        JOIN TO WINNER LIST
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Coungratulation!!! </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Put your name in the WINNER list
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Name"
            type="text"
            fullWidth
            onChange={(e)=>setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addToList}  color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
