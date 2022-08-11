import React from 'react';
import Carousel from './components/Carousel';
// import Antd from './components/Antd';
// import Responsive from './components/Responsive';
// import Slick from './components/Slick';

function App() {
  return (
    <div>

      <Carousel loop autoLoop autoTime={1000} transitionTime={500} direction="column">
        <h1>hello</h1>
        <h1>world</h1>
        <h1>React</h1>
        <h1>Carousel</h1>
      </Carousel>

      {/* <div>
        Antd
      </div>
      <Antd />
      <div>
        Responsive
      </div>
      <Responsive />
      <div>
        Slick
      </div>
      <Slick /> */}
    </div>
  );
}

export default App;
