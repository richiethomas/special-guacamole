import React, { useEffect } from 'react';
import { RichieApplication  } from './index';

const Foo = ({ name, email }) => {
  useEffect(() => {
    RichieApplication.vent.on('foobar', () => alert('Hello world'))

    return () => {
      RichieApplication.vent.unbind('foobar')
    }
  })

  return (
    <>
      <h1>{name}</h1>
      <p>{email}</p>
    </>
  )
}

export default Foo;