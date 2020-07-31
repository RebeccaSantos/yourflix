import React from 'react';
import Menu from '../../componentes/menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/BannerMain';
import Footer from '../../componentes/Footer';
import Carousel from '../../componentes/Carousel';
function Home() {
  return (
    <div style={{ background: "#141414" }}>
<Menu />

<BannerMain
  videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
  url={dadosIniciais.categorias[0].videos[0].url}
  videoDescription={"Os melhores videos pra você poder se preparar para o enem"}
/>

<Carousel
  ignoreFirstVideo
  category={dadosIniciais.categorias[0]}
/>

<Carousel
  category={dadosIniciais.categorias[1]}
/>

<Carousel
  category={dadosIniciais.categorias[2]}
/>      

<Carousel
  category={dadosIniciais.categorias[3]}
/>      

<Carousel
  category={dadosIniciais.categorias[4]}
/>      

<Carousel
  category={dadosIniciais.categorias[5]}
/>      

<Footer />
</div>
  
);
}

export default Home;
