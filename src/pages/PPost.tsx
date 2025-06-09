import PostA from '@local/pages/PPost/PostA';
import PostB from '@local/pages/PPost/PostB';
import PostC from '@local/pages/PPost/PostC';
import PostC1 from '@local/pages/PPost/PostC1';
import PostD from '@local/pages/PPost/PostD';
import PostDiv from '@local/pages/PPost/PostDiv';
import PostE from '@local/pages/PPost/PostE';
import PostF from '@local/pages/PPost/PostF';
import PostG from '@local/pages/PPost/PostG';
import * as React from 'react';
/**
 * Post mock
 * @constructor
 */
function PPost() {
  return (
    <main className="flex flex-col justify-center width-[100%]">
      <div className="mt-[25vh]">
        <PostA />
      </div>
      <div className="">
        <PostDiv />
      </div>
      <div className="">
        <PostB />
      </div>
      <div className="">
        <PostDiv />
      </div>
      <div className="">
        <PostC />
      </div>
      <div className="">
        <PostDiv />
      </div>
      <div className="">
        <PostC1 />
      </div>
      <div className="">
        <PostDiv />
      </div>
      <div className="">
        <PostD />
      </div>
      <div className="">
        <PostDiv />
      </div>
      <div className="">
        <PostE />
      </div>
      <div className="">
        <PostDiv />
      </div>
      <div className="">
        <PostF />
      </div>
      <div className="">
        <PostDiv />
      </div>
      <div className="mb-[25vh]">
        <PostG />
      </div>
    </main>
  );
}

export default PPost;
