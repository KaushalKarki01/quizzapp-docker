import { useState } from "react";
import Appv1 from "../appv1";
export default function Start() {
  const [hasStarted, setHasStarted] = useState(false);

  function handleStart() {
    setHasStarted(true);
  }
  return (
    <>
      {hasStarted ? (
        <Appv1 />
      ) : (
        <div className="start">
          <div>
            <h1>Get ready to challenge your brain</h1>
            <h1>—are you up for the ultimate quiz adventure?</h1>
            <button onClick={handleStart}>Start</button>
          </div>
        </div>
      )}
    </>
  );
}
