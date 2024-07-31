import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

/*COSAS PARA HACER
- Mantener la base (estética) de la página defautl
- Cambiar los links del div por los correspondientes en cada caso
- Importar en la pagina de formulario el componente del tp04
- Crear el quienes somos
- Lograr la navegacion de página en página
*/

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        
        <div>
          <a>
            By{"  Tamara Dratler & Olivia Di Carlo & Santiago Butler  "}
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1 style={{position: "relative", fontSize: "2vw"}}>GESTOR DE CITAS</h1>
      </div>

      <div className={styles.grid} style={{display: "flex", justifyContent: "center", paddingLeft: "4vw"}}>

        <a
          href="/quienes-somos"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Quienes somos <span>-&gt;</span>
          </h2>
          <p>Conoce nuestro equipo y nuestra misión para ofrecerte un servicio excepcional.</p>
        </a>

        <a
          href="/reservas.js"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Reservas <span>-&gt;</span>
          </h2>
          <p>Programa tus citas con nosotros y gestiona tu agenda con facilidad y comodidad.</p>
        </a>

        <a
          href="/contacto.js"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contacto <span>-&gt;</span>
          </h2>
          <p>¡Conéctate con nosotros hoy mismo para resolver tus dudas y colaboraciones!</p>
        </a>

      </div>
    </main>
  );
}