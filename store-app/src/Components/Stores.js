import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../data.json";

function Stores() {
  var storeData = data.stores.map((each) => {
    console.log(each);
    return each;
  });
  return (
    <>
      <div className="container flex justify_between flex_wrap stores">
        {storeData.map((each) => (
          <>
            <article className="flex_30">
              <img className="width_full" src={each.storeimage} alt="" />
              <h2>{each.storename}</h2>
              <NavLink to={`/${each.storeId}`}>
                <p>Go To Store ➡ </p>
              </NavLink>
            </article>
          </>
        ))}
      </div>
    </>
  );
}

export default Stores;
