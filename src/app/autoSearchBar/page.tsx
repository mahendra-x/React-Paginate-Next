"use client";
import { useCallback, useEffect, useState } from "react";
import "./styles.css";
import { redirect } from "next/navigation";

interface Recipe {
  id: number;
  name: string;
}

export default function AutoSearchBar() {
  const [input, setInput] = useState<string>("");
  const [results, setResults] = useState<Recipe[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [cache, setCache] = useState<Record<string, Recipe[]>>({});

  const fetchData = useCallback(async () => {
    if (cache[input]) {
      console.log("CACHE RETURNED VALUE", input);
      setResults(cache[input]);
      return;
    }

    try {
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
      const data = await response.json();
      
      if (data.recipes) {
        setResults(data.recipes);
        setCache((prev) => ({
          ...prev,
          [input]: data.recipes,
        }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [cache, input]);

  useEffect(() => {
    const timer = setTimeout(fetchData, 500);
    return () => clearTimeout(timer);
  }, [input, fetchData]);

  const backToHomeHandler = () => {
    redirect("/");
  };

  return (
    <>
      <button onClick={backToHomeHandler} className="text-2xl p-5 text-left">
        ⬅️ back to home page
      </button>
      <div className="App flex justify-center align-middle">
        <h1 className="font-bold text-2xl">AutoComplete Search Bar</h1>
        <div>
          <input
            type="text"
            className="search-input border border-cyan-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
            placeholder="Click here for Search"
          />

          {showResults && (
            <div className="result-container">
              {results.map((item: Recipe) => (
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
