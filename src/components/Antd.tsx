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
        }}>
          <img src="https://gw.alipayobjects.com/zos/basement_prod/80e7d303-aa05-4c2d-94e9-2255ab5cea6c.svg" alt="" />
        </div>
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