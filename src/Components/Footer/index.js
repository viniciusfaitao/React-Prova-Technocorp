import React from "react";
import "./style.scss";
import bus from "./../../Utils/Gifs/bus.gif";
export const Footer = () => {
  return (
    <div className="background_footer">
      <div className="background_footer--left">
        <img alt={bus} src={bus} />
      </div>
      <div className="background_footer--center"></div>
      <div className="background_footer--right">
        <p>
          Created by{" "}
          <a href="https://github.com/viniciusfaitao/">Vinicius Faitão</a>
        </p>
      </div>
    </div>
  );
};
