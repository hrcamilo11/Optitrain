// Data structures
let routines = [
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

// Global variables
let userExercises = JSON.parse(localStorage.getItem('userExercises')) || {};
let dailyExercises = JSON.parse(localStorage.getItem('dailyExercises')) || {};
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || null;

// DOM elements
const app = document.getElementById('app');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const addExerciseBtn = document.getElementById('addExerciseBtn');
const addExerciseConfirmBtn = document.getElementById('addExerciseConfirmBtn');

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    preloadData();
    showLoadingScreen();
    setupEventListeners();
});

function setupEventListeners() {

    document.getElementById('loginBtn').addEventListener('click', showLoginScreen);
    document.getElementById('registerBtn').addEventListener('click', showRegisterScreen);
    document.getElementById('goToRegister').addEventListener('click', showRegisterScreen);
    document.getElementById('goToLogin').addEventListener('click', showLoginScreen);
    document.getElementById('loginForm').addEventListener('submit', login);
    document.getElementById('registerForm').addEventListener('submit', register);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('routinesNavBtn').addEventListener('click', showRoutineList);
    document.getElementById('statsNavBtn').addEventListener('click', showStatsScreen);
    document.getElementById('profileNavBtn').addEventListener('click', showProfileScreen);
    closeBtn.addEventListener('click', () => modal.style.display = "none");
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
    addExerciseConfirmBtn.addEventListener('click', addExerciseToRoutine);
}

// Functions
function preloadData() {
    routines.forEach(routine => {
        const routineExercises = allExercises.filter(exercise => exercise.routineId === routine.id);
        routine.exercises = routineExercises.slice(0, 7);
        routine.optionalExercises = routineExercises.slice(7);
    });
}

function hideAllScreens() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.style.display = 'none');
    document.querySelector('.bottom-nav').style.display = 'none';
}

function showLoadingScreen() {
    hideAllScreens();
    document.querySelector('.loading-screen').style.display = 'flex';
    setTimeout(showWelcomeScreen, 5000);
}

function showWelcomeScreen() {
    hideAllScreens();
    document.querySelector('.welcome-screen').style.display = 'flex';
}

function showLoginScreen() {
    hideAllScreens();
    document.querySelector('.login-screen').style.display = 'flex';
}

function showRegisterScreen() {
    hideAllScreens();
    document.querySelector('.register-screen').style.display = 'flex';
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        showRoutineList();
    } else {
        document.getElementById('loginError').textContent = 'Correo electrónico o contraseña incorrectos';
    }
}

function register(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
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
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    showRoutineList();
}

function showRoutineList() {
    hideAllScreens();
    document.querySelector('.routine-list-screen').style.display = 'block';
    document.querySelector('.bottom-nav').style.display = 'flex';

    const routineListElement = document.getElementById('routineList');
    routineListElement.innerHTML = '';

    routines.forEach(routine => {
        const activeExercises = routine.exercises.filter(e => !userExercises[e.id]);
        const routineItem = document.createElement('div');
        routineItem.className = 'routine-item';
        routineItem.innerHTML = `
            <h3>${routine.name}</h3>
            <p>${activeExercises.length} ejercicios</p>
        `;
        routineItem.addEventListener('click', () => showRoutineView(routine.id));
        routineListElement.appendChild(routineItem);
    });
}

function showRoutineView(routineId) {
    hideAllScreens();
    document.querySelector('.routine-view-screen').style.display = 'block';
    document.querySelector('.bottom-nav').style.display = 'flex';

    const routine = routines.find(r => r.id === routineId);
    document.getElementById('routineName').textContent = routine.name;

    const exerciseListElement = document.getElementById('exerciseList');
    exerciseListElement.innerHTML = '';

    routine.exercises.forEach(exercise => {
        const exerciseItem = document.createElement('div');
        exerciseItem.className = `exercise-item ${userExercises[exercise.id] ? 'completed' : ''}`;
        exerciseItem.id = `exercise-${exercise.id}`;
        exerciseItem.innerHTML = `
            <h3>${exercise.name}</h3>
            <label>
                <input type="checkbox" ${userExercises[exercise.id] ? 'checked' : ''}>
                Completado
            </label>
        `;
        exerciseItem.querySelector('input').addEventListener('change', () => toggleExercise(exercise.id, routineId));
        exerciseListElement.appendChild(exerciseItem);

        if (userExercises[exercise.id]) {
            exerciseItem.style.display = 'none';
        }
    });

    addExerciseBtn.onclick = () => showAddExerciseModal(routineId);
}

