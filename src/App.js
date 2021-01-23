import github from "./db.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const githubQuery = {
      query: `
      {
        viewer {
          name
        }
      }
    `,
    };

    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(githubQuery),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill"></i> Repos
      </h1>
    </div>
  );
}

export default App;
