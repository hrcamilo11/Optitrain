const app = document.getElementById('app');
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];
const addExerciseBtn = document.getElementById('addExerciseBtn');

const routines = [
    { id: 1, name: 'Abdominales', exercises: [], optionalExercises: [] },
    { id: 2, name: 'Espalda', exercises: [], optionalExercises: [] },
    { id: 3, name: 'Biceps', exercises: [], optionalExercises: [] },
    { id: 4, name: 'Pantorrilla', exercises: [], optionalExercises: [] },
    { id: 5, name: 'Pecho', exercises: [], optionalExercises: [] },
    { id: 6, name: 'Antebrazos', exercises: [], optionalExercises: [] },
    { id: 7, name: 'Piernas', exercises: [], optionalExercises: [] }
];

const allExercises = [
    // Abdominales
    { id: 1, name: 'Plancha', routineId: 1 },
    { id: 2, name: 'Crunch', routineId: 1 },
    { id: 3, name: 'Elevación de piernas', routineId: 1 },
    { id: 4, name: 'Russian twist', routineId: 1 },
    { id: 5, name: 'Mountain climbers', routineId: 1 },
    { id: 6, name: 'Abdominales en V', routineId: 1 },
    { id: 7, name: 'Plancha lateral', routineId: 1 },
    { id: 8, name: 'Bicicleta', routineId: 1 },
    { id: 9, name: 'Dragon flag', routineId: 1 },
    { id: 10, name: 'Hollow hold', routineId: 1 },
    { id: 11, name: 'Crunch inverso', routineId: 1 },
    { id: 12, name: 'Plancha con rotación', routineId: 1 },
    // Espalda
    { id: 13, name: 'Dominadas', routineId: 2 },
    { id: 14, name: 'Remo con barra', routineId: 2 },
    { id: 15, name: 'Pull-up', routineId: 2 },
    { id: 16, name: 'Remo con mancuerna', routineId: 2 },
    { id: 17, name: 'Hiperextensiones', routineId: 2 },
    { id: 18, name: 'Face pull', routineId: 2 },
    { id: 19, name: 'Remo invertido', routineId: 2 },
    { id: 20, name: 'Pull-down', routineId: 2 },
    { id: 21, name: 'Good morning', routineId: 2 },
    { id: 22, name: 'Superman', routineId: 2 },
    { id: 23, name: 'Remo en T', routineId: 2 },
    { id: 24, name: 'Pullover', routineId: 2 },
    // Biceps
    { id: 25, name: 'Curl de bíceps', routineId: 3 },
    { id: 26, name: 'Martillo', routineId: 3 },
    { id: 27, name: 'Curl de concentración', routineId: 3 },
    { id: 28, name: 'Curl con barra Z', routineId: 3 },
    { id: 29, name: 'Curl de predicador', routineId: 3 },
    { id: 30, name: 'Curl 21s', routineId: 3 },
    { id: 31, name: 'Curl araña', routineId: 3 },
    { id: 32, name: 'Curl inclinado', routineId: 3 },
    { id: 33, name: 'Curl de cable', routineId: 3 },
    { id: 34, name: 'Curl inverso', routineId: 3 },
    { id: 35, name: 'Curl Zottman', routineId: 3 },
    { id: 36, name: 'Curl de bíceps con polea alta', routineId: 3 },
    // Pantorrilla
    { id: 37, name: 'Elevación de talones', routineId: 4 },
    { id: 38, name: 'Saltos', routineId: 4 },
    { id: 39, name: 'Elevación de talones sentado', routineId: 4 },
    { id: 40, name: 'Caminar de puntillas', routineId: 4 },
    { id: 41, name: 'Saltos de cuerda', routineId: 4 },
    { id: 42, name: 'Prensa de pantorrillas', routineId: 4 },
    { id: 43, name: 'Elevación de talones con una pierna', routineId: 4 },
    { id: 44, name: 'Saltos en caja', routineId: 4 },
    { id: 45, name: 'Elevación de talones en escalón', routineId: 4 },
    { id: 46, name: 'Elevación de talones con mancuernas', routineId: 4 },
    { id: 47, name: 'Saltos laterales', routineId: 4 },
    { id: 48, name: 'Elevación de talones en máquina Smith', routineId: 4 },
    // Pecho
    { id: 49, name: 'Press de banca', routineId: 5 },
    { id: 50, name: 'Aperturas', routineId: 5 },
    { id: 51, name: 'Fondos', routineId: 5 },
    { id: 52, name: 'Press inclinado', routineId: 5 },
    { id: 53, name: 'Push-ups', routineId: 5 },
    { id: 54, name: 'Press declinado', routineId: 5 },
    { id: 55, name: 'Cruce de poleas', routineId: 5 },
    { id: 56, name: 'Press con mancuernas', routineId: 5 },
    { id: 57, name: 'Flexiones diamante', routineId: 5 },
    { id: 58, name: 'Pullover', routineId: 5 },
    { id: 59, name: 'Press de banca con agarre cerrado', routineId: 5 },
    { id: 60, name: 'Flexiones con aplauso', routineId: 5 },
    // Antebrazos
    { id: 61, name: 'Curl de muñeca', routineId: 6 },
    { id: 62, name: 'Extensión de muñeca', routineId: 6 },
    { id: 63, name: 'Curl inverso', routineId: 6 },
    { id: 64, name: 'Agarre de placa', routineId: 6 },
    { id: 65, name: 'Curl de muñeca con barra', routineId: 6 },
    { id: 66, name: 'Extensión de muñeca con barra', routineId: 6 },
    { id: 67, name: 'Curl de muñeca con cable', routineId: 6 },
    { id: 68, name: 'Martillo con cuerda', routineId: 6 },
    { id: 69, name: 'Agarre con toalla', routineId: 6 },
    { id: 70, name: 'Rotación de muñeca', routineId: 6 },
    { id: 71, name: 'Flexión de dedos', routineId: 6 },
    { id: 72, name: 'Extensión de dedos con banda', routineId: 6 },
    // Piernas
    { id: 73, name: 'Sentadillas', routineId: 7 },
    { id: 74, name: 'Prensa de piernas', routineId: 7 },
    { id: 75, name: 'Zancadas', routineId: 7 },
    { id: 76, name: 'Extensión de cuádriceps', routineId: 7 },
    { id: 77, name: 'Curl de isquiotibiales', routineId: 7 },
    { id: 78, name: 'Peso muerto', routineId: 7 },
    { id: 79, name: 'Sentadilla búlgara', routineId: 7 },
    { id: 80, name: 'Hip thrust', routineId: 7 },
    { id: 81, name: 'Sentadilla frontal', routineId: 7 },
    { id: 82, name: 'Elevación de talones', routineId: 7 },
    { id: 83, name: 'Sentadilla sumo', routineId: 7 },
    { id: 84, name: 'Step-up', routineId: 7 }
];

