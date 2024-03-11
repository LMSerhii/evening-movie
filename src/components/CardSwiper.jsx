// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { common } from '../js/helpers/common';
import css from './CardSwiper.module.css';

import 'swiper/css';
import 'swiper/css/navigation';

export default function CardSwiper({ items }) {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={0}
      breakpoints={{
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
      navigation
      className={css.mySwiper}
      // onSwiper={swiper => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {items.map(({ credit_id, profile_path, name, character }) => {
        return (
          <SwiperSlide key={credit_id}>
            <div className={css.swiperSlide}>
              <img
                className={css.authorImg}
                src={
                  profile_path
                    ? `${common.imageBaseUrl}w185${profile_path}`
                    : common.castDefaultImage
                }
                alt="poster"
                width={250}
              />
              <p>{name}</p>
              {character && (
                <p className={css.character}>{`( ${character} )`}</p>
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
