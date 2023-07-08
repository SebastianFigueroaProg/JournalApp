import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";


const drawerWidth = 280;

export const JournalLayout = ({children}) => {
  return (
    <Box sm={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

        {/* Navbar drawerWidth */}
        
          <NavBar drawerWidth={drawerWidth} />
        
        {/* SIdebar */}

          <SideBar drawerWidth={drawerWidth}/>

        <Box
            component='main'
            sx={{  flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}
        >
            <Toolbar />

            { children }

        </Box>

    </Box>
  )
}
