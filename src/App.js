import { Provider } from "react-redux";
import MainRoute from "./MainRoute";
import {ToastContainer} from "react-toastify"
import { store } from "./redux/store";
import './App.css';

function App() {
  
  return (
   
      <Provider store={store}>
      <ToastContainer />
   
      <MainRoute />
      
      </Provider>
      
    
   );
}

export default App;
