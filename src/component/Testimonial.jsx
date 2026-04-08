import React from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonial = ({ testimonials }) => {
  return (
    <div className="py-20 bg-base-100">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-base-content/60 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients think about working with us.
          </p>
        </div>

        {/* Coverflow Slider */}
        <Swiper
          loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 30,
            stretch: '30%',
            depth: 200,
            modifier: 1,
            scale: 0.85,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-base-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <FaQuoteLeft className="text-primary/20 text-4xl mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm md:text-base ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-base-300'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-base-content/70 text-sm md:text-base leading-relaxed mb-6 italic line-clamp-4">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-base-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-xl shadow-glow">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-base-content">{testimonial.name}</h4>
                    <p className="text-xs text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <style>{`
          .swiper-pagination-bullet-active {
            background: #8b5cf6 !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Testimonial;