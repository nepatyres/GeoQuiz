document.addEventListener('DOMContentLoaded', function () {
    let countries = ['China', 'Iran', 'Saudi-Arabia', 'Türkiye', 'Armenia', 'Afghanistan', 'Israel', 'Sri-Lanka', 'North-Korea', 'Nepal', 'Turkmenistan', 'Taiwan', 'India', 'Kyrgyzstan', 'Iraq', 'Thailand', 'Uzbekistan', 'Kazakhstan', 'Mongolia', 'Jordan', 'Syria', 'Oman', 'Bhutan', 'Tajikistan', 'Pakistan', 'Japan', 'South-Korea', 'Azerbaijan', 'Timor-Leste', 'Cambodia', 'Laos', 'Myanmar', 'Bangladesh', 'Georgia', 'Philippines', 'Bahrain', 'United-Arab-Emirates', 'Qatar', 'Russia', 'Yemen', 'Malaysia', 'Lebanon', 'Kuwait', 'Indonesia', 'Vietnam', 'Singapore', 'Palestine', 'Maldives', 'Brunei'];
    let countriesCount = countries.length;
    let countriesCountAtStart = countries.length;
    let guessCountry = false;
    let correctCountry;
    let randomNumber;
    let attemptsScore = 0;
    let quizScoreNum = 0;
    let quizCompleted = false;

    const wrapper = document.getElementById('wrapper');
    const countryName = document.getElementById('country-name');
    const attempts = document.getElementById('quiz-attempts');
    const quizTime = document.getElementById('quiz-time');
    const quizScore = document.getElementById('quiz-score');
    const quizTitle = document.getElementById('quiz-title');
    const skipButton = document.getElementById('skip-btn');

    skipButton.addEventListener('click', function () {
        if (guessCountry) {
            const correctCountryElement = document.getElementById(correctCountry);
            const tspanElement = document.getElementById(`${correctCountry}-tspan`);
            if (correctCountryElement && tspanElement) {
                correctCountryElement.style.fill = 'rgba(20,39,51,0.8)';
                tspanElement.style.display = 'block';
                setTimeout(() => {
                    tspanElement.style.display = 'none';
                }, 1000);
                attemptsScore++;
                updateAttempts();
                guessCountry = false;
                countries.splice(randomNumber, 1);
                countriesCount = countries.length;
                startNewRound();
            } else {
                console.error(`Elements not found for ${correctCountry}`);
            }
        }
    });

    function startNewRound() {
        if (countriesCount === 0) {
            quizTitle.textContent = `${attemptsScore < countriesCountAtStart / 5 && quizScoreNum === countriesCountAtStart ? 'Excellent!🥳' : 'You can do better!🤬'}`;
            attempts.textContent = `${attemptsScore}`;
            quizTime.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            pauseTimer();
            quizScore.textContent = `${quizScoreNum}/${countriesCountAtStart}`;
            document.getElementById('quiz-popup').style.display = 'flex';
            quizCompleted = true;
            const tspans = document.getElementsByClassName('tspan-country');
            for (let i = 0; i < tspans.length; i++) {
                tspans[i].style.display = 'block';
            } if (correctCountry) {
                updateCountryGuess();

                const continent = 'Asia';
                const score = `${quizScoreNum}/${countriesCountAtStart}`;
                const attempts = attemptsScore;
                const time = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

                fetch('/update-score', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ continent, score, attempts, time }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            console.log('Score updated successfully');
                        } else {
                            console.error('Failed to update score');
                        }
                    })
                    .catch(error => {
                        console.error('Error updating score:', error);
                    });
            } else {
                console.error('correctCountry is undefined.');
            }

            return;
        }

        guessCountry = true;
        randomNumber = Math.floor(Math.random() * countriesCount);
        correctCountry = randomCountry();
        updateCountryGuess();
    }

    wrapper.addEventListener('click', function (event) {
        const clickedCountry = event.target.id;
        if (guessCountry && clickedCountry === correctCountry) {
            event.target.style.fill = 'rgba(20,39,51,0.8)';
            document.getElementById(`${clickedCountry}-tspan`).style.display = 'block';
            setTimeout(() => {
                document.getElementById(`${clickedCountry}-tspan`).style.display = 'none';
            }, 1000);
            guessCountry = false;
            countries.splice(randomNumber, 1);
            countriesCount = countries.length;
            quizScoreNum++;
            startNewRound();
        } else if (guessCountry && clickedCountry && countries.includes(clickedCountry)) {
            attemptsScore++;
            event.target.style.fill = 'rgba(155, 1, 1,0.8)';
            event.target.style.transition = 'fill 0.2s ease';
            document.getElementById(`${clickedCountry}-tspan`).style.display = 'block';
            setTimeout(() => {
                event.target.style.fill = '';
                document.getElementById(`${clickedCountry}-tspan`).style.display = 'none';
            }, 700);
            updateAttempts();
        }
    });

    function randomCountry() {
        return countries[randomNumber];
    }

    function updateCountryGuess() {
        const tspanElement = document.getElementById(`${correctCountry}-tspan`);
        countryName.textContent = `${correctCountry.replace(/-/g, ' ')}`;
        if (tspanElement) {
            tspanElement.id = `${correctCountry}-tspan`;
        }
    }

    function updateAttempts() {
        attempts.textContent = `${attemptsScore}`;
    }

    startNewRound();


    //Timer logic

    let timer;
    let isPaused = false;
    let elapsedTime = 0;
    let minutes = 0;
    let seconds = 0;

    function updateTimerDisplay() {
        const timerDisplay = document.getElementById('timer');
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} `;
    }

    function startTimer() {
        if (!timer) {
            timer = setInterval(function () {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
                updateTimerDisplay();
            }, 1000);
        }
    }

    function pauseTimer() {
        isPaused = true;
        document.getElementById('btn-pause-svg').style.display = 'none';
        document.getElementById('btn-resume-svg').style.display = 'inline';
        clearInterval(timer);
        timer = null;
    }

    function resumeTimer() {
        isPaused = false;
        document.getElementById('btn-pause-svg').style.display = 'inline';
        document.getElementById('btn-resume-svg').style.display = 'none';
        timer = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateTimerDisplay();
        }, 1000);
    }

    document.getElementById('wrapper').addEventListener('click', () => {
        if (!quizCompleted) {
            if (isPaused) {
                resumeTimer();
            } else {
                startTimer();
            }
        }
    });

    document.getElementById('btn-pause').addEventListener('click', () => {
        pauseTimer();
    });

    document.getElementById('btn-resume-svg').addEventListener('click', () => {
        resumeTimer();
    });

    window.addEventListener('load', () => {
        const storedElapsedTime = localStorage.getItem('elapsedTime');
        if (storedElapsedTime) {
            elapsedTime = parseInt(storedElapsedTime, 10);
            minutes = Math.floor(elapsedTime / 60);
            seconds = elapsedTime % 60;
            updateTimerDisplay();
        }
    });

    window.addEventListener('beforeunload', () => {
        if (timer) {
            localStorage.setItem('elapsedTime', elapsedTime.toString());
        }
    });

    document.getElementById('new-game-btn').addEventListener('click', () => {
        location.reload(true);
    });
});







const mapContainer = document.getElementById('main-map');
const map = document.getElementById('wrapper');
let scale = 1;
let originalScale = 1;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let dragStart = { x: 0, y: 0 };

mapContainer.addEventListener('wheel', handleZoom);
mapContainer.addEventListener('mousedown', handleMouseDown);

function handleZoom(event) {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    const zoomFactor = 1.1;

    if (delta < 0) {
        scale *= zoomFactor;
    } else {
        scale = Math.max(originalScale, scale / zoomFactor);
    }

    const minZoom = 0.5;
    const maxZoom = 3;
    scale = Math.min(maxZoom, Math.max(minZoom, scale));

    applyTransform();
}

function handleMouseDown(event) {
    isDragging = true;
    dragStart = { x: event.clientX, y: event.clientY };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}

function handleMouseMove(event) {
    if (isDragging) {
        const deltaX = event.clientX - dragStart.x;
        const deltaY = event.clientY - dragStart.y;
        offsetX += deltaX;
        offsetY += deltaY;

        const maxX = (scale * map.clientWidth - mapContainer.clientWidth) / scale;
        const maxY = (scale * map.clientHeight - mapContainer.clientHeight) / scale;
        offsetX = Math.min(maxX, Math.max(-maxX, offsetX));
        offsetY = Math.min(maxY, Math.max(-maxY, offsetY));

        dragStart = { x: event.clientX, y: event.clientY };

        requestAnimationFrame(applyTransform);
    }
}

function handleMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
}

function applyTransform() {
    map.style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
}