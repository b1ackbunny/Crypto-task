import React from "react";
import PropTypes from 'prop-types'

export default function Logo({title}){
    return (
        <>
        {title}
        </>
    )
}

Logo.propTypes = {
    title: PropTypes.string.isRequired,
}