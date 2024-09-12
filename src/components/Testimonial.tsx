import React, { useRef } from "react";
import { Carousel, Button, Typography, Layout, Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // Import Ant Design styles


import imgA from "../assets/gall/A.jpeg";
import imgB from "../assets/gall/B.jpeg";
import imgE from "../assets/gall/E.jpeg";
import imgD from "../assets/gall/D.jpeg";

const { Title } = Typography;
const { Content } = Layout;

const images = [
  { src: imgA, heading: "" },
  { src: imgB, heading: "" },
  { src: imgE, heading: "" },
  { src: imgD, heading: "" },
];

const Testimonial: React.FC = () => {
  const carouselRef = useRef<any>(null);

  const goToPrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (

    <div id="testimonial" className="w-full py-0  border-b-gray-700">
    <Layout>
   
     
        <Content>
       
          <Row justify="center" style={{ marginBottom: "1px" }}></Row>
          <Row justify="center">
            <Col
              span={24}
              style={{
                position: "relative",
                overflow: "hidden",
             
              }}
            >
              <Carousel ref={carouselRef} dots={false} autoplay>
                {images.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    
                    }}
                  >
                    <img
                      src={item.src}
                      alt={`Slide ${index + 1}`}
                      style={{
                        position: "relative",
                        width: "1300px",
                        height: "1200px", // Fixed height for consistency
                        backgroundImage: `url(${item.src})`,
                        backgroundSize: "contain", // This ensures the image covers the entire div
                        backgroundPosition: "center", // Centers the image
                        backgroundRepeat: "no-repeat", // Prevents the image from repeating

                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        textAlign: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: "2px",
                        borderRadius: "1px",
                        color: "#fff",
                      }}
                    >
                      <Title level={3} style={{ color: "#fff", margin: 0 }}>
                        {item.heading}
                      </Title>
                    </div>
                  </div>
                ))}
              </Carousel>
              {/* Navigation Buttons */}
              <Button
                onClick={goToPrevious}
                shape="circle"
                icon={<LeftOutlined />}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "red",
                }}
              />
              <Button
                onClick={goToNext}
                shape="circle"
                icon={<RightOutlined />}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "red",
                }}
              />
            </Col>
          </Row>
        
        </Content>
    
    </Layout>
    </div>
  );
};

export default Testimonial;
