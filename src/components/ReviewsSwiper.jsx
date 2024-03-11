// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { common } from '../js/helpers/common';
import css from './ReviewsSwiper.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { dateConverter } from '../js/helpers/converteDate';
import TruncatedText from './TruncatedText';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

export default function ReviewsSwiper({ items }) {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={0}
      navigation
      className={css.mySwiper}
      // onSwiper={swiper => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {items.map(
        ({
          id,
          updated_at,
          content,
          author_details: { name, avatar_path },
        }) => {
          const curreName = name ? name : 'Anonymous';

          return (
            <SwiperSlide key={id}>
              <div className={css.review}>
                <div>
                  <div className={css.thumb}>
                    <Avatar
                      alt={`${curreName} avatar`}
                      src={`${common.imageBaseUrl}w185${avatar_path}`}
                      sx={{ width: 56, height: 56, bgcolor: deepOrange[500] }}
                    />
                  </div>
                  <p className={css.name}>{curreName}</p>
                </div>
                <div>
                  <p className={css.date}>{dateConverter(updated_at)}</p>
                  <TruncatedText originalText={content} maxLength={300} />
                </div>
              </div>
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
}
