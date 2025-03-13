import React, { useState, useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  return (
    loading && (
      <div className="custom-loader">
        <div className="text-top">CHHAVI</div>
        <div className="line">
          <div className="progress"></div>
        </div>
        <div className="text-bottom">KASHYAP</div>
      </div>
    )
  );
};

export default Loader;
