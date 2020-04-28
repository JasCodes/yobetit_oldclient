/* eslint-disable */

import css from 'dom-css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars'

class ShadowScrollbars extends Component {
  constructor(props, ...rest) {
    super(props, ...rest)
    this.state = {
      scrollTop: 0,
      scrollHeight: 0,
      clientHeight: 0,
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }


  handleUpdate(values) {
    const { scrollTop, scrollHeight, clientHeight } = values
    const shadowTopOpacity = (1 / 20) * Math.min(scrollTop, 20)
    const bottomScrollTop = scrollHeight - clientHeight
    const shadowBottomOpacity =
      (1 / 20) * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20))
    css(this.shadowTop, { opacity: shadowTopOpacity })
  }


  render() {
    const { style, ...props } = this.props
    const containerStyle = {
      ...style,
      position: 'relative',
    }
    const shadowTopStyle = {
      position: 'absolute',
      pointerEvents: 'none',
      top: 0,
      left: 0,
      right: 0,
      height: 60,
      width: "98%",
      background:
        'linear-gradient(to top,rgba(255, 255, 255, 0),rgba(255, 255, 255, 1) 50%)',
    }

    return (
      <div style={containerStyle} >
        <Scrollbars ref="scrollbars" onUpdate={this.handleUpdate} {...props}
        />
        <div ref={(el) => { this.shadowTop = el }} style={shadowTopStyle} />
      </div>
    )
  }
}

ShadowScrollbars.propTypes = {
  style: PropTypes.object,
}

export default ShadowScrollbars
