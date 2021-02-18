import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'
import React, { useEffect } from 'react'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddButton from './components/layout/AddButton'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/technicians/AddTechModal'
import TechListModal from './components/technicians/TechListModal'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  useEffect(() => {
    // Initializes Materialize-js
    M.AutoInit()
  })
  
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