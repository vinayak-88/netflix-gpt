import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Browse from "./components/Browse";
import Body from "./components/Body";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user); 
  return user ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route 
            path="/browse" 
            element={
              <ProtectedRoute>
                <Browse />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;