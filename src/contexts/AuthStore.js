import React, { Component } from 'react'

const AuthContext = React.createContext();

class AuthStore extends Component {
  state = {
    user: {}
  }

  handleUserChange = (user) => {
    this.setState({ user })
  }

  isAuthenticated = () => this.state.user && this.state.user.email

  render() {
    return (
      <AuthContext.Provider value={{
        user: this.state.user,
        onUserChange: this.handleUserChange,
        isAuthenticated: this.isAuthenticated
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthStore, AuthContext }