// Preload 7 exercises for each routine and the rest as optional
routines.forEach(routine => {
    const routineExercises = allExercises.filter(exercise => exercise.routineId === routine.id);
    routine.exercises = routineExercises.slice(0, 7);
    routine.optionalExercises = routineExercises.slice(7);
});

let userExercises = JSON.parse(localStorage.getItem('userExercises')) || {};
let dailyExercises = JSON.parse(localStorage.getItem('dailyExercises')) || {};
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

function showLoadingScreen() {
    app.innerHTML = `
        <div class="screen loading-screen">
            <img src="assets/leonardo_phoenix_design_a_sleek_and_modern_logo_for_the_optitr_3_79881c57-ffc4-4277-bbee-b228e8697300-removebg-preview.png" 
            alt="Logo">
        </div>
    `;
    setTimeout(showWelcomeScreen, 5000);
}

function showWelcomeScreen() {
    app.innerHTML = `
        <div class="screen welcome-screen">
            <h1>Bienvenido a OptiTrain</h1>
            <button class="btn" onclick="showLoginScreen()">Iniciar Sesión</button>
            <button class="btn btn-secondary" onclick="showRegisterScreen()">Registrarse</button>
        </div>
    `;
}

function showLoginScreen() {
    app.innerHTML = `
        <div class="screen login-screen">
            <h2>Iniciar Sesión</h2>
            <form onsubmit="login(event)">
                <input type="email" placeholder="Correo electrónico" id="email" required>
                <input type="password" placeholder="Contraseña" id="password" required>
                <button type="submit" class="btn">Iniciar Sesión</button>
            </form>
            <p id="loginError" class="error-message"></p>
            <p class="redirect-text">¿No tienes una cuenta? <a href="#" onclick="showRegisterScreen()">Regístrate aquí</a></p>
        </div>
    `;
}

