import react from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const App = ()=>{
    return (
    <>
      <div>
        <Navbar/>
        <hr />
        <div className="app-content flex ">
          <Sidebar/>
        </div>
      </div>
    </>
  )
}

export default App
