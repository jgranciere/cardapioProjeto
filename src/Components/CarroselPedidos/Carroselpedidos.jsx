import React, { use } from 'react';
import './Carroselpedidos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useContext } from 'react';
import { ProdutosContext } from '../../context/ProdutosContext';

const Carroselpedidos = () => {
  const { maisPedidos } = useContext(ProdutosContext);

  return (
    <section className="carrosel-container">
      <h2 className="titulo-carrosel">Os Mais Pedidos!</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          }
        }}
      >
        {maisPedidos.map((produtos) => (
          <SwiperSlide key={produtos.id}>
            <div className="card-produto">
              <img src={produtos.imagemUrl} alt={`Produto ${produtos.nome}`} />
              <div className="info-produto">
                <p>{produtos.nome}</p>
                <span>R$ {produtos.preco}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carroselpedidos;