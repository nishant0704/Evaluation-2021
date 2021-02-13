import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';
import './TabSection.scss';

export default class TabSection extends Component{
    constructor(props){
        super(props);
        this.state={
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    render(){

        const {
            onClickTabItem,
            props: {
              children,
            },
            state: {
              activeTab,
            }
          } = this;
        
        const baseClassName = "tabSection";
        return (
            <div className={`${baseClassName}Container`}>
                <ol className={`${baseClassName}Options`}>
                {children.map((child) => {
                    const { label } = child.props;
        
                    return (
                    <Tab
                        activeTab={activeTab}
                        key={label}
                        label={label}
                        onClick={onClickTabItem}
                    />
                    );
                })}
                </ol>
                <div className={`${baseClassName}Content`}>
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
                </div>
            </div>
        );

    }
}

TabSection.propTypes={
    children: PropTypes.instanceOf(Array).isRequired,
}





  
