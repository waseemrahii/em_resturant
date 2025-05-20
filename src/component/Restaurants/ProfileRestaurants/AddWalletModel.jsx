import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MdCancelPresentation } from 'react-icons/md';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Responsive width
  maxWidth: 600, // Maximum width
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

// const buttonContainerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'flex-end',
//   gap: '1rem',
// };

const Addwalletmodel = ({ open, handleClose }) => {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-wallet-modal-title"
      aria-describedby="add-wallet-modal-description"
    >
      <Box sx={style}>
        <div style={headerStyle}>
          <Typography id="add-wallet-modal-title" variant="h6" component="h2">
            Add Wallet Amount
          </Typography>
          <MdCancelPresentation
            style={{ cursor: 'pointer', fontSize: '2rem' }}
            onClick={handleClose}
          />
        </div>
        <TextField
          id="amount"
          label="Amount"
          type="number"
          fullWidth
          margin="normal"
        />
        <TextField
          id="note"
          label="Note"
          type="text"
          fullWidth
          margin="normal"
        />
        <div className='flex flex-row items-end justify-end mt-14 gap-5'>
         <Button variant="contained" color="primary" onClick={handleClose}>
           Submit
         </Button>
         <Button variant="contained" color="primary" onClick={handleClose}>
           Close
         </Button>

         </div>
      </Box>
    </Modal>
  );
}

export default Addwalletmodel;

