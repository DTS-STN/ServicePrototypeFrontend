import React from "react";
import PropTypes from "prop-types";

/**
 * Box for benefit card which contains the benefit card items
 */
export function TableComponent(props) {
  return (
    <div className="grid grid-cols-2 mb-4">
      <div className="border-t py-2 ">
        <p className="pt-6">{props.title1}</p>
      </div>
      <div className="border-t py-2 bg-blue-100 bg-opacity-75">
        <h3 className="font-semibold">{props.title}</h3>
        <p>{props.value1}</p>
      </div>
      <div className="border-t py-2">{props.title2}</div>
      <div className="border-t py-2 bg-blue-100 bg-opacity-75">
        {props.value2}
      </div>
      <div className="border-t border-b py-2">{props.title3}</div>
      <div className="border-t border-b py-2 bg-blue-100 bg-opacity-75">
        {" "}
        {props.value3}
      </div>
    </div>
  );
}

TableComponent.propTypes = {
  //Title in the column
  title: PropTypes.string,
  // data for each column
  title1: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  value1: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  title2: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  value2: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  title3: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  value3: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
