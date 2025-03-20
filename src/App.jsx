import './App.css'
import OfficeBearers from "./Office";
import Footers from "./Footer";



import './f1-1.css'

function App() {
  return (
      <div>  {/* Added a parent div */}
          <div className="f1">
              <OfficeBearers/>
          </div>
          <div className="f2">
              <Footers/>
          </div>
      </div>
  );
}

export default App;

