import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div className="row blue-bkg nm" id="top-box">
        <div className="col s12">
          <img src="https://via.placeholder.com/180" alt="Profile" className="circle responsive-img" />
        </div>
      </div>
      <div className="row blue-bkg nm">
        <div className="col s12">Navbar links</div>
      </div>
      <div className="row pink-bkg nm">
        <div className="col s12">background triangles image</div>
      </div>
    </Fragment>
  );
}

export default Home;
