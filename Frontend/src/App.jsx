import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary text-3xl font-bold mb-4">
            Tailwind + daisyUI
          </h2>
          <p className="mb-4 text-base-content/80">
            If you see these styles nicely formatted, then Tailwind CSS and
            daisyUI are working correctly!
          </p>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
            <button className="btn btn-secondary">Secondary</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
