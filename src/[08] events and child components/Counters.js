import React from "react";

import Counter from "./Counter";

const Counters = props => (
  <div>
    {props.counters.map(counter => (
      <Counter
        key={counter.id}
        counter={counter}
        incrementCounter={props.incrementCounter}
        decrementCounter={props.decrementCounter}
      />
    ))}
  </div>
);

export default Counters;
