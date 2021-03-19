import React from "react";
import logo from "../img/checkbox-logo.svg";

const Heading = ({count, todos, handleDeleteCompleted}) => {
  return (
      <>
        <div className="heading">
          <h1>
            {count ? count : ""} {count > 1 || count === 0 ? "todos" : "todo"}
          </h1>
          <img src={logo} id="logo" alt="A tick within a square"/>
        </div>
        <div className="delete-completed">
          <button
              className="delete-completed-btn"
              disabled={count === todos.length}
              onClick={handleDeleteCompleted}
          >
            <svg
                className="delete-completed-svg"
                role="button"
                viewBox="0 0 400 400"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              {/*<title>Delete button</title>*/}
              <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
              >
                <g id="Delete-button">
                  <circle id="Oval" fill="#ff0000" cx="200" cy="200" r="200"/>
                  <g
                      id="X"
                      transform="translate(78.000000, 78.000000)"
                      fill="#FFFFFF"
                  >
                    <rect
                        id="Rectangle"
                        transform="translate(122.000000, 122.000000) rotate(45.000000) translate(-122.000000, -122.000000) "
                        x="96"
                        y="-24"
                        width="52"
                        height="292"
                    />
                    <rect
                        id="Rectangle"
                        transform="translate(122.000000, 122.000000) rotate(315.000000) translate(-122.000000, -122.000000) "
                        x="96"
                        y="-24"
                        width="52"
                        height="292"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <h2>
            {todos.length === 0
                ? "Nothing to remove"
                : todos.length > 0 && count === todos.length
                    ? "No completed todos"
                    : "Remove completed todos"}
          </h2>
        </div>
      </>
  );
};

export default Heading;
