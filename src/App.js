import { useState } from "react";

function App() {
  const [previousNumbers, setPreviousNumbers] = useState(null);
  const [currentNumbers, setCurrentNumbers] = useState("");

  function handleClick(e) {
    if (!currentNumbers) return;
    if (isNaN(currentNumbers[currentNumbers.length - 1])) {
      return;
    }
    const { id } = e.target;

    switch (id) {
      case "AC":
        setCurrentNumbers("");
        setPreviousNumbers("");
        break;
      case "+":
        setCurrentNumbers((prev) => prev + "+");

        break;
      case "x":
        setCurrentNumbers((prev) => prev + "*");
        break;
      case "/":
        setCurrentNumbers((prev) => prev + "/");
        break;
      case "-":
        setCurrentNumbers((prev) => prev + "-");

        break;
      case ".":
        if (currentNumbers.includes(".")) return;
        setCurrentNumbers((prev) => prev + ".");

        break;
      case "+/-":
        if (currentNumbers > 0) {
          setCurrentNumbers(() => -currentNumbers);
        } else if (currentNumbers < 0) {
          setCurrentNumbers(Math.abs(currentNumbers));
        }
    }
  }

  function addNumber(e) {
    const { id } = e.target;

    setCurrentNumbers((prev) => prev + id);
  }

  function handleEqual() {
    if (isNaN(currentNumbers[currentNumbers.length - 1])) {
      console.log(currentNumbers);
      const trimNum = currentNumbers.slice(0, currentNumbers.length - 1);
      console.log(trimNum);
      setCurrentNumbers(() => eval(trimNum).toFixed(2));
    } else {
      setCurrentNumbers(() => eval(currentNumbers).toFixed(2));
    }
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
            <div className="flex justify-end ">{currentNumbers}</div>
          </div>
        </div>
        <div
          onClick={handleClick}
          id={"AC"}
          className="bg-gray-500 w-[35px] h-[35px] cursor-pointer rounded-full mx-auto text-center flex items-center justify-center"
        >
          AC
        </div>
        <div
          id={"+/-"}
          onClick={handleClick}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          +/-
        </div>
        <div
          onClick={handleClick}
          id={"%"}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          %
        </div>
        <div
          onClick={handleClick}
          id={"/"}
          className="bg-orange-400 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          /
        </div>
        <div
          onClick={addNumber}
          id={7}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          7
        </div>
        <div
          id={8}
          onClick={addNumber}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          8
        </div>
        <div
          id={9}
          onClick={addNumber}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          9
        </div>
        <div
          onClick={handleClick}
          id={"x"}
          className="bg-orange-400 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          x
        </div>
        <div
          id={4}
          onClick={addNumber}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          4
        </div>
        <div
          id={5}
          onClick={addNumber}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          5
        </div>
        <div
          id={6}
          onClick={addNumber}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          6
        </div>
        <div
          onClick={handleClick}
          id={"-"}
          className="bg-orange-400 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          -
        </div>
        <div
          onClick={addNumber}
          id={1}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          1
        </div>
        <div
          onClick={addNumber}
          id={2}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          2
        </div>
        <div
          id={3}
          onClick={addNumber}
          className="bg-gray-500 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          3
        </div>
        <div
          id={"+"}
          onClick={handleClick}
          className="bg-orange-400 w-[35px] h-[35px] rounded-full mx-auto text-center flex items-center justify-center"
        >
          +
        </div>
        <div
          id={0}
          onClick={addNumber}
          className="bg-gray-500 w-[80px] h-[35px] col-span-2 rounded-full mx-auto text-center flex items-center justify-center"
        >
          0
        </div>
        <div
          id={"."}
          onClick={handleClick}
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
