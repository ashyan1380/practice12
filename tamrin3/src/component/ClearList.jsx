import React from 'react'
import PropTypes from 'prop-types'
import './ClearList.css'

const ClearList = ({content, onClick}) => {
    return (
        <button onClick={onClick} className='clear-btn'>
            {content}
        </button>
    )
}

ClearList.propTypes = {
    content: PropTypes.string
}

export default ClearList
