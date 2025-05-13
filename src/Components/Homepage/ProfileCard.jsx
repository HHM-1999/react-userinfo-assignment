import React from 'react'
import profilePic from '../../assets/profile.png'

const ProfileCard = () => {
  return (
    <div className="row">
      <div className="col-lg-10 m-auto">
        <div className='row'>
          <div className="col-lg-4">
            <div className="card">
              <img src={profilePic} className="card-img-top" alt="User Profile" title='User Profile' />
              <div className="card-body">
                <h5 className="card-title">Name : Bobita Khan</h5>
                <p className="card-text">Role: Frontend Developer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={profilePic} className="card-img-top" alt="User Profile" title='User Profile' />
              <div className="card-body">
                <h5 className="card-title">Name : Sormila Thakur</h5>
                <p className="card-text">Role: Laravel Developer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={profilePic} className="card-img-top" alt="User Profile" title='User Profile' />
              <div className="card-body">
                <h5 className="card-title">Name : Kobita Akhter</h5>
                <p className="card-text">Role: Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProfileCard