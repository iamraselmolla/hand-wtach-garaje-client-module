import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <section className="container py-5">
      <div className="row">
        <form>
          <div className="form-group mb-3">
            <label for="exampleInputEmail1">Username</label>
            <input defaultValue={user?.displayName} type="email" name="username" className="form-control" id="username" placeholder="Username" />

          </div>
          <div className="form-group mb-3">
            <label for="exampleInputEmail1">Email</label>
            <input defaultValue={user?.email} type="email" name="username" className="form-control" id="email" placeholder="Email" />

          </div>
          <img style={{maxWidth: '150px'}} className="rounded-circle mb-3" src={`${user?.photoURL}`} alt="" />
          <div className="form-group">
            <input type="file" name="img" className="form-control-file mb-2" id="img"/>
          </div>
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </section>
  );
};

export default Profile;