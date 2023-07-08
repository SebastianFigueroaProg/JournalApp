import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view"
import { useDispatch } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"


export const JournalPage = () => {

  const dispatch = useDispatch();
  
  const onClickNewNote = () =>{
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>

      <NothingSelectedView/>

      {/*<NoteView/>*/}

      <IconButton
        onClick={ onClickNewNote }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity:0.9},
          position: 'fixed',
          right: 50,
          bottom: 10
        }}
      >
        <AddOutlined sx={{fontSize: 20}}/>
      </IconButton>
      
    </JournalLayout>
  )
}
