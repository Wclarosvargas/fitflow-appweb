document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Array con los datos de los ejercicios (Simula los datos provenientes de una API o BD)
    const ejercicios = [
        { id: 1, nombre: "Press de Banca inclinado", series: 4, reps: "8-10", peso: "60kg" },
        { id: 2, nombre: "Dominadas", series: 4, reps: "Al fallo", peso: "BW", isActive: true },
        { id: 3, nombre: "Press Militar con Mancuernas", series: 3, reps: "10-12", peso: "20kg" }
    ];

    // Referencias a los elementos del DOM necesarios
    const listaEjercicios = document.getElementById('listaEjercicios');
    const barraProgreso = document.getElementById('barraProgreso');
    const progresoTexto = document.getElementById('progresoTexto');
    
    let completados = 0;
    const total = ejercicios.length;

    // 2. Función para inyectar dinámicamente el HTML de las tarjetas
    function renderizarEjercicios() {
        listaEjercicios.innerHTML = ''; // Limpieza previa del contenedor
        
        ejercicios.forEach(ej => {
            // Se evalúa si el ejercicio arranca destacado con el borde verde decorativo
            const activeClass = ej.isActive ? 'active-card' : '';
            
            const cardHTML = `
                <div class="exercise-card ${activeClass}" id="card-${ej.id}">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="form-check d-flex align-items-center mb-0">
                            <input class="form-check-input custom-checkbox me-3 exercise-check" 
                                   type="checkbox" 
                                   id="check-${ej.id}" 
                                   style="width: 22px; height: 22px; cursor: pointer;">
                            <label class="form-check-label exercise-title mb-0" for="check-${ej.id}" style="cursor: pointer; font-size: 1rem; font-weight: 500;">
                                ${ej.nombre}
                            </label>
                        </div>
                        <i class="bi bi-info-circle" style="color: #888; cursor: pointer;"></i>
                    </div>
                    
                    <div class="row gx-2">
                        <div class="col-4">
                            <div class="stat-box">
                                <div class="stat-label">SERIES</div>
                                <div class="stat-value">${ej.series}</div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="stat-box">
                                <div class="stat-label">REPS</div>
                                <div class="stat-value">${ej.reps}</div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="stat-box">
                                <div class="stat-label">PESO</div>
                                <div class="stat-value">${ej.peso}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            listaEjercicios.innerHTML += cardHTML;
        });
    }

    // 3. Función encargada de actualizar de forma matemática la barra y el texto numérico
    function actualizarUI() {
        progresoTexto.textContent = `${completados}/${total}`;
        const porcentaje = total > 0 ? (completados / total) * 100 : 0;
        barraProgreso.style.width = `${porcentaje}%`;
    }

    // 4. Inicialización e invocación al cargar la vista
    renderizarEjercicios();
    actualizarUI();

    // 5. Delegación de eventos para optimizar la escucha de cambios en los Checkboxes
    listaEjercicios.addEventListener('change', (e) => {
        if (e.target.classList.contains('exercise-check')) {
            const checkbox = e.target;
            const card = checkbox.closest('.exercise-card');
            
            if (checkbox.checked) {
                // Estado completado: Añade opacidad reducida, tacha el texto y quita el borde activo
                card.classList.add('completed');
                card.classList.remove('active-card');
                completados++;
                
                // Desfase milimétrico para priorizar la fluidez de la animación visual antes del cuadro de alerta
                setTimeout(() => {
                    alert("¡Ejercicio terminado!");
                }, 150);
            } else {
                // Estado revertido: Restaura la visualización inicial de la tarjeta
                card.classList.remove('completed');
                completados--;
            }
            
            // Re-cálculo automático tras la interacción
            actualizarUI();
        }
    });
});