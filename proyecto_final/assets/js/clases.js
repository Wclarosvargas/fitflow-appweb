document.addEventListener('DOMContentLoaded', () => {


    const alumnos = [
        { id: 1, nombre: "Sofía Martínez", nivel: "INTERMEDIO", img: "https://i.pravatar.cc/150?img=47", estado: "dot-green", asistio: true },
        { id: 2, nombre: "Lucas Gómez", nivel: "AVANZADO", img: "https://i.pravatar.cc/150?img=11", estado: "dot-yellow", asistio: false },
        { id: 3, nombre: "Javier Pérez", nivel: "PRINCIPIANTE", img: null, iniciales: "JP", estado: "dot-red", asistio: false }
    ];

    const listaAlumnos = document.getElementById('listaAlumnos');
    const buscador = document.getElementById('buscadorAlumnos');

    function renderizarAlumnos(filtroText = "") {
        listaAlumnos.innerHTML = '';
        
        const alumnosFiltrados = alumnos.filter(a => 
            a.nombre.toLowerCase().includes(filtroText.toLowerCase())
        );

        alumnosFiltrados.forEach(alumno => {
            const checkClass = alumno.asistio ? 'check-active' : '';

            const avatarHTML = alumno.img 
                ? `<img src="${alumno.img}" alt="Foto de perfil de ${alumno.nombre}" width="45" height="45" loading="lazy" class="avatar-img">` 
                : `<div class="avatar-img avatar-placeholder" aria-hidden="true">${alumno.iniciales}</div>`;
            const html = `
                <div class="alumno-card">
                    <div class="d-flex align-items-center">
                        <div class="avatar-container">
                            ${avatarHTML}
                            <div class="status-dot ${alumno.estado}"></div>
                        </div>
                        <div>
                            <div class="h6 mb-0" style="font-weight: 600; font-size: 0.95rem;">${alumno.nombre}</div>
                            <small style="color: #888; font-size: 0.7rem; letter-spacing: 0.5px;">${alumno.nivel}</small>
                        </div>
                    </div>
                    <div class="d-flex gap-2">
                        <button class="action-btn" aria-label="Ver perfil de ${alumno.nombre}" title="Ver perfil">
                            <i class="bi bi-eye" aria-hidden="true"></i>
                        </button>
                        <button class="action-btn btn-asistencia ${checkClass}" data-id="${alumno.id}" aria-label="Marcar asistencia de ${alumno.nombre}" title="Marcar asistencia">
                            <i class="bi bi-check-lg" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            `;
            listaAlumnos.innerHTML += html;
        });

    
        document.querySelectorAll('.btn-asistencia').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idSeleccionado = parseInt(e.currentTarget.getAttribute('data-id'));
                const alumnoIndex = alumnos.findIndex(a => a.id === idSeleccionado);
                alumnos[alumnoIndex].asistio = !alumnos[alumnoIndex].asistio;

                renderizarAlumnos(buscador.value); 
            });
        });
    }

  
    buscador.addEventListener('input', (e) => {
        renderizarAlumnos(e.target.value);
    });


    renderizarAlumnos();
});