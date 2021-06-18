import React from 'react'
import PropTypes from 'prop-types'
import './Name.css'

const Name = ({data}) => {
    const className = data.sex === 'girl'? 'person girl' : 'person boy'
    return (
        <div className={className}>
            {data.name}
        </div>
    )
}

Name.propTypes = {

}

export default Name
