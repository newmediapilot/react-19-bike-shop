import CProgressBar from '@local/components/core/CProgressBar';
import * as React from 'react';
import { NavLink } from 'react-router';

/**
 * Components gallery, renders passed in components
 * into a storybook like list
 * @constructor
 */
function PComponents() {
  return (
    <main className="p-4">
      <NavLink to="/">Return Home</NavLink>
      <h4>Progress:</h4>
      <CProgressBar />
    </main>
  );
}

export default PComponents;
