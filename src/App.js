import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import store from './store'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddButton from './components/layout/AddButton'
import AddLogModal from './components/logs/AddLogModal'
import AddTechModal from './components/technicians/AddTechModal'
import EditLogModal from './components/logs/EditLogModal'
import TechListModal from './components/technicians/TechListModal'

const App = () => {
  useEffect(() => {
    // Initializes Materialize-js on page refresh
    M.AutoInit()
  }, [])
  
  return (
    <Provider store={store}>
      <>
        <SearchBar />
        <div className='container'>
          <AddButton />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </>
    </Provider>
  )
}

export default App