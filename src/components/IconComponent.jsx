import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';

function IconComponent(){

    return(
        <>
            <AppleIcon
                fontSize='small'
            />
            <AdbIcon 
                color='primary'
                fontSize='large'
            />
            <AppleIcon
                color='action'
                fontSize='small'
            />
            <AdbIcon 
                color='error'
                fontSize='medium'
            />
            <AppleIcon
                color='secondary'
                fontSize='large'
            />
            <AdbIcon
                fontSize='small'
            />
            <AppleIcon
                color='disabled'
                fontSize='large'
            />
            
        </>
    )
}

export default IconComponent;