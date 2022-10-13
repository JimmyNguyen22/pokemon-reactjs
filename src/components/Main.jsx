import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { PokeInfo } from "./PokeInfo";

export const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setprevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    getPokemon(res.data.previous);
    setprevUrl(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);

      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          ></Card>

          <div className="btn-group">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
        <div className="right-content">
          <PokeInfo data={pokeDex}></PokeInfo>
        </div>
      </div>
    </>
  );
};
