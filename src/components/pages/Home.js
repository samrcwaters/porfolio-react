import React, { Fragment, useState } from 'react';
import triangles_bkg from "./triangles_bkg.svg";
import Navbar from '../layout/Navbar';
import { CSSTransition } from 'react-transition-group';
import "./Home.css";

const Home = () => {
  const [showBio, setShowBio] = useState(true);

  return (
    <Fragment>
      <div className="row blue-bkg nm" id="top-box">
        <CSSTransition in={showBio} timeout={200}>
          <div className="col s12" id="profile_img_col">
            <img src="https://via.placeholder.com/180" alt="Profile" className="circle responsive-img" />
          </div>
        </CSSTransition>
      </div>
      <Navbar showBio={showBio} />
      <div className="row pink-bkg nm">
        <div className="col s12" id="bkg_img_col">
          <img src={triangles_bkg} className="responsive-img" alt="triangles" id="bkg_img"></img>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
