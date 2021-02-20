import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import Loader from '../layout/Loader'
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions'

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs()
    // eslint-disable-next
  }, [])

  if (loading || logs === null) {
    return <Loader />
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h3 className='center'>Ticket System</h3>
      </li>
      {!loading && logs.length === 0 ?
        (<p className='center'>No logs founds</p>)
        :
        (logs.map(log =>
          <LogItem log={log} key={log.id} />
        ))}
    </ul>
  )
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  log: state.log
})

export default connect(mapStateToProps, { getLogs })(Logs)