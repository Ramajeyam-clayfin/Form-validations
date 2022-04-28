// import FormControl from './FormControl/FormControl';
// import Example1 from './UseEffect/example1';
// import DateAge from './Dateage/DateAge';
// import Shop from './Reducer/shop'
// import RoutingExample1 from './Routing/RoutingExample1'
// import Home from './Reduxreducer/Home';
import Home from './ReduxToolkit/Home';
// import Home from './RestaurantApp/Home';
import './App.css';
import { NavLink as Link, Route, Routes } from "react-router-dom"
import LoginPage from "./Routing/Login"
import PrivateRoute from "./Routing/PrivateRoute"
import ProtectedPage from "./Routing/ProtectedPage"

function App() {
  return (
    <div className="App">
      <h1>Form Validations</h1>
      <hr/><br/>
      <Home/>
      {/* <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/protected" >
              Protected Page
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route
            path="protected"
            element={
              <PrivateRoute>
                <ProtectedPage x={1} />
              </PrivateRoute>
            }
          ></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </div> */}
    </div>
  );
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <nav>
//         <ul>
//           <li>
//             <Link to="/protected" activeClassName="active">
//               Protected Page
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="main">
//         <Routes>
//           <Route
//             path="protected"
//             element={
//               <PrivateRoute>
//                 <ProtectedPage x={1} />
//               </PrivateRoute>
//             }
//           ></Route>
//           <Route path="login" element={<LoginPage />}></Route>
//         </Routes>
//       </div>
//     </div>
//   )
// }


