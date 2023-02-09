import { Dialog } from '@mui/material'
import React from 'react'

const dailogStyle={
    height:"96%",
    marginTop:"12%",
    width:"60%",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    overFlow:"none"

}
const LoginDailog = () => {
  return (
    <div>
        <Dialog
        open={true}
        PaperProps={{sx:dailogStyle}}
        >
            hello

        </Dialog>
      
    </div>
  )
}

export default LoginDailog
