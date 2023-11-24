import './App.css'
import { Listing } from './components/listing'
import { formItems } from './components/dataForm'

function App() {

  return (
    <Listing items={formItems} />
  )
}

export default App
