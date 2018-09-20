import React, { Component } from "react";
import { firestoreConnect} from "react-redux-firebase"; // to get firestore to the props of this component
import { Link } from 'react-router-dom' // for routing 
import PropTypes from 'prop-types' // have types for props

class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      balance: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault(   )
    const { firestore } = this.props;
    let newClient = this.state
    if(newClient.balance === '') {
        newClient.balance = 0
    }
    firestore.add({ collection: "clients" }, newClient).then(() => this.props.history.push('/'));
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" />
              {' '}Back To Dashboard
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Add Client</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  onChange={this.onChange}
                  value = {this.state.firstName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  onChange={this.onChange}
                  value = {this.state.lastName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  value = {this.state.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  className="form-control"
                  type="number"
                  name="phone"
                  onChange={this.onChange}
                  value = {this.state.phone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="balance">Balance</label>
                <input
                  className="form-control"
                  type="number"
                  name="balance"
                  onChange={this.onChange}
                  value = {this.state.balance}
                />
              </div>
              <input
                type="submit"
                className="btn btn-success btn-md"
                style={{ marginLeft: "40%" }}
                value="Add Client"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
AddClient.propTypes = {
    firestore : PropTypes.object
}

export default firestoreConnect()(AddClient);
