import { RefreshCw } from "lucide-react";
import { useState } from "react";

export default function MultiCounterApp() {
  const [counters, setCounters] = useState([0, 0, 0]);

  const increase = (index) => {
    setCounters((prev) => prev.map((count,i) =>
    i === index ? count + 1 : count ))
  }

  const decrease = (index) => {
    setCounters((prev) => prev.map((count, i) =>
    i === index ? Math.max(0, count - 1) : count))
  }

  const total = counters.reduce((sum, count) => 
  sum + count, 0
);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-8">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Poppins'] mb-4">
        Multi Counter App
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-3xl gap-4">

        {/* counters */}
        {counters.map((count,index) => (
          <div 
            key={index}
            className="text-center bg-gray-800 rounded-xl p-5 mt-6 shadow-md">

            <h2 className="text-xl sm:text-2xl font-bold">
              Counter {index + 1}
            </h2>

            <h2 className="text-purple-500 text-3xl sm:text-4xl font-bold py-4">
            {count}
            </h2>

            <button className="bg-gray-600 rounded-2xl px-3 py-1 mx-3 cursor-pointer"
            onClick={() => decrease(index)}>
              -
            </button>

            <button className="bg-purple-500 rounded-2xl px-3 py-1 mx-3 cursor-pointer"
            onClick={() => increase(index)}>
            +
            </button>

          </div>
          ))}

      </div>

          {/* Total */}
       <div className="w-full max-w-xl bg-gray-800 rounded-xl text-center py-3 mt-5 shadow-md">

        <h2 className="text-xl sm:text-2xl font-bold">
          Total:  
          <span className="text-purple-500 text-2xl font-bold mx-2">
             {total}
          </span>
        </h2>

      </div>      

      <button className="inline-flex gap-2 items-center justify-center bg-purple-500 rounded-2xl px-6 py-3 mt-2 cursor-pointer"
      onClick={() => setCounters([0, 0, 0])}>
        <RefreshCw size={18}/>
        Reset All
      </button>

    </div>
  )
}
