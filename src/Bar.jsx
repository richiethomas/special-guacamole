import React from 'react';
import { RichieApplication  } from './index';

const Bar = () => {
  const onClick = () => {
    RichieApplication.vent.trigger('foobar');
  }

  return (
    <>
      <button onClick={onClick}>Say Hello</button>
    </>
  )
}

export default Bar;