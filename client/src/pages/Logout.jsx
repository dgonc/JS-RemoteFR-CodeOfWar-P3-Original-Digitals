import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    if (counter === 0) {
      navigate("/");
    }
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer);
  }, [counter, navigate]);

  return (
    <>
      <p className="logout-text">You are now logged out.</p>
      <p className="logout-timer">Redirect in : {counter} seconds</p>
    </>
  );
}

export default Logout;