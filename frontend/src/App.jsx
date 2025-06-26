import { Button, Typography } from '@mui/material'

function App() {
  return (
    <>
     <div className="p-4">
      <Typography variant="h4" color="primary">
        Circular Threads
      </Typography>
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">Tailwind Button</button>
      <br />
      <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
        MUI Button
      </Button>
    </div>
    </>
  )
}

export default App
