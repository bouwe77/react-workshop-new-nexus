import React from "react";

import Counter from "./Counter";

const Counters = props => (
  <table border="1" width="400">
    {props.counters.map(counter => (
      <tr>
        <td>
          <Counter
            key={counter.id}
            counter={counter}
            incrementCounter={props.incrementCounter}
            decrementCounter={props.decrementCounter}
          />
        </td>
      </tr>
    ))}
  </table>
);

export default Counters;
