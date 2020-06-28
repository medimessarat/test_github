import React, { Component } from "react";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
// import { compose } from "redux";
// import { connect } from "react-redux";
class AddClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    balance: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newClient = this.state;

    // const newClient =
    if (newClient.balance === "") newClient.balance = 0;
    else newClient.balance = parseFloat(newClient.balance);

    const { firestore } = this.props;
    firestore.add({ collection: "clients" }, newClient).then(() => {
      this.props.history.push("/");
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left"></i> Back to DashBoard
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
                  type="text"
                  className="form-control"
                  name="firstName"
                  minLength="2"
                  required
                  value={this.state.firstName}
                  onChange={this.onChange}
                  placeholder="Enter First Name..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  minLength="2"
                  required
                  value={this.state.lastName}
                  onChange={this.onChange}
                  placeholder="Enter Last Name..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  minLength="2"
                  required
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder="Enter Email..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  minLength="2"
                  required
                  value={this.state.phone}
                  onChange={this.onChange}
                  placeholder="Enter Phone..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="balance">Balance</label>
                <input
                  type="text"
                  className="form-control"
                  name="balance"
                  minLength="2"
                  required
                  value={this.state.balance}
                  onChange={this.onChange}
                  placeholder="Enter Balance..."
                />
              </div>

              <input type="submit" className="submit btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddClient.propTypes = {
  firestore: PropTypes.object.isRequired,
};
export default firestoreConnect()(AddClient);
