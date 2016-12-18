import React, { PropTypes } from 'react'
import classnames from 'classnames'

class FlashMessage extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id)
  }

  render () {
    return (
      <div className={classnames('alert', {
      'alert-success': this.props.message.type === 'success',
      'alert-danger': this.props.message.type === 'error'
    })}>
        <button onClick={this.onClick} className="close"><span>&times;</span></button>
        {this.props.message.text}
      </div>
    )
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;
