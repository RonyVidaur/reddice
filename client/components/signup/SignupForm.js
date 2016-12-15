import React, { PropTypes } from 'react'
import timezones from '../../data/timezones'
import classnames from 'classnames'

class SignupForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit(e) {
    this.setState({ errors: {}, isLoading: true })
    e.preventDefault()
    this.props.userSignupRequest(this.state).then(
      () => {},
      ({ data }) => this.setState({ errors:data, isLoading: false })
    )
  }

  render() {
    const { errors } = this.state
    const options = Object.keys(timezones).map(function(val){
      return (
        <option key={timezones[val]} value={timezones[val]}>{val}</option>
      )
    })﻿
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
        <div className={classnames("form-group", { 'has-error': errors.username})}>
          <label htmlFor="" className="control-label">username</label>
          <input value={this.state.username} onChange={this.onChange}type="text" name="username" className="form-control"/>
          {errors.username && <span className="help-block">{errors.username}</span>}
        </div>

        <div className={classnames("form-group", { 'has-error': errors.email})}>
          <label htmlFor="" className="control-label">E-mail</label>
          <input value={this.state.email} onChange={this.onChange}type="text" name="email" className="form-control"/>
          {errors.email && <span className="help-block">{errors.email}</span>}
        </div>

        <div className={classnames("form-group", { 'has-error': errors.password})}>
          <label htmlFor="" className="control-label">password</label>
          <input type="password" value={this.state.password} onChange={this.onChange} name="password" className="form-control"/>
          {errors.password && <span className="help-block">{errors.password}</span>}
        </div>

        <div className={classnames("form-group", { 'has-error': errors.passwordConfirmation})}>
          <label htmlFor="" className="control-label">password confirmation</label>
          <input type="password" value={this.state.passwordConfirmation} onChange={this.onChange} name="passwordConfirmation" className="form-control"/>
          {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
        </div>

        <div className={classnames("form-group", { 'has-error': errors.timezone})}>
          <label className="control-label">timezone</label>
          <select name="timezone" onChange={this.onChange}
          value={this.state.timezone}   className="form-control">
          <option value="" disabled>Choose your Timezone</option>
          {options}
        </select>
        {errors.timezone && <span className="help-block">{errors.timezone}</span>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} type="submit" className="btn btn-primary btn-lg">Sign up</button>
        </div>
    </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm
