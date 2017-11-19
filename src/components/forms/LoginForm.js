import React from 'react';
import PropTypes from 'prop-types';
import InlineError from "../messages/InlineError";
import "./loginForm.css";

class LoginForm extends React.Component {
  state = {
    data: {
      email : '',
      password : ''
    },
    loading: false,
    errors: {}
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  }

  validate = (data) => {
    const errors = {};
    if (!data.email) errors.email = "Can't be blank";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state

    if (loading) return (<div> loading ... </div>)

    return (
      <div className="LoginForm">
        {errors.global && (
          <div className="ResponseError">
            ResponseError
          </div>
        )}
        <div htmlFor="email" className="Label">
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
        </div>
        {errors.email && <InlineError text={errors.email} />}
        <div htmlFor="password" className="Label">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={this.onChange}
          />
        </div>
        {errors.password && <InlineError text={errors.password} />}
        <button onClick={this.onSubmit}> Login </button>
      </div>
    )
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;
