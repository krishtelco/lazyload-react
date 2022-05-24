import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import "./styles.css";
import Lazyitem from "./lazyitem.js";
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("loaded 4");
  }

  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Image2 pic="https://placedog.net/500/300" />
      </div>
    );
  }
}
const Image2 = ({ pic }) => (
  <p>
    <img src={pic} width="250" alt="dog images" title={"NEWDOG"} />
  </p>
);
const App2 = () => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    console.log("loaded 2");
    setVal((v) => v + 1);
  }, []);
  //<Image2 pic="https://placedog.net/500/300" />
  return (
    <div>
      <LazyLoad height={200}>
        {/* <Image2 pic="https://placedog.net/500/300" />*/}
        <MyComponent />
      </LazyLoad>
    </div>
  );
};
export default App2;
