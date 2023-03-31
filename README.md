# Getting Started with Api-Grabber

for fetching (grabbing) data from an Api in react app

## Installation
npm i api-grabber

## Usage

import { GrabberRequest } from "api-grabber";
import { IRequest } from "api-grabber/dist/components";
import { useState } from "react";
import { Button } from "react-bootstrap";

export const MyComponent = () => {
  const onGetData = () => {};
  const onError = () => {};

  const onLoading = () => {};

  const [request, setRequest] = useState<IRequest>({
    onGetData,
    onError,
    onLoading,
    path: "http://localhost:3000/user",
    method :'GET'
  });

  const getPosts = ()=>{
    setRequest({
        ...request,
        path: "http://localhost:3000/posts",
  
    })
  }

  return (
    <div>
        <Button onClick={getPosts}></Button>
      <GrabberRequest {...request} />
    </div>
  );
};


