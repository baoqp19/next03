"use client";

import React, { useState } from "react";

const PostsProvider = ({children}) => {    // nếu gọi <Posts /> lỗi, phải gọi thông qua Props
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>HomePage</h1>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && children}
    </div>
  );
};

export default PostsProvider;
