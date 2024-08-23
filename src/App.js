import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Listing from "./components/Listing";

function App() {
  return (
    <div class="flex">
      <div className="border-2 border-red-400 w-1/2 max-h-full">
        <Form />
      </div>

      <div class="w-1/2 border-2 border-blue-400 max-h-full">Listing component</div>
    </div>
  );
}

export default App;
