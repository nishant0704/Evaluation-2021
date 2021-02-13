import React from 'react';
import PropTypes from 'prop-types';
import './HeroImage.scss';

const HeroImage = ({
    imageUrl
}) => {
    const baseClassName = "heroImage";
    return(
        <div className={`${baseClassName}Container`}>
            <img className = {`${baseClassName}dimension`} src={imageUrl} alt="HeroImage"/>
        </div>
        
    );
}

export default HeroImage;

HeroImage.propTypes={
    imageUrl:PropTypes.object.isRequired
}