function showRegisterScreen() {
    app.innerHTML = `
        <div class="screen register-screen">
            <h2>Registrarse</h2>
            <form onsubmit="register(event)">
                <input type="text" placeholder="Nombre de usuario" id="username" required>
                <input type="email" placeholder="Correo electrónico" id="email" required>
                <input type="password" placeholder="Contraseña" id="password" required>
                <input type="password" placeholder="Confirmar contraseña" id="confirmPassword" required>
                <label>
                    <input type="checkbox" id="termsCheckbox" required>
                    Acepto los términos y condiciones
                </label>
                <button type="submit" class="btn">Registrarse</button>
            </form>
            <p id="registerError" class="error-message"></p>
            <p class="redirect-text">¿Ya tienes una cuenta? <a href="#" onclick="showLoginScreen()">Inicia sesión aquí</a></p>
        </div>
    `;
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showRoutineList();
    } else {
        document.getElementById('loginError').textContent = 'Correo electrónico o contraseña incorrectos';
    }
}

function register(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsCheckbox = document.getElementById('termsCheckbox').checked;

    if (users.some(u => u.email === email)) {
        document.getElementById('registerError').textContent = 'El usuario ya existe';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('registerError').textContent = 'Las contraseñas no coinciden';
        return;
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
        document.getElementById('registerError').textContent = 'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales';
        return;
    }

    if (!termsCheckbox) {
        document.getElementById('registerError').textContent = 'Debes aceptar los términos y condiciones';
        return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showRoutine
    List();
}

function showRoutineList() {
    let routineListHTML = routines.map(routine => {
        const activeExercises = routine.exercises.filter(e => !userExercises[e.id]);
        return `
            <div class="routine-item" onclick="showRoutineView(${routine.id})">
                <h3>${routine.name}</h3>
                <p>${activeExercises.length} ejercicios</p>
            </div>
        `;
    }).join('');

    app.innerHTML = `
        <div class="exercise-list">
            <h2>Rutinas</h2>
            ${routineListHTML}
        </div>
        ${createBottomNav()}
    `;
}

function showRoutineView(routineId) {
    const routine = routines.find(r => r.id === routineId);
    let exerciseListHTML = routine.exercises.map(exercise => `
        <div class="exercise-item ${userExercises[exercise.id] ? 'completed' : ''}" id="exercise-${exercise.id}">
            <h3>${exercise.name}</h3>
            <label>
                <input type="checkbox" onchange="toggleExercise(${exercise.id}, ${routineId})" 
                ${userExercises[exercise.id] ? 'checked' : ''}>
                Completado
            </label>
        </div>
    `).join('');

    app.innerHTML = `
        <div class="routine-view">
            <div class="routine-header">
                <h2>${routine.name}</h2>
                <button class="btn" onclick="showAddExerciseModal(${routineId})">Agregar Ejercicio</button>
            </div>
            <div class="exercise-list">
                ${exerciseListHTML}
            </div>
        </div>
        ${createBottomNav()}
    `;

    // Hide completed exercises
    routine.exercises.forEach(exercise => {
        if (userExercises[exercise.id]) {
            const exerciseElement = document.getElementById(`exercise-${exercise.id}`);
            if (exerciseElement) {
                exerciseElement.style.display = 'none';
            }
        }
    });
}

function toggleExercise(exerciseId, routineId) {
    const today = new Date().toISOString().split('T')[0];
    if (!userExercises[exerciseId]) {
        userExercises[exerciseId] = true;
        if (!dailyExercises[today]) {
            dailyExercises[today] = [];
        }
        dailyExercises[today].push(exerciseId);

        const exerciseElement = document.getElementById(`exercise-${exerciseId}`);
        exerciseElement.classList.add('completed');
        exerciseElement.style.animation = 'fadeOut 0.5s';
        setTimeout(() => {
            exerciseElement.style.display = 'none';
        }, 500);
    } else {
        delete userExercises[exerciseId];
        if (dailyExercises[today]) {
            dailyExercises[today] = dailyExercises[today].filter(id => id !== exerciseId);
        }

        const exerciseElement = document.getElementById(`exercise-${exerciseId}`);
        exerciseElement.classList.remove('completed');
        exerciseElement.style.animation = 'none';
        exerciseElement.style.display = 'block';
    }
    localStorage.setItem('userExercises', JSON.stringify(userExercises));
    localStorage.setItem('dailyExercises', JSON.stringify(dailyExercises));
}

function showAddExerciseModal(routineId) {
    const routine = routines.find(r => r.id === routineId);
    let exerciseOptionsHTML = routine.optionalExercises.map(exercise => `
        <option value="${exercise.id}">${exercise.name}</option>
    `).join('');

    document.getElementById('exerciseSelect').innerHTML = exerciseOptionsHTML;
    modal.style.display = "block";

    addExerciseBtn.onclick = function() {
        addExerciseToRoutine(routineId);
    }
}

function addExerciseToRoutine(routineId) {
    const selectElement = document.getElementById('exerciseSelect');
    const selectedExerciseId = parseInt(selectElement.value);
    const selectedExercise = allExercises.find(e => e.id === selectedExerciseId);

    const routine = routines.find(r => r.id === routineId);
    if (!routine.exercises.some(e => e.id === selectedExerciseId)) {
        routine.exercises.push(selectedExercise);
        routine.optionalExercises = routine.optionalExercises.filter(e => e.id !== selectedExerciseId);
    }

    modal.style.display = "none";
    showRoutineView(routineId);
}

function showStatsScreen() {
    let dailyStatsHTML = '';
    Object.entries(dailyExercises).forEach(([date, exercises]) => {
        dailyStatsHTML += `
            <div class="stats-item">
                <h3>${date}</h3>
                <p>Ejercicios completados: ${exercises.length}</p>
            </div>
        `;
    });

    let routineProgressHTML = routines.map(routine => {
        const completedRoutineExercises = routine.exercises.filter(e => userExercises[e.id]).length;
        const progress = (completedRoutineExercises / routine.exercises.length) * 100;
        const resetButton = progress === 100 ? `<button class="btn" onclick="resetRoutine(${routine.id})">Reiniciar Rutina</button>` : '';
        return `
            <div class="stats-item">
                <h3>${routine.name}</h3>
                <div class="progress-bar">
                    <div class="progress" style="width: ${progress}%"></div>
                </div>
                <p>${Math.round(progress)}% completado</p>
                ${resetButton}
            </div>
        `;
    }).join('');

    app.innerHTML = `
        <div class="stats-screen">
            <h2>Estadísticas</h2>
            <h3>Historial Diario</h3>
            ${dailyStatsHTML}
            <h3>Progreso por Rutina</h3>
            ${routineProgressHTML}
        </div>
        ${createBottomNav()}
    `;
}

function resetRoutine(routineId) {
    const routine = routines.find(r => r.id === routineId);
    routine.exercises.forEach(exercise => {
        delete userExercises[exercise.id];
    });
    localStorage.setItem('userExercises', JSON.stringify(userExercises));
    showStatsScreen();
}

function showProfileScreen() {
    const completedExercises = Object.keys(userExercises).length;
    const totalExercises = routines.reduce((sum, routine) => sum + routine.exercises.length, 0);

    app.innerHTML = `
        <div class="profile-screen">
            <h2>Perfil</h2>
            <div class="profile-item">
                <p>Nombre de usuario: ${currentUser.username}</p>
                <p>Correo electrónico: ${currentUser.email}</p>
                <p>Total de ejercicios realizados: ${completedExercises}</p>
                <h3>Progreso General</h3>
                <p>Ejercicios completados: ${completedExercises}</p>
                <p>Total de ejercicios: ${totalExercises}</p>
                <p>Progreso: ${Math.round((completedExercises / totalExercises) * 100)}%</p>
            </div>
            <button class="btn" onclick="logout()">Cerrar Sesión</button>
        </div>
        ${createBottomNav()}
    `;
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showWelcomeScreen();
}

function createBottomNav() {
    return `
        <nav class="bottom-nav">
            <button onclick="showRoutineList()">
                <img src="assets/weightlifting-gym-svgrepo-com.svg" alt="Rutinas">
                Rutinas
            </button>
            <button onclick="showStatsScreen()">
                <img src="assets/training-gym-svgrepo-com.svg" alt="Estadísticas">
                Estadísticas
            </button>
            <button onclick="showProfileScreen()">
                <img src="assets/dumbbell-gym-svgrepo-com.svg" alt="Perfil">
                Perfil
            </button>
        </nav>
    `;
}

// Modal event listeners
closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Start the application
showLoadingScreen();