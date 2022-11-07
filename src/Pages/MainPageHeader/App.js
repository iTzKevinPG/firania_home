import * as React from 'react';
import './App.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useState } from "react";


export default function App() {

  const currentPath = GetRoute(window.location.pathname);

  useEffect(() => {
    console.log("renderizado");
  });

  return (
    <Router>
      <div className="Back" >
        <section>
          <Header currentRoute={currentPath}/>
        </section>
        <Switch>
          <Route path='/Home'>
            <div className="Back Home">
              <div className='container-home'>
                <div className='item-home'>
                  <div className='image-one' onClick={() => {Redirect("/Garden")}}>
                  </div>
                </div>
                <div className='item-home'>
                  <div className='image-two' onClick={() => {Redirect("/Kitchen")}}>
                  </div>
                </div>
                <div className='item-home'>
                  <div className='image-three' onClick={() => {Redirect("/Living")}}>
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route path='/Garden'>
            <div className="Back Garden">
            <div className='container-home'>
                <div className='item-home'>
                  <div className='image-one-garden' onClick={() => {RedirectNew("https://www.admagazine.com/sustentabilidad/girasoles-todo-lo-que-debes-saber-sobre-esta-flor-20210816-8898-articulos")}}>
                  </div>
                  <div className='texto-image'>
                    <p><b>
                    Helianthus annuus, también llamado comúnmente girasol, maravilla, mirasol, maíz de teja, acahual​ o flor de escudo, es una planta herbácea anual de la familia de las asteráceas originaria de Centro y Norteamérica y cultivada como alimenticia, oleaginosa y ornamental en todo el mundo.
                    </b></p>
                  </div>
                </div>
                <div className='item-home'>
                  <div className='image-two-garden' onClick={() => {RedirectNew("https://tiendahusqvarna.com/blog/plantas-carnivoras-cuidados/")}}>
                  </div>
                  <div className='texto-image'>
                    <p><b>
                    Una planta carnívora es una planta que obtiene parte o la mayoría de sus necesidades nutricionales mediante la captura y el consumo de protozoos y animales, especialmente insectos.
                    </b></p>
                  </div>
                </div>
                <div className='item-home'>
                  <div className='image-three-garden' onClick={() => {RedirectNew("https://colombia.inaturalist.org/taxa/209926-Inga-edulis")}}>
                  </div>
                  <div className='texto-image'>
                    <p><b>
                      La guama es una planta preciosa, de origen tropical, que proporciona una agradable sombra a todos aquellos que quieran disfrutar del aire libre en el jardín. Pero además, puede saciar el hambre ya que sus semillas son comestibles, eso sí, no recién recogidos del árbol.
                      </b></p>
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route path='/Kitchen'>
            <div className="Back Kitchen">
            <div className='container-home'>
                <div className='item-home'>
                  <div className='image-one-kitchen' onClick={() => {RedirectNew("https://www.recetasnestle.com.co/recetas/lasagna-de-carne?gclid=Cj0KCQjw-JyUBhCuARIsANUqQ_LBQK7VI_qi44n0McCDZeLoe6AaQ4BGKjptTz2kD3MrVuvZlJoejUQaAg2-EALw_wcB&gclsrc=aw.ds")}}>
                  </div>
                  <div className='texto-image'>
                    <p>
                    <b>Ingredientes</b><br></br>
                      2 láminas de tocineta cortadas en tiras (56 g)
                      1/2 cebolla cabezona blanca, finamente picada (40 g)
                      2 tomates rojos, sin piel y, finamente picados (223 g)
                      1 libra de carne molida magra (500 g)
                      1½ tazas de agua (375 ml)
                      1/2 caja de pasta para lasaña (200 g )
                      6 cucharadas de queso mozzarella rallado (60 g)
                    </p>
                  </div>
                </div>
                <div className='item-home'>
                  <div className='image-two-kitchen' onClick={() => {RedirectNew("https://elmundoenrecetas.com/receta/receta_de_arroz_chino")}}>
                  </div>
                  <div className='texto-image'>
                    <p>
                      <b>Ingredientes</b><br></br>
                      2 Tazas de arroz blanco previamente cocido
                      1 Pechuga de pollo picada en cubos (si no tienes pollo puedes utilizar carne o cerdo)
                      150 gr. de guisantes ( preferiblemente los congelados)
                      2 Dientes de ajo rallados
                      5 Cucharadas de salsa de soja
                    </p>
                  </div>
                </div>
                <div className='item-home'>
                  <div className='image-three-kitchen' onClick={() => {RedirectNew("https://www.pequerecetas.com/receta/sushi/")}}>
                  </div>
                  <div className='texto-image'>
                    <p>
                      <b>Ingredientes</b><br></br>
                      Vinagre de arroz, 75 ml 
                      Azúcar, 3 cucharadas 
                      Sal, 1 cucharadita  
                      Alga nori deshidratada, 2 láminas
                      Zanahoria, 1
                      Pepino, ½
                      Aguacate, ½
                      Salmón, 150 g 
                      Wasabi 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route path='/Living'>
            <div className="Back Living">
            <div className='container-home'>
                <div className='item-home'>
                  <div className='image-one-living' onClick={() => {RedirectNew("https://cuevana3.surf/doctor-strange-en-el-multiverso-de-la-locura-2022-contrapeliculas720/")}}>
                  </div>
                  <div className='texto-image'>
                    <p><b>
                      El Dr. Stephen Strange viaja a lo desconocido con el Doctor Strange, quien, con la ayuda de tanto antiguos como nuevos aliados místicos, recorre las complejas y peligrosas realidades alternativas del multiverso para enfrentarse a un nuevo y misterioso adversario.
                    </b></p>
                  </div>
                </div>
                <div className='item-home'>
                  <div className='image-two-living' onClick={() => {RedirectNew("https://cuevana3.life/pelicula/sonic-2-la-pelicula/")}}>
                  </div>
                  <div className='texto-image'>
                    <p><b>
                      Después de establecerse en Green Hills, Sonic quiere demostrar que tiene madera de héroe. La prueba de fuego llega con el retorno del malvado Robotnik, y su nuevo compinche, Knuckles, en busca de una esmeralda que destruye civilizaciones.
                    </b> </p>
                  </div>
                </div>
                <div className='item-home'>
                  <div className='image-three-living' onClick={() => {RedirectNew("https://ver3.cuevana3.cc/peliculas/cas-dog/")}}>
                  </div>
                  <div className='texto-image'>
                    <p><b>
                      Un miembro del Ejército, junto a una perra llamada Lulu, recorre la costa del Pacífico para llegar al funeral de un soldado. En el camino, él y Lulu rompen un montón de leyes y ponen en peligro sus vidas.
                    </b></p>
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/">
            {() => {Redirect("/Home")}}
          </Route>
        </Switch>
        <section>
          <Footer currentRoute={currentPath}/>
        </section>
      </div>
    </Router>
  );
}

function GetRoute(pathName){
  var splitText = pathName.split("/")
  
  return splitText[splitText.length - 1]
}

function Redirect(path) {
  window.location.href = path;
}

function RedirectNew(path) {
  window.open(path , '_blank').focus();
}