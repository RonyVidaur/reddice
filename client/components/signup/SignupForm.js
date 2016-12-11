import React, { PropTypes } from 'react'
import timezones from '../../data/timezones'

class SignupForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    const options = Object.keys(timezones).map(function(val){
      return (
        <option key={timezones[val]} value={timezones[val]}>{val}</option>
      )
    })﻿
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
        <div className="form-group">
          <label htmlFor="" className="control-label">username</label>
          <input value={this.state.username} onChange={this.onChange}type="text" name="username" className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="" className="control-label">E-mail</label>
          <input value={this.state.email} onChange={this.onChange}type="text" name="email" className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="" className="control-label">password</label>
          <input type="password" value={this.state.password} onChange={this.onChange} name="password" className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="" className="control-label">password confirmation</label>
          <input type="password" value={this.state.passwordConfirmation} onChange={this.onChange} name="passwordConfirmation" className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">timezone</label>
          <select name="timezone" onChange={this.onChange}
          value={this.state.timezone}   className="form-control">
          <option value="" disabled>Choose your Timezone</option>
          {options}
        </select>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">Sign up</button>
        </div>
    </form>
    )
  }
}

export default SignupForm
;
