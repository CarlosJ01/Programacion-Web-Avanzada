import React from 'react';
import './css/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './componentes/header';
import Footer from './componentes/footer';

import Principal from './paguinas/principal';
import AcercaNosotros from './paguinas/acercaNosotros';
import MapaUbicacion from './paguinas/mapaUbicacion';
import Catalogo from './paguinas/catalogo';
import Ofertas from './paguinas/ofertas';
import Buscar from './paguinas/buscar';
import Categoria from './paguinas/categoria';
import Producto from './paguinas/producto';
import NoEncontrado from './paguinas/noEncontrado404';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <section>
          <Switch>
            <Route exact path='/' component={Principal}/> {/* Paguina Principal */}
            <Route exact path='/acercaTopcom' component={AcercaNosotros}/> {/* Paguina Acerca de nosotros */}
            <Route exact path='/mapa' component={MapaUbicacion}/> {/* Paguina Mapa de Ubicacion */}
            <Route exact path='/catalogo' component={Catalogo}/> {/* Paguina del catalogo */}
            <Route exact path='/ofertas-noticias' component={Ofertas}/> {/* Paguina de ofertas */}
            <Route exact path='/buscar/:busqueda' component={Buscar}/> {/* Paguina de busqueda */}
            <Route path='/categoria/:nombreCategoria' component={Categoria}/> {/* Paguina de los productos de una categoria */}
            <Route path='/producto/:idProducto' component={Producto}/> {/* Paguina mostrar un producto */}
            <Route component={NoEncontrado}/> {/* Ruta no encontrada */}
          </Switch>
        </section>  
        <Footer/>      
      </BrowserRouter>
  );
}

export default App;
