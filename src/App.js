
import './assets/css/App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from "./Header"
import Form from "./components/Form";
import FormEdit from './components/FormEdit';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  const toggle = useSelector(state => state.posts.visible)

  const handleClose = () => {
    dispatch({ type: 'HIDE'});
}

  return (
   
      <div className="App">
       <Header/>
       <div className={toggle === false ? "sidebar toggleactive" : "sidebar"} >
         <button type="button" onClick={()=>handleClose()} className="btn btn-primary ml-auto d-block">close</button>
         <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
         </ul>
       </div>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/form" component={Form}/>
          <Route exact path="/edit-user/:id" component={FormEdit}/>
          

        </Switch>
        
      </div>
    
  );
}

export default App;
