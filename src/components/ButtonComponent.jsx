import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button, Container } from "@mui/material"


function ButtonComponent(){

    return(
        <Container 
            color="primary"
        >
            <Button
                onClick={() => console.log("you clicked Text")} 
                type='submit'
                variant="text"
                color="secondary"
                size="medium"
            >Empty Button
            </Button>
            <Button
                onClick={() => console.log("you clicked Contained")}
                type='submit' 
                variant="contained"
                color="success"
                disableElevation
                size="large"
                startIcon={<KeyboardArrowRightIcon/>}
            >Left Arrow
            </Button>
            <Button
                onClick={() => console.log("you clicked Outlined")} 
                type='submit'
                variant="outlined"
                color="error"
                size="small"
                endIcon={<SendIcon/>}
            >Filled Arrow
            </Button>
            <Button 
                disabled
            >Disabled
            </Button>
            <Button 
                onClick={() => console.log("you clicked Submit")}
                type="submit"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon/>}

            >
                Submit
            </Button>
        </Container>
    )
}

export default ButtonComponent