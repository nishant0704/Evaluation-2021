import React,{Component} from 'react';
import PropTypes from 'prop-types';
import HeroImage from '../HeroImage/HeroImage';
import curatedJumboImages from '../../response/curatedJumboImages.json'
import Logo from '../Logo/Logo';
import LogoIcon from '../../assets/Logo.png'
import Title from '../Title/Title';
import {heroImage} from '../../lib/constants';

export default class TopSection extends Component {
    constructor(props){
        super(props);
    }
     render () {
         return(
            <div>
                <HeroImage 
                    imageUrl = {this.props.imageUrl}
                />
                <Logo
                    logoSvg = {LogoIcon}
                />
                <Title
                    title={heroImage.title}
                    subTitle={heroImage.subTitle}
                />
            </div>
         );
     }
}