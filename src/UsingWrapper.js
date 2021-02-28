import React from "react";
import Wrapped from "./Wrapped";
import useWrapper from "./hooks/useWrapper";

export default () => {
  const { renderWithWrapper } = useWrapper();

  return (
    <React.Fragment>
      {renderWithWrapper(<Wrapped />, {
        tag: "h1",
        attributes: {
          className: "my-wrapper-h1",
          id: "my-wrapper-h1",
          "data-name": "Wrapz-h1"
        }
      })}
      {renderWithWrapper(<Wrapped />, {
        tag: "div",
        attributes: {
          className: "my-wrapper-div",
          id: "my-wrapper-div",
          "data-name": "Wrapz-div"
        }
      })}
    </React.Fragment>
  );
};
