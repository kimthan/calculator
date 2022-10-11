import { useEffect, useState } from "react";

function App() {
  const [previousNumbers, setPreviousNumbers] = useState("");
  const [currentNumbers, setCurrentNumbers] = useState("");

  useEffect(() => {
    function handleKey(e) {
      addNumber(e.key);
    }

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [currentNumbers]);
  //helper
  function handleAC(id) {
    if (id === "AC") {
      setCurrentNumbers("");
      setPreviousNumbers("");
    }
  }

  function handleOperandClick(e) {
    if (!currentNumbers) return;
    const { id } = e.target;

    if (isLastOperand(currentNumbers)) {
      setCurrentNumbers(trimOperand(currentNumbers));
    }

    function handleOperand(op) {
      if (op === "AC") handleAC(op);
      else setCurrentNumbers((prev) => prev + `${op}`);
    }
    switch (id) {
      case ".":
        if (currentNumbers.includes(".")) return;
        setCurrentNumbers((prev) => prev + ".");

        break;
      case "+/-":
        if (currentNumbers > 0) {
          setCurrentNumbers(() => eval(-currentNumbers));
        } else if (currentNumbers < 0) {
          setCurrentNumbers(Math.abs(currentNumbers.slice(1)).toString());
        }
        break;
      default:
        handleOperand(id);
    }
  }

  //adding input to display
  function addNumber(number) {
    if (!isNaN(number)) {
      setCurrentNumbers((prev) => prev + number);
    }
  }

  //helper to remove last slot if its an operand
  function trimOperand(str) {
    return str.slice(0, currentNumbers.length - 1);
  }
  //helper to check if the last slot is an operand
  function isLastOperand(currentDisplay) {
    return isNaN(currentDisplay[currentDisplay.length - 1]);
  }

  function handleEqual() {
    if (isLastOperand(currentNumbers)) {
      setCurrentNumbers(trimOperand(currentNumbers));
    } else setCurrentNumbers(() => eval(currentNumbers).toString());
    setPreviousNumbers(() => currentNumbers);
  }
  return (
    <div className="flex justify-center h-screen items-center w-[500px] mx-auto ">
      <div className="w-[200px] h-[300px]  grid gap-1 grid-cols-4 bg-black p-1 rounded-lg">
        <div
          value={"test"}
          className="bg-gray-400 w-[full] h-[50px] col-span-4 m-3 rounded p-2 flex justify-end items-end"
        >
          <div className="">
            <div className="text-[8px] flex justify-end">{previousNumbers}</div>
            <div className="text-xl flex justify-end ">{currentNumbers}</div>
          </div>
        </div>
        <div
          onClick={handleOperandClick}
          id={"AC"}
          className="bg-gray-500 w-[35px] h-[35px] cursor-pointer rounded-full mx-auto text-center flex items-center justify-center"
        >
          AC
        </div>
        <div
          id={"+/-"}
          onClick={handleOperandClick}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          +/-
        </div>
        <div
          onClick={handleOperandClick}
          id={"%"}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          %
        </div>
        <div
          onClick={handleOperandClick}
          id={"/"}
          className="bg-orange-400 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          /
        </div>
        <div
          onClick={(e) => addNumber(e.target.id)}
          id={7}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          7
        </div>
        <div
          id={8}
          onClick={(e) => addNumber(e.target.id)}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          8
        </div>
        <div
          id={9}
          onClick={(e) => addNumber(e.target.id)}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          9
        </div>
        <div
          onClick={handleOperandClick}
          id={"*"}
          className="bg-orange-400 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          x
        </div>
        <div
          id={4}
          onClick={(e) => addNumber(e.target.id)}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          4
        </div>
        <div
          id={5}
          onClick={(e) => addNumber(e.target.id)}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          5
        </div>
        <div
          id={6}
          onClick={(e) => addNumber(e.target.id)}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          6
        </div>
        <div
          onClick={handleOperandClick}
          id={"-"}
          className="bg-orange-400 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          -
        </div>
        <div
          onClick={(e) => addNumber(e.target.id)}
          id={1}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          1
        </div>
        <div
          onClick={(e) => addNumber(e.target.id)}
          id={2}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          2
        </div>
        <div
          id={3}
          onClick={(e) => addNumber(e.target.id)}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          3
        </div>
        <div
          id={"+"}
          onClick={handleOperandClick}
          className="bg-orange-400 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          +
        </div>
        <div
          id={0}
          onClick={(e) => addNumber(e.target.id)}
          className="bg-gray-500 w-[80px] h-[35px] col-span-2 rounded-full mx-auto text-center flex items-center justify-center"
        >
          0
        </div>
        <div
          id={"."}
          onClick={handleOperandClick}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          .
        </div>
        <div
          onClick={handleEqual}
          className="bg-orange-400 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          =
        </div>
      </div>
    </div>
  );
}

export default App;
