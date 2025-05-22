import React from "react";
import ReactDOM from "react-dom/client"; // 注意这里是 'react-dom/client'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

// 使用 createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);