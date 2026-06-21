document.addEventListener('DOMContentLoaded', () => {

    // 1. SIMULACIÓN DE BASE DE DATOS
    // Definimos las fechas que aparecerán en el scroll
    const dias = [
        { id: "12", nombre: "LUN", num: "12" },
        { id: "13", nombre: "MAR", num: "13" },
        { id: "14", nombre: "MIÉ", num: "14" },
        { id: "15", nombre: "JUE", num: "15" },
        { id: "16", nombre: "VIE", num: "16" },
        { id: "17", nombre: "SÁB", num: "17" }
    ];

    // Clases disponibles según el ID del día
    const clasesPorDia = {
        "12": [
            { id: "c1", horario: "08:00 - 09:00", nombre: "CrossFit WOD", coach: "Marcos P.", estado: "5 LUGARES", full: false },
            { id: "c2", horario: "11:00 - 12:00", nombre: "Powerlifting", coach: "Marcos P.", estado: "COMPLETO", full: true }
        ],
        "13": [
            { id: "c3", horario: "09:00 - 10:00", nombre: "Yoga", coach: "Ana S.", estado: "10 LUGARES", full: false },
            { id: "c4", horario: "18:00 - 19:00", nombre: "CrossFit WOD", coach: "Juan M.", estado: "2 LUGARES", full: false }
        ],
        "14": [
            { id: "c5", horario: "10:00 - 11:00", nombre: "Pilates", coach: "Lucía F.", estado: "COMPLETO", full: true }
        ]
        // Si un día no tiene datos, aparecerá vacío.
    };

    const contenedorFechas = document.getElementById('contenedorFechas');
    const listaClases = document.getElementById('listaClases');
    const btnConfirmar = document.getElementById('btnConfirmarReserva');
    
    let diaActivo = "12"; // Día seleccionado por defecto
    let claseSeleccionada = null; // ID de la clase que el usuario elija

    // 2. RENDERIZAR FECHAS EN EL SCROLL
    function renderizarFechas() {
        contenedorFechas.innerHTML = '';
        dias.forEach(dia => {
            const isActive = dia.id === diaActivo ? 'active' : '';
            const html = `
                <div class="date-card ${isActive}" data-id="${dia.id}">
                    <span class="day">${dia.nombre}</span>
                    <span class="num">${dia.num}</span>
                </div>
            `;
            contenedorFechas.innerHTML += html;
        });

        // Eventos click para cambiar de día
        document.querySelectorAll('.date-card').forEach(tarjeta => {
            tarjeta.addEventListener('click', (e) => {
                diaActivo = e.currentTarget.getAttribute('data-id');
                claseSeleccionada = null; // Reiniciamos selección al cambiar de día
                renderizarFechas(); // Volvemos a pintar para mover la clase 'active'
                renderizarClases(); // Cargamos las clases del nuevo día
            });
        });
    }

    // 3. RENDERIZAR LAS TARJETAS DE CLASES SEGÚN EL DÍA
    function renderizarClases() {
        listaClases.innerHTML = '';
        const clasesHoy = clasesPorDia[diaActivo] || []; // Obtiene clases o un array vacío

        if (clasesHoy.length === 0) {
            listaClases.innerHTML = '<p class="text-center text-muted mt-4">No hay clases programadas para este día.</p>';
            return;
        }

        clasesHoy.forEach(clase => {
            const isFull = clase.full ? 'full' : '';
            const isSelected = claseSeleccionada === clase.id ? 'selected' : '';
            const badgeClass = clase.full ? 'badge-completo' : 'badge-lugares';
            
            // Estructura HTML para la tarjeta de clase
            const html = `
                <div class="reserva-card ${isFull} ${isSelected}" data-id="${clase.id}">
                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <h5 class="class-time mb-1" style="font-weight: 600;">${clase.horario}</h5>
                            <p class="class-name mb-1" style="color: #bbb;">${clase.nombre}</p>
                            <small style="color: #888;"><i class="bi bi-person me-1"></i> Coach: ${clase.coach}</small>
                        </div>
                        <div class="d-flex flex-column align-items-end">
                            <span class="badge ${badgeClass} mb-3 px-2 py-1">${clase.estado}</span>
                            ${!clase.full ? '<div class="circle-select"></div>' : ''}
                        </div>
                    </div>
                </div>
            `;
            listaClases.innerHTML += html;
        });

        // Eventos click para seleccionar una clase
        document.querySelectorAll('.reserva-card').forEach(tarjeta => {
            tarjeta.addEventListener('click', (e) => {
                const targetCard = e.currentTarget;
                if (!targetCard.classList.contains('full')) {
                    claseSeleccionada = targetCard.getAttribute('data-id');
                    renderizarClases(); // Repinta para actualizar el borde verde y el círculo
                }
            });
        });
    }

    // 4. LÓGICA DEL BOTÓN DE CONFIRMAR RESERVA
    btnConfirmar.addEventListener('click', () => {
        if (claseSeleccionada) {
            alert("¡Reserva confirmada con éxito! Te esperamos.");
            // Aquí podrías redireccionar o limpiar el formulario
            claseSeleccionada = null;
            renderizarClases();
        } else {
            alert("Por favor, selecciona una clase disponible primero.");
        }
    });

    // 5. INICIALIZAR LA PANTALLA AL CARGAR
    renderizarFechas();
    renderizarClases();

});