import React from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { setCurrent, deleteLog } from '../../actions/logActions'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, setCurrent, deleteLog }) => {
  const onDelete = (e) => {
    e.preventDefault()
    deleteLog(log.id)
    M.toast({ html: `Ticket ${log.id} deleted` })
  }

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${log.important ? 'red-text' : 'blue-text'}`}
          onClick={() => setCurrent(log)}  
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>Ticket #{log.id} </span>
          last updated by{' '}
          <span className='black-text'>{log.tech} </span>
          on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
}

export default connect(null, { setCurrent, deleteLog })(LogItem)
