import ResultCard from "components/ResultCard";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

type FormData = {
  cep: string;
  test: string;
};

type Address = {
  logradouro: string;
  localidade: string;
};

const HubSearch = () => {
  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    cep: "",
    test: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
 
  
    
    <div className="main-contaner">
      <Link to ="/"><h1>home</h1></Link>
      <h1 className="text-primary">Busca Git</h1>
      <div className="hub-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="CEP (somente números)"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>
        {address && (
          <>
            <ResultCard title="Logradouro" description={address.logradouro} />
            <ResultCard title="Localidade" description={address.localidade} />
          </>
        )}
      </div>
    </div>
  );
};
export default HubSearch;
