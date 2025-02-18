"use client";
import { useCallback, useEffect, useState } from "react";
import "./styles.css";
import { redirect } from "next/navigation";

export default function AutoSearchBar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showresults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = useCallback(async () => {
    if (cache[input]) {
      console.log("CACHE RETURED VALUE", input);
      setResults(cache[input]);
      return;
    }
    // console.log("API CALL", input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const results = await data.json();
    // console.log("first", results);
    setResults(results.recipes);
    setCache((prev) => ({
      ...prev,
      [input]: results.recipes,
    }));
  },[cache,input])

  useEffect(() => {
    // if (input) {
    //   console.log("input", input);
    // }
    const timer = setTimeout(fetchData, 500);
    // fetchData();
    return () => {
      clearTimeout(timer);
    };
  }, [input,fetchData]);

  const backToHomeHandler = () => {
    redirect("/");
  };

  //   console.log("cache", cache);
  return (
    <>
      <button onClick={backToHomeHandler} className="text-2xl p-5 text-left">
        ⬅️ back to home page
      </button>
      <div className="App flex justify-center align-middle">
        <h1 className="font-bold text-2xl">AutoComplete Search Bar</h1>
        <div>
          <input
            type={"text"}
            className="search-input border border-cyan-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
            placeholder="Click here for Search"
          />

          {showresults && (
            <div className="result-container">
              {results.map((item, index) => (
                <span key={item.id} className="result">
                  {item.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
