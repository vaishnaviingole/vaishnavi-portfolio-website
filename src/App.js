import { HashRouter } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";

function App() {
   return (
      <div>
         {/* Use HashRouter instead of BrowserRouter */}
         <HashRouter>
            <BaseLayout/>
         </HashRouter>
      </div>
   );
}

export default App;