import React from "react";

const TreeStructure = () => (
  <ul>
    <li>
      App
      <ul>
        <li>Header</li>
        <li>TreeStructure</li>
        <li>
          CounterContainer
          <ul>
            <li>
              Counters
              <ul>
                <li>Counter</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
);

export default TreeStructure;
