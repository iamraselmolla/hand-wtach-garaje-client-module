import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
// import { Form } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Profile = () => {
  const { user, updateUserInfo } = useContext(AuthContext)
  const handleUpdateUserInfo = (e) => {
    e.preventDefault()
    console.log(e.target.username.value)
    updateUserInfo({ displayName: e.target.username.value })
      .then(() => {
        toast.success(('Profile Updated'))
      })
  }
  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Form onSubmit={handleUpdateUserInfo}>
            <div className="form-group mb-3">
              <label for="exampleInputEmail1">Username</label>
              <input defaultValue={user?.displayName} type="text" name="username" className="form-control" id="userNameID" placeholder="Username" />

            </div>
            <div className="form-group mb-3">
              <label for="exampleInputEmail1">Email</label>
              <input readOnly defaultValue={user?.email} type="text" name="email" className="form-control" id="email" placeholder="Email" />

            </div>
            <img style={{ maxWidth: '150px' }} className="rounded-circle mb-3" src={`${user?.photoURL}`} alt="" />
            <div className="form-group">
              <input type="file" name="img" className="form-control-file mb-2" id="img" />
            </div>
            <button type='submit' className="btn btn-primary">Update</button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Profile;