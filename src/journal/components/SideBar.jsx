import { Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { SideBarItem } from "./";

export const SideBar = ({drawerWidth = 240}) => {

    const { displayName } = useSelector(  state => state.auth);
    const { notes } = useSelector(  state => state.journal);

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
                    notes.map(note =>(
                        <SideBarItem key={ note.id } { ...note } />
                    ))
                }
            </List>

        </Drawer>



    </Box>
  )
}
