import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [vokal, setVokal] = useState([]);
  const [message, setMessage] = useState("");

  const handleChangeInput = (e) => {
    if (textOnly(e.target.value)) {
      setName(e.target.value);
      setMessage("");
    } else {
      setMessage("Nama tidak boleh mengandung angka dan spesial karakter");
    }
  };

  const textVokal = (str) => {
    return str.toUpperCase().match(/[aeiou]/gi);
  };

  const textOnly = (str) => {
    return str.match(/^[a-zA-Z ]*$/);
  };

  useEffect(() => {
    setVokal(textVokal(name));
  }, [name]);

  return (
    <div>
      Masukkan namamu: <input type="text" onChange={handleChangeInput} />
      <h1>
        Halo {name}, namamu mengandung vokal {vokal}
      </h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
