import Image from "next/image";

const instagram = "https://www.instagram.com/tadomadrid/";
const maps = "https://www.google.com/maps/search/?api=1&query=Tado+Madrid+Calle+de+Echegaray+31";
const email =
  "https://mail.google.com/mail/?view=cm&fs=1&to=desateliers%40gmail.com&su=Consulta%20sobre%20una%20pieza%20de%20Tado&body=Hola%20Tado%2C%0A%0AHe%20visto%20una%20pieza%20que%20me%20interesa%20y%20me%20gustar%C3%ADa%20preguntar%20por%20su%20disponibilidad.%0A%0APieza%20o%20referencia%3A%0A%0AGracias.";

function Arrow() {
  return (
    <span className="arrowIcon" aria-hidden="true">
      ↗
      <svg className="arrowSvg" viewBox="0 0 16 16" fill="none">
        <path d="M4 12L12 4M6.25 4H12V9.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Tado, volver al inicio">TADO</a>
        <div className="navLinks">
          <a href="#seleccion">Selección</a>
          <a href="#historia">La tienda</a>
          <a href="#visita">Visítanos</a>
        </div>
        <a className="navCta" href={email} target="_blank" rel="noreferrer">
          Preguntar por una pieza <Arrow />
        </a>
      </nav>

      <section className="hero" id="inicio">
        <div className="heroText">
          <p className="kicker">CERÁMICA · ARTESANÍA · MADRID</p>
          <h1>BELLEZA<br />PARA <em>USAR.</em></h1>
          <div className="heroIntro">
            <p>Objetos hechos a mano para la mesa, la casa y todo lo que ocurre alrededor.</p>
            <div className="heroActions">
              <a className="button primary" href={email} target="_blank" rel="noreferrer">Preguntar disponibilidad <Arrow /></a>
              <a className="textLink" href="#seleccion">Descubrir la selección <Arrow /></a>
            </div>
          </div>
        </div>
        <div className="heroImage">
          <Image src="/images/interior.jpg" alt="Interior real de Tado Madrid con su selección de cerámica" fill priority sizes="(max-width: 760px) 100vw, 50vw" />
          <span className="imageTag">ECHEGARAY, 31 · BARRIO DE LAS LETRAS</span>
        </div>
        <aside className="rating">
          <strong>4,9</strong>
          <div><span>★★★★★</span><a href={maps} target="_blank" rel="noreferrer">45 reseñas en Google</a></div>
        </aside>
      </section>

      <section className="manifesto">
        <p>UNA TIENDA PEQUEÑA</p>
        <h2>CADA PIEZA TIENE<br />UNAS MANOS <em>DETRÁS.</em></h2>
        <p className="manifestoText">Ceramistas y artesanos locales conviven con talleres tradicionales de toda España. Objetos cotidianos escogidos por su forma, su oficio y su capacidad de quedarse contigo.</p>
      </section>

      <section className="selection" id="seleccion">
        <header className="sectionHeader">
          <div><span>01</span><p>AHORA EN TADO</p></div>
          <h2>VEN A MIRAR<br /><em>SIN PRISA.</em></h2>
          <a href={instagram} target="_blank" rel="noreferrer">Ver novedades en Instagram <Arrow /></a>
        </header>

        <div className="gallery">
          <figure className="galleryTall">
            <Image src="/images/portrait-pieces.jpg" alt="Selección de cerámica de autor en Tado Madrid" fill sizes="(max-width: 760px) 100vw, 40vw" />
            <figcaption><span>01</span> PIEZAS PARA LA MESA</figcaption>
          </figure>
          <figure>
            <Image src="/images/vase-lamp.jpg" alt="Jarrón y lámpara artesanales seleccionados por Tado" fill sizes="(max-width: 760px) 100vw, 30vw" />
            <figcaption><span>02</span> OBJETOS CON PRESENCIA</figcaption>
          </figure>
          <figure>
            <Image src="/images/table.jpg" alt="Piezas de cerámica y madera de distintos artesanos" fill sizes="(max-width: 760px) 100vw, 30vw" />
            <figcaption><span>03</span> OFICIOS QUE SIGUEN VIVOS</figcaption>
          </figure>
          <figure className="galleryWide">
            <Image src="/images/collection.jpg" alt="Colección real de cerámica contemporánea de Tado Madrid" fill sizes="(max-width: 760px) 100vw, 60vw" />
            <figcaption><span>04</span> UNA SELECCIÓN QUE CAMBIA</figcaption>
          </figure>
        </div>
        <a className="fullButton" href={email} target="_blank" rel="noreferrer">
          ¿Has visto algo que te interesa? Pregunta por la pieza <Arrow />
        </a>
      </section>

      <section className="story" id="historia">
        <div className="storyImage">
          <Image src="/images/pieces.jpg" alt="Piezas artesanales de la selección de Tado" fill sizes="(max-width: 760px) 100vw, 46vw" />
        </div>
        <div className="storyCopy">
          <div className="index"><span>02</span><p>LA MIRADA DE TADO</p></div>
          <blockquote>“CURIOSIDAD<br />Y <em>PLACER.”</em></blockquote>
          <p>Tado nació de la mirada de Sylvie Fiachetti y de una relación personal con quienes hacen cada pieza. Aquí no se persigue el objeto de moda: se busca aquello que está bien hecho y merece seguir formando parte de la vida diaria.</p>
          <a className="button light" href={instagram} target="_blank" rel="noreferrer">Seguir descubriendo <Arrow /></a>
          <small>SYLVIE FIACHETTI · FUNDADORA DE TADO</small>
        </div>
      </section>

      <section className="proof">
        <div className="press">
          <p>RECOMENDADO POR</p>
          <strong>AD</strong>
          <span>“Todo es manual y bello. De aplauso.”</span>
        </div>
        <article>
          <span className="quoteMark">“</span>
          <blockquote>Una de esas tiendas que te gustaría enmarcar y llevarte a casa.</blockquote>
          <a href={maps} target="_blank" rel="noreferrer">MARCOS · GOOGLE MAPS <Arrow /></a>
        </article>
        <article className="reviewBlue">
          <span className="quoteMark">“</span>
          <blockquote>Un lugar mágico. Su dueña tiene un gusto exquisito.</blockquote>
          <a href={maps} target="_blank" rel="noreferrer">ESTHER · GOOGLE MAPS <Arrow /></a>
        </article>
      </section>

      <section className="visit" id="visita">
        <div className="visitTop">
          <div className="index"><span>03</span><p>VEN A CONOCERLA</p></div>
          <h2>UNA PARADA<br />QUE NO ESTABA<br /><em>EN TU LISTA.</em></h2>
          <p>En pleno Barrio de las Letras. Entra por curiosidad, pregunta por las historias detrás de las piezas y deja que alguna te encuentre a ti.</p>
        </div>
        <div className="contactGrid">
          <a href={maps} target="_blank" rel="noreferrer"><small>DÓNDE</small><strong>Calle de Echegaray, 31<br />28014 · Madrid</strong><Arrow /></a>
          <a href="tel:+34642553351"><small>TELÉFONO</small><strong>642 55 33 51</strong><Arrow /></a>
          <a href={instagram} target="_blank" rel="noreferrer"><small>INSTAGRAM</small><strong>@tadomadrid</strong><Arrow /></a>
          <a href={email} target="_blank" rel="noreferrer"><small>EMAIL</small><strong>Escribir a Tado</strong><Arrow /></a>
        </div>
        <div className="hours">
          <p>HORARIO</p>
          <span>MAR–VIE · 11:30–14:30 / 16:30–20:00</span>
          <span>SÁB · 11:30–19:00</span>
        </div>
      </section>

      <section className="finalCta">
        <p>LA PRÓXIMA PIEZA FAVORITA DE TU CASA</p>
        <h2>AÚN NO<br />SABES<br /><em>CUÁL ES.</em></h2>
        <div>
          <a className="button primary" href={email} target="_blank" rel="noreferrer">Preguntar por una pieza <Arrow /></a>
          <a className="button outline" href={maps} target="_blank" rel="noreferrer">Cómo llegar <Arrow /></a>
        </div>
      </section>

      <footer>
        <a className="brand footerBrand" href="#inicio">TADO</a>
        <p>CERÁMICA Y ARTESANÍA · BARRIO DE LAS LETRAS · MADRID</p>
        <a href={instagram} target="_blank" rel="noreferrer">INSTAGRAM</a>
      </footer>
    </main>
  );
}
