import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = ({
    title
}) => {
    const baseClassName = 'footer';
    return(
        <div className={`${baseClassName}Container`}>
            <div className={`${baseClassName}Title`}>
                {title}
            </div>
        </div>
    );
}

export default Footer;

Footer.propTypes={
    title:PropTypes.object.isRequired
}
