import * as React from 'react';

/**
 * Components gallery, renders passed in components
 * into a storybook like list
 * @constructor
 */
function Components({components}:{components:Array<any>}) {

  return <>
      {components && components.map(()=>{
          return <p>hello</p>
      })}
  </>;
}

export default Components;
