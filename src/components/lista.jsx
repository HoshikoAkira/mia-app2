import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText, 
    Divider
} from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Lista = () => {
  return (
    <div>
          <List component="nav">
              <ListItem button>
                  <ListItemIcon>

                  </ListItemIcon>
                  < AddCircleOutlineIcon />
                  <ListItemText primary="Aggiungi una domanda" />
              </ListItem>

              <ListItem button>
                  <ListItemIcon>

                  </ListItemIcon>
                  < HighlightOffIcon  />
                  <ListItemText primary="Elimina una domanda" />
              </ListItem>
              <Divider/>
          </List>


    </div>
  )
}

export default Lista