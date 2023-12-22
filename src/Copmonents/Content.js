import { Box, Card, Fab, Dialog, DialogContent, Stack, TextField, DialogActions } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import Notes from './Notes';

const Content = (props) => {

    const[value, setValue] = useState(false);

    const[arr, setArr] = useState([]);

    const[obj, setObj] = useState({
        heading:"",
        notes:""
    });

    const handleChange = (e) => {
        const{name, value} = e.target;

        setObj(pre=>{
            return{
                ...pre, [name]: value
            }
        });
    }

    const addNote = (note) => {

        setArr(pre=>{
          return[...pre, note]
        });
      }

    const deleteNote = (id) => {

      setArr(pre=>{
        return pre.filter((curr, index) => index !== id);
      });
    }

    const handleClick = (e) =>{
        setValue(false);
        addNote(obj);
        setObj({
            heading:"",
            notes:""
        });
        e.preventDefault();
    } 

  return (
    <>
        <Box width={1} height={1} position={'relative'}>

            <Fab onClick={() => setValue(true)} color='primary' size='large' sx={{position: 'absolute', 
            bottom:20, right:20, width: '70px', height: '70px'}}>
                <AddIcon fontSize='medium'/>
            </Fab>
            <Box>
                <Dialog sx={{".MuiDialog-paper":{bgcolor:'transparent', boxShadow:0}}} 
                open={value} onClose={() => setValue(false)}>
                    <Stack direction={'column'} alignItems={'end'} width={'90%'} sx={{mx:'5%', position: 'relative', pb: 6}}>
                        <DialogContent sx={{p:1}}>
                            <Card draggable sx={{borderRadius:5, p:3, boxShadow: 3}}>
                                <form id='adding_note'>

                                    <TextField name='heading' value={obj.heading} label="Your Heading" 
                                    color='primary' variant='standard' onChange={handleChange} 
                                    sx={{width:1, mb:'4px'}}/>

                                    <TextField name='notes' value={obj.notes} onChange={handleChange} 
                                    label="Your Notes" color='secondary' variant='standard' 
                                    InputProps={{disableUnderline:true}} 
                                    sx={{width:1, "& div":{mt:1}}} multiline rows={6}/>
                                </form>
                            </Card>
                        </DialogContent>
                        <DialogActions sx={{pt:0, position:'absolute', bottom:'18px', right:'20px'}}>
                            <button style={{padding:1, border:'none', backgroundColor:'transparent', 
                            boxShadow:3}} type='submit' form='adding_note' onClick={handleClick}>
                                <Fab color='secondary'>
                                    <CreateIcon fontSize='small'/>
                                </Fab>
                            </button>
                        </DialogActions>
                    </Stack>
                </Dialog>
            </Box>
                {/* bgcolor={'#E3F4F4'} */}
            <Box width={'90%'} mx={'5%'} height={1}>
                <Stack direction={'row'} flexWrap={'wrap'} overflow={'visible'}>
                    {
                        arr.map((curr, index) => {
                           return <Notes 
                                    key = {index}
                                    id = {index}
                                    heading = {curr.heading}
                                    notes = {curr.notes}
                                    onDelete = {deleteNote}
                                 />
                        })
                    }
                </Stack>
            </Box>
        </Box>
    </>
  )
}

export default Content