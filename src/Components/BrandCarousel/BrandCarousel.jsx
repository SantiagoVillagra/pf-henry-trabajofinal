import puma from "../../Assets/puma.png";
import nike from "../../Assets/nike.png";
import under from "../../Assets/under.png";
import topper from "../../Assets/topper.png";
import adidas from "../../Assets/adidas.png";
import puma2 from "../../Assets/puma.png";
import nike2 from "../../Assets/nike.png";
import under2 from "../../Assets/under.png";
import topper2 from "../../Assets/topper.png";
import adidas2 from "../../Assets/adidas.png";
import { Carousel } from 'primereact/carousel';

export default function BrandCarousel() {
    const images = [
        {
            itemImageSrc: puma,
            alt: 'puma'
        },
        {
            itemImageSrc: nike,
            alt: 'nike'
        },
        {
            itemImageSrc: adidas,
            alt: 'adidas'
        },
        {
            itemImageSrc: under,
            alt: 'under'
        },
        {
            itemImageSrc: topper,
            alt: 'topper'
        },
        {
            itemImageSrc: puma2,
            alt: 'puma'
        },
        {
            itemImageSrc: nike2,
            alt: 'nike'
        },
        {
            itemImageSrc: adidas2,
            alt: 'adidas'
        },
        {
            itemImageSrc: under2,
            alt: 'under'
        },
        {
            itemImageSrc: topper2,
            alt: 'topper'
        },
    ];

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 4,
            numScroll: 2
        },
        {
            breakpoint: '768px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '560px',
            numVisible: 2,
            numScroll: 1
        }
    ];

    const productTemplate = (item) => {
        return (
            <div className="product-item">
                <img src={item.itemImageSrc} alt={item.alt} />
            </div>
        );
    };

    return (
        <Carousel
            value={images}
            numVisible={5} // Muestra 4 imágenes a la vez
              // Desplaza 2 imágenes a la vez
            responsiveOptions={responsiveOptions}
            className="custom-carousel"
            circular // Hacer que el carrusel sea circular
            autoplayInterval={2000} // Tiempo de cambio automático
            itemTemplate={productTemplate}
        
            showIndicators={false}
            showThumbnails={false}
        />
    );
}