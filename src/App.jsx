import { Suspense } from "react";
import Countries from "../components/Countries/Countries";
import "./App.css";



const countriesPromise=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())

function App() {
  return (
    <>
      <Suspense fallback={<p>Traveling coming soon........</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
        
      </Suspense>
    </>
  );
}

export default App;
