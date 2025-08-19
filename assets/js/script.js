// Cuestionarios organizados por módulos
        const quizzes = [
            {
                module: "Módulo 1: Introducción a Bash Scripting",
                questions: [
                    {
                        question: "¿Cuál es el propósito principal de Bash scripting?",
                        options: [
                            "Instalar software en el sistema.",
                            "Automatizar tareas repetitivas y secuencias de comandos.",
                            "Navegar por internet de forma segura.",
                            "Crear interfaces gráficas para aplicaciones."
                        ],
                        correctAnswer: 1,
                        explanation: "Bash scripting se usa para combinar múltiples comandos en un solo archivo, lo que permite automatizar tareas que de otra forma serían manuales y repetitivas."
                    },
                    {
                        question: "¿Qué es el 'shebang' y para qué sirve?",
                        options: [
                            "El comando para cambiar los permisos de un archivo.",
                            "Una variable que almacena el nombre del script.",
                            "La primera línea de un script (#!) que le dice al sistema qué intérprete usar.",
                            "Un tipo de comentario para documentar el código."
                        ],
                        correctAnswer: 2,
                        explanation: "El 'shebang' (#!/bin/bash) es la primera línea del script. Indica al sistema operativo que debe usar el intérprete de Bash para ejecutar el archivo."
                    },
                    {
                        question: "¿Qué comando se utiliza para dar a un script el permiso de ejecución?",
                        options: [
                            "chmod -x mi_script.sh",
                            "run mi_script.sh",
                            "chmod +x mi_script.sh",
                            "execute mi_script.sh"
                        ],
                        correctAnswer: 2,
                        explanation: "El comando `chmod +x` es el que otorga permisos de ejecución a un archivo. Sin este permiso, no podrás ejecutarlo directamente con `./`."
                    },
                    {
                        question: "¿Qué símbolo se usa para los comentarios de una sola línea en Bash?",
                        options: [
                            "//",
                            "#",
                            "/* */",
                            "@"
                        ],
                        correctAnswer: 1,
                        explanation: "En Bash, cualquier línea que comience con el símbolo `#` es tratada como un comentario y es ignorada por el intérprete."
                    },
                    {
                        question: "Si tienes un script llamado `script.sh` con permisos de ejecución, ¿cuál de las siguientes opciones NO es una forma correcta de ejecutarlo?",
                        options: [
                            "./script.sh",
                            "sh script.sh",
                            "run script.sh",
                            "bash script.sh"
                        ],
                        correctAnswer: 2,
                        explanation: "El comando `run` no existe como una forma estándar para ejecutar scripts en Bash. Las opciones correctas son `./script.sh` (si tiene permisos) o llamando al intérprete directamente con `bash` o `sh`."
                    }
                ]
            },
            {
                module: "Módulo 2: Fundamentos de Bash",
                questions: [
                    {
                        question: "¿Cuál es la sintaxis correcta para asignar un valor a una variable en Bash?",
                        options: [
                            "variable = 'valor'",
                            "declare variable='valor'",
                            "variable='valor'",
                            "set variable 'valor'"
                        ],
                        correctAnswer: 2,
                        explanation: "En Bash, las variables se asignan directamente, sin espacios entre el nombre de la variable, el signo `=` y el valor. Los valores de texto se encierran entre comillas."
                    },
                    {
                        question: "¿Qué comando se utiliza para leer la entrada del usuario y guardarla en una variable?",
                        options: [
                            "input",
                            "prompt",
                            "read",
                            "get_input"
                        ],
                        correctAnswer: 2,
                        explanation: "El comando `read` se utiliza para leer una línea de la entrada estándar y almacenarla en una variable. La opción `-p` permite mostrar un mensaje antes de la entrada."
                    },
                    {
                        question: "¿Qué hace el operador `>>` cuando se utiliza con un comando?",
                        options: [
                            "Redirige la salida del comando y sobrescribe el archivo.",
                            "Redirige tanto la salida como los errores.",
                            "Conecta la salida de un comando a la entrada de otro.",
                            "Redirige la salida del comando y la añade al final de un archivo."
                        ],
                        correctAnswer: 3,
                        explanation: "El operador `>>` (redirección de adición) se usa para enviar la salida de un comando a un archivo, pero en lugar de sobrescribir su contenido, lo añade al final del archivo."
                    },
                    {
                        question: "Para acceder al valor de una variable llamada `usuario`, ¿qué sintaxis se debe usar?",
                        options: [
                            "usuario",
                            "$usuario",
                            "&usuario",
                            "echo usuario"
                        ],
                        correctAnswer: 1,
                        explanation: "Para utilizar o imprimir el valor de una variable, siempre se debe anteponer el símbolo `$` a su nombre. Por ejemplo, `echo $usuario`."
                    }
                ]
            },
            {
                module: "Módulo 3: Control de Flujo",
                questions: [
                    {
                        question: "En una sentencia `if`, ¿qué operador se usa para comparar si un número es 'menor o igual que' otro?",
                        options: [
                            "-le",
                            "<=",
                            "-lt",
                            "-eq"
                        ],
                        correctAnswer: 0,
                        explanation: "En Bash, se usan operadores específicos para comparaciones numéricas. `-le` significa 'less than or equal to' (menor o igual que)."
                    },
                    {
                        question: "¿Cuál es el comando que se usa para salir de un bucle por completo?",
                        options: [
                            "exit",
                            "return",
                            "continue",
                            "break"
                        ],
                        correctAnswer: 3,
                        explanation: "El comando `break` se utiliza para terminar la ejecución del bucle actual y continuar con la siguiente línea de código después del bucle."
                    },
                    {
                        question: "¿Cuál de las siguientes opciones representa un bucle `for` de estilo C?",
                        options: [
                            "for i in {1..5}",
                            "for ((i=0; i<5; i++))",
                            "while [ $i -lt 5 ]",
                            "for i in $(ls)"
                        ],
                        correctAnswer: 1,
                        explanation: "El formato `for ((...))` es la sintaxis de bucle `for` inspirada en el lenguaje C, común en Bash para iteraciones basadas en índices numéricos."
                    },
                    {
                        question: "¿Qué hace el comando `until`?",
                        options: [
                            "Repite un bloque de código hasta que una condición se vuelve falsa.",
                            "Repite un bloque de código hasta que una condición se vuelve verdadera.",
                            "Se ejecuta solo si una condición es falsa.",
                            "Se usa para iterar sobre una lista de elementos."
                        ],
                        correctAnswer: 1,
                        explanation: "A diferencia de un bucle `while`, que se ejecuta 'mientras' una condición es verdadera, un bucle `until` se ejecuta 'hasta que' la condición es verdadera."
                    }
                ]
            },
            {
                module: "Módulo 4: Funciones y Modularidad",
                questions: [
                    {
                        question: "¿Qué palabra clave se usa para crear una variable que solo es visible dentro de una función?",
                        options: [
                            "global",
                            "private",
                            "local",
                            "var"
                        ],
                        correctAnswer: 2,
                        explanation: "La palabra clave `local` se utiliza dentro de una función para declarar una variable que solo existirá dentro de su ámbito, evitando conflictos con variables con el mismo nombre en otras partes del script."
                    },
                    {
                        question: "¿Cómo se llama una función llamada `mi_funcion`?",
                        options: [
                            "call mi_funcion()",
                            "run mi_funcion",
                            "mi_funcion()",
                            "mi_funcion"
                        ],
                        correctAnswer: 3,
                        explanation: "En Bash, simplemente se llama a una función escribiendo su nombre. Los paréntesis son opcionales y a menudo se omiten."
                    },
                    {
                        question: "Si una función devuelve un código de salida, ¿cómo se puede acceder a él?",
                        options: [
                            "Con el comando `return`",
                            "Con la variable especial `$!`",
                            "Con la variable especial `$$`",
                            "Con la variable especial `$?`"
                        ],
                        correctAnswer: 3,
                        explanation: "La variable especial `$?` siempre contiene el código de salida del último comando o función que se ejecutó. Un valor de `0` significa éxito y cualquier otro valor indica un fallo."
                    }
                ]
            },
            {
                module: "Módulo 5: Manejo de Errores y Depuración",
                questions: [
                    {
                        question: "¿Qué comando hace que un script termine inmediatamente si un comando falla (no devuelve un código de salida de 0)?",
                        options: [
                            "exit",
                            "set -e",
                            "trap 'exit' ERR",
                            "handle_error"
                        ],
                        correctAnswer: 1,
                        explanation: "El comando `set -e` es una forma sencilla de asegurar que un script se detenga en caso de un error en cualquier comando, evitando que el script continúe con resultados inesperados."
                    },
                    {
                        question: "¿Qué hace `set -x`?",
                        options: [
                            "Muestra un mensaje de éxito al finalizar el script.",
                            "Imprime el valor de todas las variables en cada línea.",
                            "Habilita el modo de depuración, mostrando cada comando que se ejecuta.",
                            "Inicia un proceso en segundo plano."
                        ],
                        correctAnswer: 2,
                        explanation: "La opción `-x` de `set` activa el modo de depuración. Es extremadamente útil porque muestra cada comando que se ejecuta con un `+` al principio, lo que facilita el seguimiento del flujo del script."
                    },
                    {
                        question: "¿Qué variable especial se usa para saber el código de salida del último comando ejecutado?",
                        options: [
                            "$0",
                            "$!",
                            "$$",
                            "$?"
                        ],
                        correctAnswer: 3,
                        explanation: "La variable `$?` almacena el código de salida del último comando que se ejecutó. Un valor de `0` indica éxito, mientras que cualquier valor diferente indica que ocurrió un error."
                    }
                ]
            },
            {
                module: "Módulo 6: Automatización Avanzada y Casos Prácticos",
                questions: [
                    {
                        question: "¿Qué herramienta se usa para programar tareas para que se ejecuten automáticamente a intervalos regulares en Linux?",
                        options: [
                            "scheduler",
                            "crontab",
                            "at",
                            "task_manager"
                        ],
                        correctAnswer: 1,
                        explanation: "El comando `crontab` es la forma estándar de gestionar las tareas programadas (cron jobs). Permite editar un archivo que contiene las tareas a ejecutar en momentos específicos."
                    },
                    {
                        question: "¿Cómo se puede obtener el número de elementos en un array llamado `mi_array`?",
                        options: [
                            "${#mi_array}",
                            "len(mi_array)",
                            "count mi_array",
                            "${#mi_array[@]}"
                        ],
                        correctAnswer: 3,
                        explanation: "La sintaxis `${#mi_array[@]}` devuelve el número total de elementos en el array `mi_array`. Usar `${#mi_array}` solo devolvería la longitud del primer elemento."
                    },
                    {
                        question: "Para conectar la salida de un comando con la entrada de otro, ¿qué símbolo se usa?",
                        options: [
                            "&",
                            "|",
                            ">",
                            "&&"
                        ],
                        correctAnswer: 1,
                        explanation: "El símbolo de pipe o tubería (`|`) se utiliza para 'canalizar' la salida estándar del comando de la izquierda hacia la entrada estándar del comando de la derecha."
                    },
                    {
                        question: "Si quieres reemplazar texto en un archivo usando expresiones regulares, ¿qué comando es el más adecuado?",
                        options: [
                            "grep",
                            "tr",
                            "sed",
                            "awk"
                        ],
                        correctAnswer: 2,
                        explanation: "El comando `sed` (Stream Editor) es una herramienta muy poderosa para buscar y reemplazar texto en archivos, especialmente cuando se usan expresiones regulares."
                    }
                ]
            }
        ];

        let currentModuleIndex = 0;
        let currentQuestionIndex = 0;
        let score = 0;
        let answeredCorrectly = false;

        const appContainer = document.getElementById('app-container');
        const moduleSelectionContainer = document.getElementById('module-selection-container');
        const moduleButtonsArea = document.getElementById('module-buttons-area');
        const quizContainer = document.getElementById('quiz-container');
        const moduleTitle = document.getElementById('module-title');
        const questionCounter = document.getElementById('question-counter');
        const questionText = document.getElementById('question-text');
        const optionsArea = document.getElementById('options-area');
        const explanationArea = document.getElementById('explanation-area');
        const explanationText = document.getElementById('explanation-text');
        const nextButton = document.getElementById('next-button');
        const backButton = document.getElementById('back-button');

        // Función para mostrar la vista de selección de módulos
        function showModuleSelection() {
            moduleSelectionContainer.classList.remove('hidden');
            quizContainer.classList.add('hidden');
            moduleButtonsArea.innerHTML = '';
            
            quizzes.forEach((quiz, index) => {
                const button = document.createElement('button');
                button.textContent = quiz.module;
                button.classList.add('module-button');
                button.addEventListener('click', () => startQuiz(index));
                moduleButtonsArea.appendChild(button);
            });
        }

        // Función para comenzar un cuestionario específico
        function startQuiz(moduleIndex) {
            currentModuleIndex = moduleIndex;
            currentQuestionIndex = 0;
            score = 0;
            moduleSelectionContainer.classList.add('hidden');
            quizContainer.classList.remove('hidden');
            backButton.classList.remove('hidden');
            showQuestion();
        }

        // Función para mostrar la pregunta actual
        function showQuestion() {
            const currentQuiz = quizzes[currentModuleIndex];
            
            // Si el cuestionario actual ha terminado, mostrar resultados y volver
            if (currentQuestionIndex >= currentQuiz.questions.length) {
                showResults();
                return;
            }

            const currentQuestion = currentQuiz.questions[currentQuestionIndex];

            // Actualizar el título del módulo
            moduleTitle.textContent = currentQuiz.module;
            // Actualizar el contador de preguntas
            questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentQuiz.questions.length}`;
            // Mostrar la pregunta
            questionText.textContent = currentQuestion.question;
            // Limpiar las opciones anteriores
            optionsArea.innerHTML = '';
            // Ocultar la explicación y el botón de siguiente
            explanationArea.classList.add('hidden');
            nextButton.classList.add('hidden');
            answeredCorrectly = false;

            // Generar los botones de opción
            currentQuestion.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('quiz-button');
                button.addEventListener('click', () => handleAnswer(index));
                optionsArea.appendChild(button);
            });
        }

        // Función para manejar la selección de la respuesta
        function handleAnswer(selectedIndex) {
            // Evitar múltiples clics en la misma pregunta
            if (answeredCorrectly) {
                return;
            }

            const currentQuiz = quizzes[currentModuleIndex];
            const currentQuestion = currentQuiz.questions[currentQuestionIndex];
            const isCorrect = selectedIndex === currentQuestion.correctAnswer;
            
            // Marcar todas las opciones como deshabilitadas
            const optionButtons = optionsArea.querySelectorAll('button');
            optionButtons.forEach(button => {
                button.disabled = true;
            });
            
            // Marcar la respuesta seleccionada
            const selectedButton = optionButtons[selectedIndex];
            selectedButton.classList.add('selected');

            if (isCorrect) {
                selectedButton.classList.add('correct');
                score++;
                answeredCorrectly = true;
            } else {
                selectedButton.classList.add('incorrect');
            }

            // Mostrar explicación
            explanationText.textContent = currentQuestion.explanation;
            explanationArea.classList.remove('hidden');

            // Mostrar el botón de siguiente
            nextButton.classList.remove('hidden');
        }

        // Función para pasar a la siguiente pregunta
        function nextQuestion() {
            currentQuestionIndex++;
            showQuestion();
        }

        // Función para mostrar los resultados finales
        function showResults() {
            const totalQuestions = quizzes[currentModuleIndex].questions.length;
            quizContainer.innerHTML = `
                <div class="card">
                    <h1 style="font-size: 2.25rem;">¡Cuestionario Completado!</h1>
                    <p style="font-size: 1.25rem; margin-bottom: 1rem;">Tu puntuación en este módulo es: <span style="color: #3b82f6; font-weight: bold;">${score}</span> de <span style="color: #3b82f6; font-weight: bold;">${totalQuestions}</span></p>
                    <p style="font-size: 1rem; color: #4b5563; margin-bottom: 2rem;">¡Excelente trabajo! Puedes volver al menú principal para seleccionar otro módulo.</p>
                    <button id="restart-button" class="next-button" style="width: auto;">
                        Volver al Menú Principal
                    </button>
                </div>
            `;
            document.getElementById('restart-button').addEventListener('click', () => {
                showModuleSelection();
            });
        }
        
        // Event listeners
        nextButton.addEventListener('click', nextQuestion);
        backButton.addEventListener('click', showModuleSelection);

        // Iniciar la aplicación mostrando la selección de módulos
        showModuleSelection();