import React, { PropTypes } from 'react'
import timezones from '../../data/timezones'
import classnames from 'classnames'
import validateInput from '../../../server/shared/validations/signup'
import TextFieldGroup from '../common/TextFieldGroup'

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
  isValid() {
    const { errors, isValid } = validateInput(this.state)
    if (!isValid) {
      this.setState( { errors })
    }
    return isValid
  }
  onSubmit(e) {
    e.preventDefault()
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.userSignupRequest(this.state).then(
        () => {
          this.context.router.push('/')
        },
        ({ data }) => this.setState({ errors:data, isLoading: false })
      )
    }
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

        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          field="username"/>

        <TextFieldGroup
          error={errors.email}
          label="E-mail"
          onChange={this.onChange}
          value={this.state.email}
          field="email"/>

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"/>

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="passwordConfirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"/>

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

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignupForm
