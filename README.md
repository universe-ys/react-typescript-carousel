`npx create-react-app carousel --template typescript` 

`npm i react-reponsive-carousel react-slick @types/react-slick antd`

# React-responsive-carousel

[https://www.npmjs.com/package/react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel)

```tsx
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Responsive = () => {
  return (
    <Carousel infiniteLoop>
      <div style={{
        height: 300,
        background: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>hello1</div>
      <div style={{
        height: 300,
        background: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>hello2</div>
      <div style={{
        height: 300,
        background: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>hello3</div>
    </Carousel>
  );
}

export default Responsive;
```

# React-slick

https://github.com/akiran/react-slick

`npm install slick-carousel`

```tsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slick = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <h3 style={{ 
          height: 300, 
          background: "blue", 
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>1</h3>
      </div>
      <div>
        <h3 style={{ 
          height: 300, 
          background: "purple", 
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>2</h3>
      </div>
      <div>
        <h3 style={{ 
          height: 300, 
          background: "pink", 
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>3</h3>
      </div>
      <div>
        <h3 style={{ 
          height: 300, 
          background: "orange", 
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>4</h3>
      </div>
      <div>
        <h3 style={{ 
          height: 300, 
          background: "brown", 
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>5</h3>
      </div>
      <div>
        <h3 style={{ 
          height: 300, 
          background: "black", 
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>6</h3>
      </div>
    </Slider>
  );
}

export default Slick;
```

# Ant.design

[https://ant.design/](https://ant.design/)

```tsx
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const Antd = () => {
  return (
    <Carousel style={{ width: 500 }}>
      <div>
        <div style={{
          height: '160px',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'center',
          background: '#364d79',
        }} >1</div>
      </div>
      <div>
        <div style={{
          height: '160px',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'center',
          background: '#364d79',
        }}>2</div>
      </div>
      <div>
        <div style={{
          height: '160px',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'center',
          background: '#364d79',
        }}>3</div>
      </div>
    </Carousel>
  );
}

export default Antd;
```

# css in js 로 캐러셀 만들기
