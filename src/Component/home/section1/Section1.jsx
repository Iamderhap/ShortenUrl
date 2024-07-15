import { useState } from "react";
import "./Section1.css";

function Section1() {
  const [input, setInput] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const [isClick, setIsClick] = useState(false)

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const fetchAPI = async (e) => {
    e.preventDefault();
    const baseurl = "https://shorturl-ovln.onrender.com/api/v1/shorturl";
    if(!input){
      return alert("URL is required!!")
    }
    try {
      setIsClick(true)
      const response = await fetch(baseurl, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ url: input }),
      });
      const data = await response.json();
      setShortUrl(data.shorturl);
      console.log(data.shorturl);
      if(data){
        setIsClick(false)
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
      setIsClick(false)
    }
  };

  return (
    <>
      <div className="main-section1">
        <div className="container-section1">
          <form className="form" onSubmit={fetchAPI}>
            <input
              className="inp"
              type="text"
              value={input}
              name="url"
              onChange={handleInput}
              placeholder="Shorten a link here..."
            />
            <button className="btn3" type="submit">{isClick ? "pls wait .." : "Shorten it!"}</button>
          </form>
        </div>
      </div>
      <div className="url">
      {shortUrl && <h1> <a href={shortUrl} target="_blank">{shortUrl}</a></h1>}
      </div>
    </>
  );
}

export default Section1;
