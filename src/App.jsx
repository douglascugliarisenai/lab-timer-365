import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { CycleProvider } from './contexts/cycle';

function App() {

  return (
    <>
      <CycleProvider>
        <RouterProvider router={router} />
      </CycleProvider>
    </>

  )
}

export default App
