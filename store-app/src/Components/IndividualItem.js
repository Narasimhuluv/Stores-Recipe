import React from "react";
import { withRouter } from "react-router-dom";

function IndividualItem(props) {
  var { stores } = props;
  var storeId = props.match.params.storeId;
  var itemId = props.match.params.itemId;
  var eachItem = [];
  stores.map((each) => {
    if (each.storeId === storeId) {
      each.recipes.map((one) => {
        if (one.item.itemId === itemId) {
          return eachItem.push(one.item);
        }
      });
    }
  });

  return (
    <>
      <div className="container">
        {eachItem.map((each) => (
          <div className="">
            <article className="each_article_indiItem">
              <img className="width_full" src={each.itemimage} alt="" />
              <div className="flex">
                <div>
                  <h2>Item Details : </h2>
                  <h3>➜ Item Name : {each.itemname}</h3>
                  <h4>➜ item Price : {each.itemprice} </h4>
                  <h4>➜ item Type : {each.type}</h4>
                  <h4>➜ Item Price : {each.price}</h4>
                </div>
                <div className="each_article_indiItem each_article_indiItem-1">
                  <h2>Item Ingredients</h2>
                  {each.ingredients.map((one) => (
                    <h5>➜ {one}</h5>
                  ))}
                </div>
              </div>

              <div>
                <p>➜ price Rs.{each.price}</p>
                <p>➜ discount Rs.{each.discount}</p>
                <p>➜ Total : {each.price - each.discount}</p>
              </div>
              <button>Buy Now</button>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}

export default withRouter(IndividualItem);
