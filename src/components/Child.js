import React from 'react';
import PropTypes from 'prop-types'
import '../react-minimap.css'


export class Child extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    node: PropTypes.any,
    clssName: PropTypes.string
  };

  render() {
    const {width, height, left, top, clssName} = this.props
    return (
      <div
        style={{
          position: 'absolute',
          width,
          height,
          left,
          top,
        }}
        className={"minimap-children ".concat(clssName)}

      />
    );
  }
}

export default Child
