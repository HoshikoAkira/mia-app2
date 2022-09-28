import React from 'react'
import { IconButton} from '@mui/material';
import Fingerprint from '@mui/icons-material/Fingerprint';


const Tattoli = () => {
    return (
        <div> <IconButton aria-label="fingerprint" color="secondary">
            <Fingerprint />
        </IconButton>
            <IconButton aria-label="fingerprint" color="success" fontSize="large">
                <Fingerprint />
            </IconButton></div>
    )
}

export default Tattoli