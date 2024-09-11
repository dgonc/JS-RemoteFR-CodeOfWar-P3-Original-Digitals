import { Navigate } from "react-router-dom";

function Home() {
  const IsConnected = false;
  
  return IsConnected ? (
    <h1>Welcome to the homepage !</h1>
  ) : (
    <Navigate to="/landing" />
  );
}

export default Home;
