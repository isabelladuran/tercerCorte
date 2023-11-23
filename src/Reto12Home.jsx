import React from "react";
import { useUser } from "./Reto12UC";

const HomePage = () => {
  const { user } = useUser();

  return (
    <>
      <div>Welcome, {user.name}!</div>
    </>
  );
};

export default HomePage;