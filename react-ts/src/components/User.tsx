// interface UserShape {
//   name: string;
//   age: number;
//   isStudent: boolean;

import { FC } from "react";

// }
type UserShape = {
  name: string;
  age: number;
  isStudent: boolean;
};
const User: FC<UserShape> = ({ name, age, isStudent }) => {
  return (
    <div>
      <h1>User:</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{isStudent}</h2>
    </div>
  );
};

export default User;
