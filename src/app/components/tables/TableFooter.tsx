import * as React from "react";

export interface Props {}

export default function TableFooter() {
  return (
    <div className="d-flex flex-stack flex-wrap pt-6 mb-5">
      <div className="bg-light justify-content-center align-items-center text-gray-500 p-2 rounded-2">
        Total Result: 455
      </div>
      <ul className="pagination">
        <li className="page-item previous">
          <a href="#" className="page-link">
            <i className="previous"></i>
          </a>
        </li>

        <li className="page-item active">
          <a href="#" className="page-link">
            1
          </a>
        </li>

        <li className="page-item">
          <a href="#" className="page-link">
            2
          </a>
        </li>

        <li className="page-item">
          <a href="#" className="page-link">
            3
          </a>
        </li>

        <li className="page-item">
          <a href="#" className="page-link">
            4
          </a>
        </li>

        <li className="page-item">
          <a href="#" className="page-link">
            5
          </a>
        </li>

        <li className="page-item">
          <a href="#" className="page-link">
            6
          </a>
        </li>

        <li className="page-item next">
          <a href="#" className="page-link">
            <i className="next"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
