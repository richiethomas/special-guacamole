import React from 'react';
import Backbone from 'backbone'
import * as Marionette from 'backbone.marionette'

const Bar = () => {
  // const vent = application.vent;
  // console.log("Backbone:", Backbone);
  console.log("Marionette:", Marionette)
  const application = new Marionette.Application();
  console.log("application:", application)

  return (
    <>
      <button onClick={() => alert('Hello world')}>Say Hello</button>
    </>
  )
}

export default Bar;