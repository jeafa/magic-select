import React from 'react'

export default class CustomValue extends React.PureComponent {
  handleMouseDown = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.props.onSelect(this.props.option, event)
  }

  handleMouseEnter = (event) => {
    this.props.onFocus(this.props.option, event)
  }

  handleMouseMove = (event) => {
    if (!this.props.isFocused) {
      this.props.onFocus(this.props.option, event)
    }
  }

  render() {
    return (
      <div
        className={this.props.className}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
        title={this.props.option.label}
      >
        {this.props.children}
      </div>
    )
  }
}
