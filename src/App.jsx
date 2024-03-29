import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousInput) => {
      return { ...previousInput, [inputIdentifier]: +newValue };
    });
  }
  return (
    <>
      <Header />;
      <UserInput userInput={userInput} onChange={handleChange} />;
      {!inputIsValid && (
        <p className="center">Please enter duration greater than zero</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
