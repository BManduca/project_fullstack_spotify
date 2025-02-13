/* eslint-disable react/prop-types */
import { SingleItem } from "./SingleItem";
import { Link } from "react-router-dom";

export const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <Link to={path} className="item-list__link">
          Mostrar tudo
        </Link>
      </div>

      <div className="item-list__container">
        {/* 
            
        */}
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currentObject, index) => (
            <SingleItem
              key={`${title}-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }`}
              idPath={idPath}
              {...currentObject}
            />
          ))}
      </div>
    </div>
  );
};
