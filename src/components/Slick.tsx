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