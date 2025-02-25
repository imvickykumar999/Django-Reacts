import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("https://django-reacts-api.vercel.app/api/hello/") 
        .then(response => setMessage(response.data.message))
        .catch(error => console.error("Error fetching data:", error));
      }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>{message || "Loading..."}</h1>
        </div>
    );
}

export default App;
