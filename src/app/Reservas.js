import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Formulario from '../app/components/FormularioCitas/Index';
import ListaCitas from '../app/components/FormularioContacto/Index';


export default function Home() {
    const [citas, setCitas] = useState([]);

    const agregarCita = (nuevaCita) => {
        setCitas([...citas, nuevaCita]);
    };

    const eliminarCita = (id) => {
        if (window.confirm('¿Estás seguro de eliminar esta cita?')) {
        const citasActualizadas = citas.filter((cita) => cita.id !== id);
        setCitas(citasActualizadas);
        }
    };

  return (
    <main className={styles.main}>
      <div className="contenedor">
        <Formulario agregarCita={agregarCita} />
        <ListaCitas citas={citas} eliminarCita={eliminarCita} />
      </div>
    </main>
  );
}