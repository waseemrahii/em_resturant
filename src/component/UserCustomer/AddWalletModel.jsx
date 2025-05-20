import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { MdCancel } from 'react-icons/md';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const AddWalletModel = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button  color="primary" onClick={handleOpen}>
      + Add Wallet Amount
      </button>
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
            <MdCancel
              // style={{ cursor: 'pointer', fontSize: '2rem' }}
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
          <div className="flex flex-row items-end justify-end mt-14 gap-5">
            <button className='bg-primary-900 py-2 px-4 rounded' onClick={handleClose}>
              Submit
            </button>
            <button className='bg-primary-900 py-2 px-4 rounded' onClick={handleClose}>
              Close
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AddWalletModel;