import { React } from 'react';

// function Greet() {
//   return <h1>Hello samuel</h1>;
// }

export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      <p>{props.children}</p>
    </div>
  );
};

// export default Greet;
