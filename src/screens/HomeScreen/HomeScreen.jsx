import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TopSection from '../../components/TopSection/TopSection';
import Footer from '../../components/Footer/Footer';
import TabSection from '../../components/TabSection/TabSection';
import {footer} from '../../lib/constants';
import {client} from '../../api';

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            imageUrl:''
        }
    }
    componentDidMount(){
        client.photos.curated({ per_page: 1 }).then(photos => {
            this.setState({
                imageUrl:photos.photos[0].src.landscape
            });
        });
    }
    render(){
        
        return(
            <div>
                <TopSection imageUrl={this.state.imageUrl}/>
                <TabSection>
                <div label="Photos"> 
                    Photos 
                </div> 
                <div label="Videos"> 
                    Videos
                </div> 
                </TabSection>
                <Footer title={footer.title}/>
            </div>
        );
    }
}

HomeScreen.propTypes={

}