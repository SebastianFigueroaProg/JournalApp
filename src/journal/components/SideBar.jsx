import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { TurnedInNot } from "@mui/icons-material"
import { useSelector } from "react-redux";

export const SideBar = ({drawerWidth = 240}) => {

    const { displayName } = useSelector(  state => state.auth);

    const name = displayName.replace(/\b/g, l => l.toUpperCase());

  return (
    <Box
        component='nav'
        sx={{width:{sm:drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display:{xs: 'block'},
                '& .muiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>{ name }</Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['enero','febrero','marzo','abril'].map(text =>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid>
                                    <ListItemText primary={ text }/>
                                    <ListItemText secondary={ 'Probando app de tareas' }/>                                    
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>



    </Box>
  )
}
