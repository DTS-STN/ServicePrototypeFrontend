import React from "react";
import PropTypes from "prop-types";

/**
 * Box for benefit card which contains the benefit card items
 */
export function TableComponent(props) {
  return (
    <div>
      <div className="grid grid-cols-2 mb-4">
        <div className="py-2"></div>
        <div>
          <div className="flex justify-between">
            <h3 className="font-semibold">{props.title}</h3>
          </div>
        </div>

        <div className="border-t py-2 ">
          <p className="pt-6">{props.title1}</p>
        </div>

        <div className="border-t py-2 bg-blue-100 bg-opacity-75 ">
          <div className="flex justify-between">
            <p className="order-1">{props.valueTitle1}</p>
            <p className="order-last pr-8">
              {parseFloat(props.value1).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="order-1">{props.valueTitle2}</p>
            <p className="order-last pr-8">
              {parseFloat(props.value2).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="order-1">{props.valueTitle3}</p>
            <p className="order-last pr-8">
              {parseFloat(props.value3).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="border-t py-2">{props.title2}</div>

        <div className="border-t py-2 bg-blue-100 bg-opacity-75">
          <div className="flex justify-between">
            <p className="order-1">{props.valueTitle1}</p>
            <p className="order-last pr-8">
              {parseFloat(props.value4).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="order-1">{props.valueTitle2}</p>
            <p className="order-last pr-8">
              {parseFloat(props.value5).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="order-1">{props.valueTitle3}</p>
            <p className="order-last pr-8">
              {parseFloat(props.value6).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="border-t border-b py-2">{props.title3}</div>

        <div className="border-t border-b py-2 bg-blue-100 bg-opacity-75">
          <div className="flex justify-between">
            <p className="order-1">{props.valueTitle1}</p>
            <p className="order-last pr-8">
              {" "}
              {parseFloat(props.value7).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="order-1">{props.valueTitle2}</p>
            <p className="order-last pr-8">
              {" "}
              {parseFloat(props.value8).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="order-1">{props.valueTitle3}</p>
            <p className="order-last pr-8">
              {" "}
              {parseFloat(props.value9).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

TableComponent.propTypes = {
  //Title for the Table
  title: PropTypes.string,

  //Title for each value
  valueTitle1: PropTypes.string,
  valueTitle2: PropTypes.string,
  valueTitle3: PropTypes.string,

  //title for categorie of value
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,

  // data for each column
  value1: PropTypes.oneOfType([
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
  value4: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  value5: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  value6: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  value7: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  value8: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  value9: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
