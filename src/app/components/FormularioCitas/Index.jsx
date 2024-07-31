import React, { useState } from 'react';

const FormularioCita = ({ setCitas }) => {
    const [nombreMascota, setNombreMascota] = useState('');
    const [nombreDuenio, setNombreDuenio] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (nombreMascota.trim() === '' || nombreDuenio.trim() === '' || fecha === '' || hora === '' || sintomas.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        
        const confirmar = window.confirm("¿Confirmas tu cita?");
        if(confirmar)
        {
            const nuevaCita = {
                nombreMascota,
                nombreDuenio,
                fecha,
                hora,
                sintomas
            };
    
        setCitas(prevCitas => [...prevCitas, nuevaCita]);

        }

        setNombreMascota('');
        setNombreDuenio('');
        setFecha('');
        setHora('');
        setSintomas('');
    };

    const verificacionFecha = (e) => {
        const fechaElegida = e.target.value;
        const anioElegido = new Date(fechaElegida).getFullYear();
        const anioActual = new Date().getFullYear();
        const mesElegido = new Date(fechaElegida).getMonth();
        const mesActual = new Date().getMonth();
        const diaElegido = new Date(fechaElegida).getDay();
        const diaActual = new Date().getDay();

    
        if (anioElegido >= anioActual && mesElegido >= mesActual && diaElegido && diaActual) {
            setFecha(fechaElegida)
        } else {
            alert('Por favor selecciona una fecha igual o mayor a la actual.');
        }
    };

    return (
        <div style={{ width: "50%", marginLeft: "19.5vw" }}>
            <form style={{ display: "flex", flexDirection: "column", marginBottom: "5vw" }} onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={nombreMascota} onChange={(e) => setNombreMascota(e.target.value)} />
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={nombreDuenio} onChange={(e) => setNombreDuenio(e.target.value)} />
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={verificacionFecha} />
                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width" value={hora} onChange={(e) => setHora(e.target.value)} />
                <label>Síntomas</label>
                <textarea name="sintomas" className="u-full-width" style={{ resize: "vertical", marginBottom: "2vw" }} value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    );
};

export default FormularioCita;