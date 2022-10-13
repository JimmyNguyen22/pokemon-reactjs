import React from "react";

export const PokeInfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1 style={{ textTransform: "uppercase", letterSpacing: "1px" }}>
            {data.name}
          </h1>
          <img className="infoImg" src="" alt="..." />
          <div className="abilities">
            <div className="group">
              <h2>blaze</h2>
            </div>
            <div className="group">
              <h2>solar-power</h2>
            </div>
          </div>
          <div className="base-stat">
            <h3>Hp:</h3>
            <h3>Attack:</h3>
            <h3>Defense:</h3>
            <h3>Special-attack:</h3>
            <h3>Speed:</h3>
          </div>
        </>
      )}
    </>
  );
};