function toggleExercise(exerciseId, routineId) {
    const today = new Date().toISOString().split('T')[0];
    const exerciseElement = document.getElementById(`exercise-${exerciseId}`);

    if (!userExercises[exerciseId]) {
        userExercises[exerciseId] = true;
        if (!dailyExercises[today]) {
            dailyExercises[today] = [];
        }
        dailyExercises[today].push(exerciseId);

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

        exerciseElement.classList.remove('completed');
        exerciseElement.style.animation = 'none';
        exerciseElement.style.display = 'block';
    }
    localStorage.setItem('userExercises', JSON.stringify(userExercises));
    localStorage.setItem('dailyExercises', JSON.stringify(dailyExercises));
}

function showAddExerciseModal(routineId) {
    const routine = routines.find(r => r.id === routineId);
    const selectElement = document.getElementById('exerciseSelect');
    selectElement.innerHTML = '';

    routine.optionalExercises.forEach(exercise => {
        const option = document.createElement('option');
        option.value = exercise.id;
        option.textContent = exercise.name;
        selectElement.appendChild(option);
    });

    modal.style.display = "block";
    addExerciseConfirmBtn.onclick = () => addExerciseToRoutine(routineId);
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
    hideAllScreens();
    document.querySelector('.stats-screen').style.display = 'block';
    document.querySelector('.bottom-nav').style.display = 'flex';

    const dailyStatsElement = document.getElementById('dailyStats');
    dailyStatsElement.innerHTML = '';
    Object.entries(dailyExercises).forEach(([date, exercises]) => {
        const statsItem = document.createElement('div');
        statsItem.className = 'stats-item';
        statsItem.innerHTML = `
            <h3>${date}</h3>
            <p>Ejercicios completados: ${exercises.length}</p>
        `;
        dailyStatsElement.appendChild(statsItem);
    });

    const routineProgressElement = document.getElementById('routineProgress');
    routineProgressElement.innerHTML = '';
    routines.forEach(routine => {
        const completedRoutineExercises = routine.exercises.filter(e => userExercises[e.id]).length;
        const progress = (completedRoutineExercises / routine.exercises.length) * 100;
        const statsItem = document.createElement('div');
        statsItem.className = 'stats-item';
        statsItem.innerHTML = `
            <h3>${routine.name}</h3>
            <div class="progress-bar">
                <div class="progress" style="width: ${progress}%"></div>
            </div>
            <p>${Math.round(progress)}% completado</p>
        `;
        if (progress === 100) {
            const resetButton = document.createElement('button');
            resetButton.className = 'btn';
            resetButton.textContent = 'Reiniciar Rutina';
            resetButton.addEventListener('click', () => resetRoutine(routine.id));
            statsItem.appendChild(resetButton);
        }
        routineProgressElement.appendChild(statsItem);
    });
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
    hideAllScreens();
    document.querySelector('.profile-screen').style.display = 'block';
    document.querySelector('.bottom-nav').style.display = 'flex';

    const completedExercises = Object.keys(userExercises).length;
    const totalExercises = routines.reduce((sum, routine) => sum + routine.exercises.length, 0);
    const progress = Math.round((completedExercises / totalExercises) * 100);

    const profileInfoElement = document.getElementById('profileInfo');
    profileInfoElement.innerHTML = `
        <p>Nombre de usuario: ${currentUser.username}</p>
        <p>Correo electrónico: ${currentUser.email}</p>
        <p>Total de ejercicios realizados: ${completedExercises}</p>
        <h3>Progreso General</h3>
        <p>Ejercicios completados: ${completedExercises}</p>
        <p>Total de ejercicios: ${totalExercises}</p>
        <p>Progreso: ${progress}%</p>
    `;
}

function logout() {
    currentUser = null;
    sessionStorage.removeItem('currentUser');
    showWelcomeScreen();
}


// Start the application
showLoadingScreen();