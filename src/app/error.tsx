"use client" 

import { ErrorProps } from "@/types/types";
import { FC } from "react";


const Error: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
