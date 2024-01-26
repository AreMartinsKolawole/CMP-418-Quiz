const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

// Replace this array with your 500 questions
const questions = [
    { question: 'The register that holds the address of the instruction or data to be fetched from memory is the Memory?', options: ['Data Register (MDR)', 'Address Register (MAR)', 'Accumulator'], correctAnswer: 'Address Register (MAR)'},
    { question: ' If a processor lacks a stack pointer, what does it imply about subroutine calls and interrupts?', options: ['None of the Above', 'All sequences of subroutine calls and interrupts are possible', 'All sequences of subroutine calls and interrupts are not possible'], correctAnswer: 'All sequences of subroutine calls and interrupts are possible' },
    { question: 'An _________  is part of the control lines on the bus. It signals the processor that an event requires immediate attention', options: ['Accumulator (ACC)', 'Interrupt Request', 'Status Register'], correctAnswer: 'Interrupt Request' },
    { question: 'Interrupt request keeps track of the return addresses from the interrupt service routine stored', options: ['False', 'True', 'Partially'], correctAnswer: 'True' },
    { question: 'If a processor doesnt have a stack pointer register - all the sequence of subroutine calls are', options: ['Not Possible', 'Possible', 'Delayed'], correctAnswer: 'Possible' },
   { question: 'The register that contains the data to be written into or read out of the address location is the Memory?', options: ['Register of Deeds', 'Address Register (MAR)', 'Data Register (MDR)'], correctAnswer: 'Data Register (MDR)' },
  { question: 'Storage locations in the ALU and CU are called ', options: ['Register', 'Shareholder', ' Memory'], correctAnswer: 'Register' },
  { question: 'What is the term for the number of successful memory accesses stated as a fraction?', options: ['Dirty bit', 'Hit rate', 'Binary rate'], correctAnswer: 'Hit rate'},
  { question: ' The register that holds the information before the decoder is the', options: ['Raw Facts', 'Data Register', 'Control Unit'], correctAnswer: 'Data Register' },
  { question: 'A peripheral is connected to a bus through an interface. This interface translates signals between?', options: ['The peripheral and the Bus Protocol', 'ALU and bus', ' Control Unit and CPU'], correctAnswer: 'The peripheral and the Bus Protocol' },
  { question: 'A general-purpose set of registers that can be used for various purposes is', options: ['Diatype', 'Scratchpad', 'Storage Address'], correctAnswer: 'Scratchpad' },
   { question: 'The register used in the CU to indicate the next instruction to be executed is the', options: ['Program Counter', 'Scratchpad', 'Instruction Register'], correctAnswer: 'Program Counter' },
  { question: 'Computer architecture is a set of principles and methods that define the functioning, organization, and implementation of a computer system', options: ['True', 'False', 'Not Sure'], correctAnswer: 'True' },
   { question: 'Some types of computer architecture include', options: ['No-architecture', 'Architecture', 'Reduced Instruction Set Computer'], correctAnswer: 'Reduced Instruction Set Computer' },
   { question: 'The register used as a working area in the CPU is the ', options: ['Register', 'Accumulator', ' Control Unit'], correctAnswer: 'Accumulator' },
   { question: 'What is the interrupt request line a part of?', options: ['Binary line', 'None of the Above', 'Control lines'], correctAnswer: 'Control lines'},
 { question: 'Where is the return address from the interrupt service routine stored?', options: ['Interrupt Service', 'Processor stack', 'Control lines'], correctAnswer: 'Processor stack'},
  { question: 'A structure and behavior that is observed by the user refers to the ', options: ['Computer Organization', 'Coordinates ', 'The ALU'], correctAnswer: 'Computer Organization' },
   { question: 'CSA stands for ', options: ['Computer Speed Addition', 'Coordinates Speed Addictive ', 'Computer Serial Addition'], correctAnswer: 'Computer Speed Addition' },
  { question: 'A ______ is used to reduce memory access time by storing frequently accessed data closer to the processor', options: ['Computer Speed', 'Cache', 'Flags Register'], correctAnswer: 'Cache' },
  { question: 'Operation codes (opcodes) are part of _________ language instructions that specify the operation to be performed', options: ['Machine', ' Assembler', 'Compiler'], correctAnswer: 'Machine'},
  { question: 'Instructions that will not appear in the final machine code are', options: ['High Level', 'Assembler Directives', 'Compiler'], correctAnswer: 'Assembler Directives'},
  { question: 'The function of the _______ is to hold the address of the next instruction to be fetched and executed', options: ['Program Counter', 'Instruction Register', 'Stack Pointer'], correctAnswer: 'Program Counter' },
   { question: 'The cache position is updated using dirty bits. These bits indicate if the data in the cache has been modified and needs to be written back to', options: ['Cache', 'Main Memory', 'ALU'], correctAnswer: 'Main Memory' },
  { question: 'The number of successful cache accesses, stated as a fraction, is called the hit rate. It represents the percentage of times the data was found in the cache, avoiding slower main memory access', options: ['True', 'False', 'Not Sure'], correctAnswer: 'True' },
  { question: 'The typical size of the program counter varies depending on the architecture but is commonly', options: ['64 bits', '120 bits', '32 bits'], correctAnswer: '32 bits' },
   { question: 'The signal sent to the processor after an interrupt is interrupt acknowledged. This indicates that the processor has recognized the interrupt and will start servicing it', options: ['True', 'False', 'Partially'], correctAnswer: 'True' },
  { question: 'The time between the receipt of an interrupt and its service is called', options: ['Control Logic Circuitry', 'Interrupt Latency', 'Mulitplexer'], correctAnswer: 'Interrupt Latency'},
  { question: 'A ________ system is one that must respond to events within strict time constraints. These systems are often used in control applications, robotics, and multimedia, where timely responses are crucial', options: ['Real-time processing', 'Interrupt Latency', ' Digital Signal Processing'], correctAnswer: 'Real-time processing'},
  { question: 'Converts assembly language instructions written by programmers into machine language that the processor can understand', options: ['High Level', 'Assembler', 'Compiler'], correctAnswer: 'Assembler'},
{ question: 'What is the function of the program counter?', options: ['All of the Above', 'It holds the memory for instructions', 'It holds the address for instructions'], correctAnswer: 'It holds the address for instructions'},
{ question: 'What is the bit called that signifies the completion of the cache?', options: ['Dirty bit', 'Neat bit', 'Binary bit'], correctAnswer: 'Dirty bit'},
{ question: 'What term represents instructions to perform on operands in machine language?', options: ['OP codes/operation codes', 'Sequence Code', 'All of the Above'], correctAnswer: 'OP codes/operation codes'},
{ question: 'What would not appear in the object program?', options: ['High Level directives', 'Assembler directives', 'All of the Above'], correctAnswer: 'Assembler directives'},

    
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
    const options = optionsContainer.getElementsByClassName('option');

    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('selected');
    }

    const selectedOptionIndex = currentQuestion.options.indexOf(selectedOption);

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        options[selectedOptionIndex].classList.add('correct');
    } else {
        options[selectedOptionIndex].classList.add('incorrect');
        options[currentQuestion.options.indexOf(currentQuestion.correctAnswer)].classList.add('correct');
    }

    setTimeout(() => {
        for (let i = 0; i < options.length; i++) {
            options[i].classList.remove('correct', 'incorrect');
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 1000); 
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
