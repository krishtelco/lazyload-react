import React, { useState, useEffect } from "react";
import "./styles.css";
const Lazyitem = () => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    console.log("loaded");
    setVal((v) => v + 1);
  }, []);
  return (
    <div className="new">
      <h1>LAZY {val}</h1>
    </div>
  );
};

export default Lazyitem;
