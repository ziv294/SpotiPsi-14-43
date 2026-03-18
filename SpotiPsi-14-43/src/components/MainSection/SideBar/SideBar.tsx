import React from "react";
//import { useNavigate } from "react-router-dom";
import "./SideBar.css";

const SideBar: React.FC = () => {
  //const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="item active" onClick={() => null}>
        כל השירים
      </div>

      <div className="item" onClick={() => null}>
        פלייליסטים
      </div>

      <div className="item" onClick={() => null}>
        מועדפים
      </div>
    </div>
  );
};

export default SideBar;