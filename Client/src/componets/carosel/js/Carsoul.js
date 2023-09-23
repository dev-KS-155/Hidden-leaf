import React, { useEffect } from 'react';
import EmblaCarousel from 'embla-carousel';
import { addDotBtnsAndClickHandlers } from './Dot-buttons';
import Autoplay from 'embla-carousel-autoplay';
import '../css/base.css';
import '../css/main.css';
import '../css/embla.css';
import Image from 'next/image'

const OPTIONS = { loop: true };

function Carousel() {
  useEffect(() => {
    const emblaNode = document.querySelector('.embla');
    const viewportNode = emblaNode.querySelector('.embla__viewport');
    const dotsNode = document.querySelector('.embla__dots');
    const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()]);

    const onButtonClick = (emblaApi) => {
      const { autoplay } = emblaApi.plugins();
      if (!autoplay) return;
      if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
    };

    const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
      emblaApi,
      dotsNode,
      onButtonClick
    );

    emblaApi.on('destroy', removeDotBtnsAndClickHandlers);
  }, []);

  return (
    <main className="main">
      <section className="main__carousel">
        <div className="embla">
          <div className="embla__viewport">
            <div className="embla__container">
              {/* Add your slides here */}
              <div className="embla__slide">
                <div className="embla__slide__number"><span></span></div>
                <Image
                  className="embla__slide__img"
                  src='/images/Flight.jpeg'
                  layout='fill'
                  objectFit='cover'

                />
              </div>
              {/* End of slides */}
            </div>
          </div>

          <div className="embla__dots"></div>
        </div>
      </section>
    </main>
  );
}

export default Carousel;
