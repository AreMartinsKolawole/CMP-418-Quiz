const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

// Replace this array with your 500 questions
const questions = [
    { question: 'The register that holds the address of the instruction or data to be fetched from memory is the Memory?', options: ['Data Register (MDR)', 'Address Register (MAR)', 'Accumulator'], correctAnswer: 'Address Register (MAR)'},
    { question: 'An _________  is part of the control lines on the bus. It signals the processor that an event requires immediate attention', options: ['Accumulator (ACC)', 'Interrupt Request', 'Status Register'], correctAnswer: 'Interrupt Request' },
    { question: 'interrupt request keeps track of the return addresses from the interrupt service routine stored', options: ['False', 'True', 'Partially'], correctAnswer: 'True' },
    { question: 'If a processor doesnt have a stack pointer register - all the sequence of subroutine calls are', options: ['Not Sure', 'Possible', 'Delayed'], correctAnswer: 'Possible' },
   { question: 'The register that contains the data to be written into or read out of the address location is the Memory?', options: ['Register of Deeds', 'Address Register (MAR)', 'Data Register (MDR)'], correctAnswer: 'Data Register (MDR)' },
  { question: 'Storage locations in the ALU and CU are called ', options: ['Register', 'Shareholder', ' Memory'], correctAnswer: 'Register' },
  { question: ' The register that holds the information before the decoder is the', options: ['raw facts', 'Data Register', ' control unit'], correctAnswer: 'Data Register' },
  { question: 'A peripheral is connected to a bus through an interface. This interface translates signals between?', options: ['The peripheral and the bus protocol', 'ALU and bus', ' control unit and CPU'], correctAnswer: 'The peripheral and the bus protocol' },
  { question: 'A general-purpose set of registers that can be used for various purposes is', options: ['Diatype', 'Scratchpad', 'Storage Address'], correctAnswer: 'Scratchpad' },
   { question: 'The register used in the CU to indicate the next instruction to be executed is the', options: ['Program Counter', 'scratchpad', 'Instruction Register'], correctAnswer: 'Program Counter' },
  { question: 'Computer architecture is a set of principles and methods that define the functioning, organization, and implementation of a computer system', options: ['True', 'False', 'not sure'], correctAnswer: 'True' },
   { question: 'Some types of computer architecture include', options: ['Vo-architecture', 'Architecture', 'Reduced Instruction Set Computer'], correctAnswer: 'Vo-architecture' },
   { question: 'The register used as a working area in the CPU is the ', options: ['Register', 'Accumulator', ' control unit'], correctAnswer: 'Accumulator' },
  { question: 'A structure and behavior that is observed by the user refers to the ', options: ['Computer Organization', 'Coordinates ', 'The ALU'], correctAnswer: 'Computer Organization' },
   { question: 'CSA stands for ', options: ['Computer Speed Addition', 'Coordinates Speed Addictive ', 'Computer Serial Addition'], correctAnswer: 'Computer Speed Addition' },
  { question: 'A ______ is used to reduce memory access time by storing frequently accessed data closer to the processor', options: ['Computer Speed', 'Cache', 'Flags Register'], correctAnswer: 'Cache' },
  { question: 'Operation codes (opcodes) are part of _________ language instructions that specify the operation to be performed', options: ['Machine', ' Assembler', 'Compiler'], correctAnswer: 'Machine'},
  { question: 'Instructions that will not appear in the final machine code are', options: ['High Level', 'Assembler Directives', 'Compiler'], correctAnswer: 'Assembler Directives'},
  { question: 'The function of the _______ is to hold the address of the next instruction to be fetched and executed', options: ['Program Counter', 'Instruction Register', 'Stack Pointer'], correctAnswer: 'Program Counter' },
   { question: 'The cache position is updated using dirty bits. These bits indicate if the data in the cache has been modified and needs to be written back to', options: ['Cache', 'Main Memory', 'ALU'], correctAnswer: 'Main Memory' },
  { question: 'The number of successful cache accesses, stated as a fraction, is called the hit rate. It represents the percentage of times the data was found in the cache, avoiding slower main memory access', options: ['True', 'False', 'not sure'], correctAnswer: 'True' },
  { question: 'The typical size of the program counter varies depending on the architecture but is commonly', options: ['64 bits', '120 bits', '32 bits'], correctAnswer: '32 bits' },
   { question: 'The signal sent to the processor after an interrupt is interrupt acknowledged. This indicates that the processor has recognized the interrupt and will start servicing it', options: ['True', 'False', 'Partially'], correctAnswer: 'True' },
  { question: 'The time between the receipt of an interrupt and its service is called', options: ['Control Logic Circuitry', 'Interrupt Latency', 'Mulitplexer'], correctAnswer: 'Interrupt Latency'},
  { question: 'A ________ system is one that must respond to events within strict time constraints. These systems are often used in control applications, robotics, and multimedia, where timely responses are crucial', options: ['Real-time processing', 'Interrupt Latency', ' Digital Signal Processing'], correctAnswer: 'Real-time processing'},
  { question: 'converts assembly language instructions written by programmers into machine language that the processor can understand', options: ['High Level', 'Assembler', 'Compiler'], correctAnswer: 'Assembler'},
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';
    for (let i = 0; i < currentQuestion.options.length; i++) {
        const option = document.createElement('div');
        option.className = 'option';
        option.textContent = currentQuestion.options[i];
        option.onclick = () => checkAnswer(currentQuestion.options[i]);
        optionsContainer.appendChild(option);
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;
    nextButton.style.display = 'none';
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endQuiz();
    }
}

// Start the quiz
startQuiz();
