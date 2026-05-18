
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FormComponent(){

    return(
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic" 
        label="First Form" 
        variant="outlined" 
        color='secondary'
        
      />
      <TextField 
        error 
        id="outlined-error" 
        label="Error"
        defaultValue="Everybody Mistakes"  
      />
      <TextField 
        id="standard-basic" 
        label="Empty Form" 
        variant="standard"
      />
      <TextField
        id="filled-read-only-input"
        label="Read Only"
        variant='filled'
        defaultValue="Hello World!"
        slotProps={{
            input: {
              readOnly: true,
            },
          }}
      />
      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        required
        color='success'
      />
    </Box>
    )
}

export default FormComponent