import React from "react";
import "./footer.css";

function footer() {
  return (
    <div className="footer_main">
      <div className="social"></div>
      <br />
     <div className="last_text">
        MORE FEATURES COMMING SOON !
     </div>
      <div className="credits">
        <span>
          This Clone was made with ❤️ by  
        </span>
        <a className = "link_name " href="https://linktr.ee/anizbn"> Aniz </a>
          using React JS

      </div>
      
    </div>
  );
}

export default footer;
