import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TechItem from './TechItem'
import { getTechs } from '../../actions/techActions'
import PropTypes from 'prop-types'

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs()
    // eslint-disable-next
  }, [])

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h3>Technician list</h3>
        <ul className='collection'>
          {!loading && techs !== null
            && techs.map(t =>
              <TechItem tech={t} key={t.id} />
            )
          }
        </ul>
      </div>
    </div>
  )
}

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechListModal)