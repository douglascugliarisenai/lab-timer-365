import { useState } from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { CycleProvider } from './contexts/cycle';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CycleProvider>
        <RouterProvider router={router} />
      </CycleProvider>
    </>

  )
}

export default App
