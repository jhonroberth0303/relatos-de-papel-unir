import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css"

const images = [
    "/carousel/library-theme-slide3.png",
    "/carousel/library-theme-slide4.png",
    "/carousel/library-theme-slide5.png",
];

function CarouselLibrary() {
    return (
        <div className="box">
            <Carousel useKeyboardArrows={true}>
                {images.map((URL, index) => (
                    <div className="slide" key={index}>
                        <img alt="sample_file" src={URL} key={index} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselLibrary;