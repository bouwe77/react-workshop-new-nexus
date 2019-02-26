import React from "react";

const App = () => {
  var picture = {
    src:
      "https://4.bp.blogspot.com/-TS0SOi5WW7w/WURNH1HGU9I/AAAAAAABC0M/TN6gqC_er-kd55FAzntOvh2WGB8-pB6hACLcBGAs/s1600/Star-Trek-Menage-a-Troi-Captain-Picard-Patrick-Stewart-600x402.jpg",
    title: "Picard"
  };

  return (
    <div>
      <Picture src={picture.src}>
        <div>{picture.title}</div>
      </Picture>
      <Picture src={picture.src}>
        <div>
          <a href="https://startrek.com">{picture.title}</a>
        </div>
      </Picture>
      <Picture src={picture.src}>
        <Caption caption={picture.title} />
      </Picture>
    </div>
  );
};

const Picture = props => {
  return (
    <div>
      <img src={props.src} alt="tng" width="200" />
      {props.children}
    </div>
  );
};

const Caption = ({ caption }) => <div>{caption}</div>;

export default App;
