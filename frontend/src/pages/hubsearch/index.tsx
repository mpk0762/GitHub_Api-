import axios from "axios";
import ResultCard from "components/resultcard";
import React from "react";
import { useState } from "react";

import "./styles.css";

type FormData = {
  users: string;
};

type ApiGitHub = {
  name: string;
  followers: string;
  location: string;
  url: string;
  avatar_url: string;
};

const HubSearch = () => {
  const [apigithub, setapigithub] = useState<ApiGitHub>();

  const [formData, setFormData] = useState<FormData>({
    users: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);

    axios

      .get(`https://api.github.com/users/${formData.users}`)
      .then((response) => {
        setapigithub(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setapigithub(undefined);
      });
  };

  return (
    <div className="main-contaner">
      <h1 className="text-primary">Buscar Git</h1>
      <div className="hub-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="users"
              value={formData.users}
              className="search-input"
              placeholder="(somente números)"
              onChange={handleChange}
            />
            <button type="submit" className=" search-button">
              Buscar
            </button>
          </div>
        </form>
        <div className="api-github text-center">
          {apigithub && (
            <>
              <div className="in-container">
                <img
                  className="img-avatar"
                  src={apigithub.avatar_url}
                  alt="avatar do usuário"
                />

                <div className="resposta-api">
                  <h3 className="h3-card">Informaçoes</h3>
                  <ResultCard title="Perfil: " description={apigithub.url} />
                  <ResultCard
                    title="Seguidores: "
                    description={apigithub.followers}
                  />
                  <ResultCard
                    title="Localidade: "
                    description={apigithub.location}
                  />
                  <ResultCard title="Name: " description={apigithub.name} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default HubSearch;
