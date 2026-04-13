import { useState, useEffect } from "react";

export default function HandleAPIData() {
  const [quotes, setQuotes] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomQuote, setRandomQuote] = useState({});

  const getQuotes = async (controller) => {
    const signal = controller.signal;
    try {
      const res = await fetch("https://dummyjson.com/quotes", { signal });
      const data = await res.json();
      setQuotes(data["quotes"]);
    } catch (err) {
      if (err.name === "AbortError") {
        setErrors(prev => ([...prev, "***the fetch request was aborted!"]));
      } else {
        setErrors((prev) => ([...prev, err.message]));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getQuotes(controller);

    return () => {
      controller.abort();
    }
  }, []);

  const getARandomQuote = () => {
    const randNum = Math.floor(Math.random() * quotes.length) + 1;
    return quotes[randNum];
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRandomQuote(getARandomQuote());
    }, 2000);

    return () => {
      clearInterval(timer);
    }
  }, [randomQuote])

  if (loading) {
    return <div className="">
      <h2 className="">Loading...</h2>
    </div>
  }

  if (errors.length > 0) {
    return <div className="">
      <h3 className="">we have the following errors :</h3>
      <ul className="">
        {
          errors.map((err, index) => {
            return <li className="" key={index}>{err}</li>
          })
        }
      </ul>
    </div>
  }

  return <div className="">
    <h2 className="">"{randomQuote["quote"]}"</h2>
    <h5 className="">{randomQuote["author"]}</h5>
  </div>
}