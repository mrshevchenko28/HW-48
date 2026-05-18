import { Typography } from '@mui/material'

function TypographyComponent(){

    return(
        <div>
            <Typography 
                variant="h1" 
                color='secondary'
                align='left'
                gutterBottom
            >
                h1 purple left
            </Typography>
            <Typography
            sx={{
                fontFamily: "Diplomata",
                fontWeight: 800,
            }} 
                variant="h2" 
                color='primary'
                align='center'
                gutterBottom
            >
                h2 blue center
            </Typography>
            <Typography 
                variant="h3" 
                color='success'
                align='right'
                gutterBottom
            >
                h3 green right
            </Typography>

        </div>
    )
}

export default TypographyComponent;