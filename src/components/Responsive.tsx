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