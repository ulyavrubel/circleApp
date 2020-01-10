import React from "react";
import ColorComponent from "./ColorComponent";

class ColorApp extends React.Component {
  render() {
    return (
      <div className="body">
        <ColorComponent />
        <ColorComponent />
        <ColorComponent />
        <ColorComponent />
      </div>
    );
  }
}

export default ColorApp;
