/* eslint-disable react/prop-types */
import { SingleItem } from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

export const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  // biome-ignore lint/style/useNumberNamespace: <explanation>
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
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
