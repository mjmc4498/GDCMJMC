/**
 * Docente Experto: "Como educador, noto que lanzar todas las preguntas juntas abruma al estudiante. 
 * ¡Hagámoslo paso a paso, dando retroalimentación inmediata para que el aprendizaje sea significativo!"
 * 
 * Líder de Gobierno TI (UX): "Excelente idea, profesor. Lo encapsularé en un componente Modal elegante 
 * con Glassmorphism para mantener el contexto del módulo de fondo sin que pierdan su lectura previa."
 */

document.addEventListener('DOMContentLoaded', () => {
    // Identificar el módulo actual
    const pathname = window.location.pathname;
    const match = pathname.match(/(\d+)-[a-z]+\.html/);
    if (!match) return;

    const moduleId = parseInt(match[1]);
    const moduleQuestions = quizData[moduleId];
    if (!moduleQuestions) return;

    // 1. Inyectar botón disparador al final del content
    const mainContent = document.querySelector('.module-content');
    const introSection = document.createElement('div');
    introSection.style.marginTop = "3rem";
    introSection.style.paddingTop = "2rem";
    introSection.style.borderTop = "2px dashed #e2e8f0";
    introSection.style.textAlign = "center";
    
    // Si ya completó, mostrar mensaje, sino botón
    const isCompleted = localStorage.getItem('module_' + moduleId + '_progress') === "100";
    
    introSection.innerHTML = `
        <h3 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.5rem;">🎓 Verificación de Aprendizaje</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Como en todo buen Gobierno de Datos, necesitamos validar la calidad de la información aprendida.</p>
        ${isCompleted 
            ? '<div style="background: #dcfce7; color: #166534; padding: 1rem; border-radius: 0.5rem; font-weight: bold; display: inline-block;">✅ Módulo Aprobado y Certificado</div><br><button id="btn-open-quiz" class="btn btn-outline" style="margin-top: 1rem;">Repasar Examen</button>' 
            : '<button id="btn-open-quiz" class="btn btn-primary" style="font-size: 1.2rem; padding: 1rem 2.5rem; box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);">Iniciar Evaluación Interactiva</button>'
        }
    `;
    mainContent.appendChild(introSection);

    // 2. Construir el Modal (Ventana Emergente) en el DOM
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'quiz-modal-overlay';
    
    let dotsHtml = moduleQuestions.map((_, i) => `<div class="quiz-dot" id="dot-${i}"></div>`).join('');

    modalOverlay.innerHTML = `
        <div class="quiz-modal">
            <button class="quiz-close-btn">&times;</button>
            
            <div class="quiz-header">
                <div class="quiz-header-icon">🧠</div>
                <h2>Evaluación - Módulo ${moduleId}</h2>
                <p style="color: var(--text-muted);">Lee con cuidado, analiza y decide.</p>
            </div>

            <div class="quiz-progress">
                <span id="quiz-progress-text">Pregunta 1 de ${moduleQuestions.length}</span>
                <div class="quiz-dots">${dotsHtml}</div>
            </div>

            <div id="quiz-questions-wrapper"></div>
            
            <div id="quiz-feedback-box" style="display:none; margin: 1.5rem 0; padding: 1.5rem; border-radius: 0.75rem; text-align: center; font-size: 1.1rem; font-weight: 600;"></div>

            <div class="quiz-controls">
                <button id="btn-next-question" class="btn btn-primary" style="display: none; width: 100%;">Siguiente Prengunta</button>
                <button id="btn-check-answer" class="btn btn-primary" style="width: 100%;">Verificar Respuesta</button>
            </div>
            
            <div id="quiz-final-results" style="display:none; text-align: center;"></div>
        </div>
    `;
    document.body.appendChild(modalOverlay);

    // Variables de estado del examen
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOptionIndex = null;
    let questionAnswered = false;

    // Elementos del DOM del Modal
    const questionsWrapper = document.getElementById('quiz-questions-wrapper');
    const btnCheck = document.getElementById('btn-check-answer');
    const btnNext = document.getElementById('btn-next-question');
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const finalResults = document.getElementById('quiz-final-results');
    const progressText = document.getElementById('quiz-progress-text');
    
    // 3. Renderizar todas las preguntas ocultas
    moduleQuestions.forEach((qObj, qIndex) => {
        const qContainer = document.createElement('div');
        qContainer.className = 'quiz-question-container';
        qContainer.id = 'question-container-' + qIndex;
        if(qIndex === 0) qContainer.classList.add('active');

        let optionsHtml = qObj.options.map((opt, optIndex) => `
            <div class="quiz-option" data-qindex="${qIndex}" data-optindex="${optIndex}">
                <strong>${String.fromCharCode(65 + optIndex)} )</strong> ${opt}
            </div>
        `).join('');

        qContainer.innerHTML = `
            <h3>${qIndex + 1}. ${qObj.q}</h3>
            <div class="quiz-options-wrapper">${optionsHtml}</div>
        `;
        questionsWrapper.appendChild(qContainer);
    });

    // Delegación de eventos para selección de opciones
    questionsWrapper.addEventListener('click', (e) => {
        const optionEl = e.target.closest('.quiz-option');
        if(!optionEl || questionAnswered) return; // Si ya respondió o no hizo click en opción, ignorar

        // Limpiar selecciones previas de esta pregunta
        const siblings = optionEl.parentElement.querySelectorAll('.quiz-option');
        siblings.forEach(s => s.classList.remove('selected'));
        
        optionEl.classList.add('selected');
        selectedOptionIndex = parseInt(optionEl.dataset.optindex);
    });

    // Lógica para verificar la respuesta
    btnCheck.addEventListener('click', () => {
        if(selectedOptionIndex === null) {
            alert("Profesor: ¡Debes seleccionar una opción antes de verificar!");
            return;
        }

        questionAnswered = true;
        btnCheck.style.display = 'none';
        
        const qObj = moduleQuestions[currentQuestionIndex];
        const isCorrect = selectedOptionIndex === qObj.a;
        
        // Colorear opciones
        const currentContainer = document.getElementById('question-container-' + currentQuestionIndex);
        const options = currentContainer.querySelectorAll('.quiz-option');
        
        options.forEach(opt => {
            const idx = parseInt(opt.dataset.optindex);
            if(idx === qObj.a) {
                opt.classList.add('correct'); // La correcta brilla verde
            } else if (idx === selectedOptionIndex && !isCorrect) {
                opt.classList.add('wrong'); // La elegida incorrecta brilla rojo
            }
        });

        // Feedback
        feedbackBox.style.display = 'block';
        const dot = document.getElementById('dot-' + currentQuestionIndex);

        if(isCorrect) {
            score++;
            dot.classList.add('correct');
            feedbackBox.style.background = '#dcfce7';
            feedbackBox.style.color = '#166534';
            feedbackBox.innerHTML = `✅ ¡Excelente análisis!`;
        } else {
            dot.classList.add('wrong');
            feedbackBox.style.background = '#fee2e2';
            feedbackBox.style.color = '#991b1b';
            feedbackBox.innerHTML = `❌ Incorrecto. La respuesta era la <strong>${String.fromCharCode(65 + qObj.a)}</strong>.`;
        }

        // Mostrar botón de Siguiente (o Finalizar si es la última)
        btnNext.style.display = 'block';
        if(currentQuestionIndex === moduleQuestions.length - 1) {
            btnNext.textContent = "Ver Resultados Finales";
        }
    });

    // Lógica para siguiente pregunta
    btnNext.addEventListener('click', () => {
        document.getElementById('question-container-' + currentQuestionIndex).classList.remove('active');
        feedbackBox.style.display = 'none';
        questionAnswered = false;
        selectedOptionIndex = null;
        btnNext.style.display = 'none';

        currentQuestionIndex++;

        if(currentQuestionIndex < moduleQuestions.length) {
            // Mostrar siguiente
            document.getElementById('question-container-' + currentQuestionIndex).classList.add('active');
            progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${moduleQuestions.length}`;
            document.getElementById('dot-' + currentQuestionIndex).classList.add('active');
            btnCheck.style.display = 'block';
        } else {
            // Mostrar resultados
            progressText.textContent = "Evaluación Concluida";
            questionsWrapper.style.display = 'none';
            document.querySelector('.quiz-progress').style.display = 'none';
            finalResults.style.display = 'block';

            const percentage = (score / moduleQuestions.length) * 100;
            const passed = score >= 4;

            let resultHtml = `
                <div style="font-size: 4rem; margin-bottom: 1rem;">${passed ? '🏆' : '📚'}</div>
                <h3 style="font-size: 2rem; color: var(--primary); margin-bottom: 0.5rem;">Obtuviste ${score} de ${moduleQuestions.length}</h3>
                <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 2rem;">Rendimiento: <strong>${percentage}%</strong></p>
            `;

            if(passed) {
                resultHtml += `
                    <p style="color: #10b981; font-weight: bold; font-size: 1.2rem; padding: 1rem; background: #dcfce7; border-radius: 0.5rem; margin-bottom: 1.5rem;">
                        ¡Aprobado! Has certificado tus conocimientos en este módulo.
                    </p>
                    <a href="../index.html" class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2rem;">Volver al Menú Principal</a>
                `;
                localStorage.setItem('module_' + moduleId + '_progress', 100);
                
                // Verificar certificado global
                let docsCompleted = 0;
                for(let i=1; i<=12; i++){
                    if(localStorage.getItem('module_' + i + '_progress') === "100") docsCompleted++;
                }
                if(docsCompleted === 12) {
                    localStorage.setItem('course_completed', 'true');
                }
            } else {
                resultHtml += `
                    <p style="color: #ef4444; font-weight: bold; font-size: 1.2rem; padding: 1rem; background: #fee2e2; border-radius: 0.5rem; margin-bottom: 1.5rem;">
                        No alcanzaste el 80% requerido. Repasa el material y vuelve a intentarlo.
                    </p>
                    <button id="btn-retry-quiz" class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2rem;">Reintentar Evaluación</button>
                `;
            }

            finalResults.innerHTML = resultHtml;

            // Lógica para reintentar
            if(!passed) {
                document.getElementById('btn-retry-quiz').addEventListener('click', resetQuiz);
            }
        }
    });

    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        selectedOptionIndex = null;
        questionAnswered = false;
        
        finalResults.style.display = 'none';
        questionsWrapper.style.display = 'block';
        document.querySelector('.quiz-progress').style.display = 'flex';
        progressText.textContent = `Pregunta 1 de ${moduleQuestions.length}`;
        btnCheck.style.display = 'block';
        btnNext.style.display = 'none';

        // Reset DOM elementos (remover clases correct, wrong, selected)
        const allOptions = document.querySelectorAll('.quiz-option');
        allOptions.forEach(opt => opt.classList.remove('selected', 'correct', 'wrong'));
        
        const allContainers = document.querySelectorAll('.quiz-question-container');
        allContainers.forEach(c => c.classList.remove('active'));
        document.getElementById('question-container-0').classList.add('active');

        const allDots = document.querySelectorAll('.quiz-dot');
        allDots.forEach((d, i) => {
            d.className = 'quiz-dot';
            if(i===0) d.classList.add('active');
        });
    }

    // Modal Triggers
    document.getElementById('btn-open-quiz').addEventListener('click', () => {
        resetQuiz();
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
    });

    document.querySelector('.quiz-close-btn').addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Si aprobó, recargar para actualizar banner
        if(score >= 4 && currentQuestionIndex === moduleQuestions.length) {
            window.location.reload();
        }
    });

    // Close on click outside
    modalOverlay.addEventListener('click', (e) => {
        if(e.target === modalOverlay) {
            document.querySelector('.quiz-close-btn').click();
        }
    });
});
