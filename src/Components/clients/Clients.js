import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: 1,
        firstName: "Sidou",
        lastName: "Brahimi",
        email: "sidoudev@gmail.com",
        balance: "2000"
      },
      {
        id: 2,
        firstName: "Karen",
        lastName: "Smith",
        email: "karen@gmail.com",
        balance: "4500"
      }
    ];
    return (
      <div className="row">
        <div className="col-md-10">
        <h2><i className = "fas fa-users mb-4"></i> Clients</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key = {client.id}>
                  <td>{client.id}</td>
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
        <div className = "col-md-2">
            
        </div>
      </div>
    );
  }
}

export default Clients;
