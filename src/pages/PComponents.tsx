import * as React from 'react';
import { NavLink } from 'react-router';

/**
 * Components gallery, renders passed in components
 * into a storybook like list
 * @constructor
 */
function PComponents({ components }: { components: Array<any> }) {
  return (
    <main className="p-4">
      {components ? (
        components.map(() => {
          return <p>hello</p>;
        })
      ) : (
        <NavLink to="/">Return Home</NavLink>
      )}
    </main>
  );
}

export default PComponents;
