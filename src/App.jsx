import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material'

function App() {

  const [buttonDisabled, setButtonDisabled] = useState(false)

  return (
    <div className="App">
      <Button variant="contained" disabled={buttonDisabled} sx={{ backgroundColor: "red" }}>Click me</Button>
      <Button variant="contained" sx={{ backgroundColor: "red" }} onClick={() => setButtonDisabled(prevButtonDisabled => !prevButtonDisabled)}>Toggle first button</Button>
    </div>
  )
}

export default App