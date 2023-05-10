import { useEffect, useState } from "react";
import { BeakerIcon } from "@heroicons/react/24/outline";

console.log("[App.tsx]");

function App() {
  const [count, setCount] = useState(0);

  const [summoner, setSummoner] = useState(null);

  useEffect(() => {
    window.electron.ipcRenderer
      .invoke("getLocalSummoner")
      .then((s) => setSummoner(s));
  }, []);

  return (
    <>
      {/* <div className="App">{JSON.stringify(summoner) ?? "loading"}</div> */}
    </>
  );
}

export default App;
