import "./App.css";
import { Apiflow } from "./components/";

import List from "./test/List";
import List2 from "./test/List2";

function App() {
  return (
    <Apiflow token="asdfasdfasdf">
      <List />
      <List2 />
    </Apiflow>
  );
}

export default App;
