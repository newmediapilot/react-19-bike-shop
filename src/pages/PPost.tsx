import * as React from 'react';
import PostA from '@local/pages/PPost/PostA';
import PostB from '@local/pages/PPost/PostB';
import PostC from '@local/pages/PPost/PostC';
import PostDiv from '@local/pages/PPost/PostDiv';
import PostD from '@local/pages/PPost/PostD';
import PostE from '@local/pages/PPost/PostE';
import PostF from '@local/pages/PPost/PostF';
import PostG from '@local/pages/PPost/PostG';
/**
 * Post mock
 * @constructor
 */
function PPost(){
  return (
    <main className="flex flex-col justify-center width-[100%]">
        <div className="opacity-33 mt-[20vh]">
            <PostA/>
        </div>
        <div  className="opacity-70">
            <PostDiv/>
        </div>
        <div className="opacity-80">
            <PostB/>
        </div>
        <div  className="opacity-90">
            <PostDiv/>
        </div>
        <div  className="opacity-100">
            <PostC/>
        </div>
        <div  className="opacity-90">
            <PostDiv/>
        </div>
        <div  className="opacity-100">
            <PostD/>
        </div>
        <div  className="opacity-90">
            <PostDiv/>
        </div>
        <div  className="opacity-100">
            <PostE/>
        </div>
        <div  className="opacity-90">
            <PostDiv/>
        </div>
        <div  className="opacity-90">
            <PostF/>
        </div>
        <div  className="opacity-90">
            <PostDiv/>
        </div>
        <div  className="opacity-90 mb-[50vh]">
            <PostG/>
        </div>
    </main>
  );
}

export default PPost;
