import { useState } from 'react'
import { HomePage } from './pages/home';
import { Layout } from './template';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>
    
  )
}

export default App
