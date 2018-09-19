import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

class Clients extends Component {
  state = {
    totalOwed: null
  };
  static getDerivedStateFromProps(props, state) {
    const { clients } = props;
    if (clients) {
      let total = clients.reduce((acc, client) => {
        return acc + parseFloat(client.balance)
      }, 0);
      return {
        totalOwed: total
      };
    } else {
      return null;
    }
  }
  render() {
    const { clients } = this.props;
    const { totalOwed } = this.state;
    if (clients) {
      return (
        <div className="row">
          <div className="col-md-9">
            <h2>
              <i className="fas fa-users mb-4" /> Clients
            </h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {this.props.clients.map(client => (
                  <tr key={client.id}>
                    <td>
                      {client.firstName} {client.lastName}
                    </td>
                    <td>{client.email}</td>
                    <td>$ {parseFloat(client.balance).toFixed(2)}</td>
                    <td>
                      <Link to="/clients/details" className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-right" /> Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-3">
            <h5 className="text-left text-seconday">
              Total Owed:{" "}
              <span className=" text-primary">
                ${parseFloat(totalOwed).toFixed(2)}
              </span>
            </h5>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
Clients.propTypes = {
  clients: PropTypes.array,
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(Clients);
