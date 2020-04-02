import React, { Fragment } from 'react';
import triangles_bkg from "./triangles_bkg.svg";
import Navbar from '../layout/Navbar';

const Home = () => {
  const bkg_img_col_style = {
    paddingRight: "0",
    paddingLeft: "0"
  };

  const bkg_img_style = {
    width: "100%"
  };

  return (
    <Fragment>
      <div className="row blue-bkg nm" id="top-box">
        <div className="col s12">
          <img src="https://via.placeholder.com/180" alt="Profile" className="circle responsive-img" />
        </div>
      </div>
      <Navbar />
      <div className="row pink-bkg nm">
        <div className="col s12" style={bkg_img_col_style}><img src={triangles_bkg} className="responsive-img" alt="triangles" style={bkg_img_style}></img></div>
      </div>
    </Fragment>
  );
}

export default Home;
