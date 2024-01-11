import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function App() {
  const number = useRef();
  let ogirlik = 42;
  const gravitationalAccelerations = {
    mercury: 3.7,
    venus: 8.87,
    earth: 9.81,
    mars: 3.71,
    jupiter: 24.79,
    saturn: 10.44,
    uranus: 8.69,
    neptune: 11.15,
  };

  const [results, setResults] = useState([]);

  const calculate = (ogirlik) => {
    const all = [];
    for (let item in gravitationalAccelerations) {
      let weight =
        (ogirlik * gravitationalAccelerations[item]) /
        gravitationalAccelerations.earth;
      all.push({ [item]: Math.ceil(weight) });
    }

    setResults(all);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate(+number.current.value);
  };

  return (
    <div className="w-[1000px]  mx-auto">
      <h1 className="my-10 font-bold text-5xl">Calculate</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-4 mb-6">
          <input
            className="input input-bordered w-full max-w-xs"
            ref={number}
            type="text"
          />
          <button className="btn btn-success">Calculate</button>
        </div>
      </form>
      <ul>
        {results &&
          results.map((item) => {
            const obeKey = Object.keys(item)[0];
            return (
              <li className="grid" key={obeKey}>
                <img
                  className="flex"
                  src={`./planets/planet-${obeKey}.svg`}
                  alt=""
                  width={200}
                />
                {obeKey} : {item[obeKey]}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
