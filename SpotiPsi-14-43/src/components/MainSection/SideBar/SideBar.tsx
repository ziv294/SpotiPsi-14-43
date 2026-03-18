import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { BsHouseFill, BsFileEarmarkPlusFill, BsHeartFill } from "react-icons/bs";
import "./SideBar.css";

const SideBar: React.FC = () => {
  //const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("songs");

  const handleClick = (name: string, path: string) => {
    setSelected(name);
    //navigate(path);
  };

  return (
    <div className="sidebar">
      <div className={selected === "songs" ? "item active" : "item"} onClick={() => handleClick("songs", "/")}>
        <BsHouseFill /> כל השירים 
      </div>

      <div className={selected === "playlists" ? "item active" : "item"} onClick={() => handleClick("playlists", "/playlists")}>
         <BsFileEarmarkPlusFill /> פלייליסטים 
      </div>

      <div className={selected === "favorites" ? "item active" : "item"} onClick={() => handleClick("favorites", "/favorites")}>
         <BsHeartFill /> מועדפים 
      </div>
    </div>
  );
};

export default SideBar;