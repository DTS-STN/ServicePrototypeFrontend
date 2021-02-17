import React from "react";
import PropTypes from "prop-types";

/**
 * Box for benefit card which contains the benefit card items
 */
export function TableComponent(props) {
  return (
    <div className="grid grid-cols-2 mb-4">
      <div className="border-t py-2 ">
        <p className="pt-2">{props.children1}</p>
      </div>
      <div className="border-t py-2 bg-blue-100 bg-opacity-75">
        <h3 className="font-semibold">{props.title}</h3>
        <p>{props.children2}</p>
      </div>
      <div className="border-t py-2">{props.children3}</div>
      <div className="border-t py-2 bg-blue-100 bg-opacity-75">
        {props.children4}
      </div>
      <div className="border-t border-b py-2">{props.children5}</div>
      <div className="border-t border-b py-2 bg-blue-100 bg-opacity-75">
        {" "}
        {props.children6}
      </div>
    </div>
  );
}

TableComponent.propTypes = {
  //Title in the column
  title: PropTypes.string,
  // data for each column
  children1: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  children2: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  children3: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  children4: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  children5: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  children6: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
