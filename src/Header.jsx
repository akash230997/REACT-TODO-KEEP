import React from 'react';
import img from './img/Screenshot 2022-10-30 191155.png';
// import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

const Header = () => {
    return (
      <div className="head">
        <div className="logo">
          {/* <PlaylistAddCheckIcon/> */}
          <img src={img} height={'100%'} alt="" />
          <h1>CAPTAINS TODO</h1>
        </div>
      </div>
    );
}

export default Header;
