import React from "react";

const TreeStructure = () => (
  <div className="tree">
    Components:
    <ul>
      <li>
        App
        <ul>
          <li>Header</li>
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
          <li>TreeStructure</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default TreeStructure;
