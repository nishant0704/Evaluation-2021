import React from 'react'
import PropTypes from 'prop-types';
import './Logo.scss';

const Logo = ({
    logoSvg
}) => {
    const baseClassName ='Logo';
    return(
        
        <div className={`${baseClassName}Container`}>
            <img 
                className={`${baseClassName}dimension`} 
                src={logoSvg} 
                alt="Logo Icon"
            />
        </div>
    );
}

export default Logo;

Logo.propTypes={
    logoSvg:PropTypes.object.isRequired
}