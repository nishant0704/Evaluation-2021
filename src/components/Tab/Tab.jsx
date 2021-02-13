import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';


export default class Tab extends Component {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    const baseClassName='tab';
    let className = `${baseClassName}`;

    if (activeTab === label) {
      className += `Active`;
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

Tab.propTypes={
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}