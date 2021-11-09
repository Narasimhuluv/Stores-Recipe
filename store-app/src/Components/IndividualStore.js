import React from "react";
import data from "../data.json";
import { withRouter, NavLink } from "react-router-dom";
import IndividualItem from "./IndividualItem";

function IndividualStore(props) {
  var storeId = props.match.params.storeId;
  var { stores, click, clickOpen, clickClose } = props;
  var allRecipes = [];
  stores.map((each) => {
    if (each.storeId === storeId) {
      return allRecipes.push(each);
    }
  });

  return (
    <>
      <div className="container flex flex_wrap justify_between eachstore">
        {allRecipes.map((each) => (
          <>
            <figure className="each_article">
              <img src={each.storeimage} alt="" />
            </figure>

            <div className="flex flex_wrap justify_between">
              {each.recipes.map((one) => (
                <>
                  <article className="items_article flex_30 ">
                    <img
                      className="width_full"
                      src={one.item.itemimage}
                      alt=""
                    />
                    <h3>Item Name : {one.item.itemname}</h3>
                    <h4>item Price : {one.item.itemprice} </h4>
                    <h5>item Type : {one.item.type}</h5>
                    <h5>Item Price : {one.item.price}</h5>
                    <NavLink to={`/${each.storeId}/${one.item.itemId}`}>
                      <p>Ingredients & Total ➜</p>
                    </NavLink>
                  </article>
                </>
              ))}
            </div>
          </>
        ))}
      </div>
      <div></div>
    </>
  );
}

export default withRouter(IndividualStore);
