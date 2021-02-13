import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

const Title = ({
    title,
    subTitle
}) => {
    const baseClassName = "title";
    return(
        <div className={`${baseClassName}`}>
            <div className={`${baseClassName}Main`}>
                {title}
            </div>
            <div className={`${baseClassName}Sub`}>
                {subTitle}
            </div>
        </div>
    );
}

export default Title;

Title.propTypes = {
    title:PropTypes.object.isRequired,
    subTitle:PropTypes.object.isRequired
}