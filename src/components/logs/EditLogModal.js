import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'
import { updateLog } from '../../actions/logActions'
import TechSelectOptions from '../technicians/TechSelectOptions'

const EditLogModal = ({ updateLog, current }) => {
  const [message, setMessage] = useState('')
  const [important, setImportant] = useState(false)
  const [tech, setTech] = useState('')

  useEffect(() => {
    if (current) {
      setMessage(current.message)
      setImportant(current.important)
      setTech(current.tech)
    }
  }, [current])

  const onSubmit = () => {
    if (!message && !tech) M.toast({ html: 'Please enter a message and a technician'})
    else if (!message) M.toast({ html: 'Please enter a message' })
    else if (!tech) M.toast({ html: 'Please enter a technician' })
    else {
      const newLog = {
        id: current.id,
        message,
        important,
        tech,
        date: new Date()
      }
      
      updateLog(newLog)
      M.toast({ html: `Ticket ${newLog.id} updated by ${newLog.tech}` })
    }
  }
  
  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div id='test' className='input-field'>
            <input
             type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
              // Autofocus is used to prevent input and label overlapping due to materialize
              // Unfortunately it will throw an error to the console
              autofocus='true'
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>Select Technician</option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={important}
                  value={important}
                  onChange={e => setImportant(!important)}
                />
                <span>Important ticket</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a 
          href='#' 
          onClick={onSubmit} 
          className='modal-close waves-effect waves-green blue btn'
        >
          Enter
        </a>
      </div>
    </div>
  )
}

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  current: state.log.current
})

const modalStyle = {
  width: '75%',
  height: '75%'
}

export default connect(mapStateToProps, { updateLog })(EditLogModal)