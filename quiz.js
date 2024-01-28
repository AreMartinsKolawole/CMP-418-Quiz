const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    { question: 'The type of leader known to be very open-minded is?', options: ['Authoritative',  'Verbose',  'Empathetic',  'Bogus'], correctAnswer: 'Empathetic'},
    { question: 'The A in SMART method of setting goals stands for?', options: ['Attention',  'Attainable',  'Actual',  'Action'], correctAnswer: 'Attainable'},
    { question: 'When I get to the top I will no longer be limited. This is known as?', options: ['Freedom Myth',  'Influence Myth',  'Position Myth',  'Destination Myth'], correctAnswer: 'Freedom Myth'},
    { question: 'The following except one is a concrete thing leaders can do to address common challenges', options: ['Delegating',  'Gaining recognition',  'Gaining role clarity',  'Setting goals'], correctAnswer: 'Gaining recognition'},
    { question: 'All great leaders are born great', options: ['All of the above',  'Not sure',  'TRUE',  'FALSE'], correctAnswer: 'FALSE'},
    { question: 'The most important part of communication is ___________________ ', options: ['Empathy',  'Listening',  'Gesticulation',  'Talking'], correctAnswer: 'Listening'},
    { question: 'A distinct phase of a companys growth is known as', options: ['Maturity',  'Bootstrapping',  'Development',  'Scalability'], correctAnswer: 'Maturity'},
    { question: 'If I were on top then people would follow me. This is known as?', options: ['Influence Myth',  'Destination Myth',  'Position Myth',  'Freedom Myth'], correctAnswer: 'Influence Myth'},
    { question: 'The true measure of leadership is _________ ', options: ['Development',  'Respect',  'Influence',  'Progress'], correctAnswer: 'Influence'},
    { question: 'The terminology new- normal was first being used during the aftermath of what occurrence?' , options: ['The global pandemic',  'The great depression',  'The global recession',  'The great revolution'], correctAnswer: 'The global recession'},
    {
        question: 'Every follower can become a great leader',
        options: ['FALSE', 'None of the above', 'Not sure', 'TRUE'],
        correctAnswer: 'TRUE'
        },
        {
        question: 'The Challenge of managing mobilizing understanding and leading change is known as',
        options: ['Leader Change', 'Mutual Change', 'Guiding Change', 'Benefit Change'],
        correctAnswer: 'Guiding Change'
        },
        {
        question: 'The S in SMART method of setting goals stand for ',
        options: ['Specific', 'System', 'Sound', 'Shine'],
        correctAnswer: 'Specific'
        },
        {
        question: 'A leader with vision exhibits all the following except___________',
        options: ['Direction', 'Decision', 'Discretion', 'Dillydallying'],
        correctAnswer: 'Dillydallying'
        },
        {
        question: 'Effective communication requires the following except',
        options: ['Genuflection', 'Illustration', 'Illustration', 'Affirmation'],
        correctAnswer: 'Genuflection'
        },
        {
        question: 'The cornerstone of all other leadership qualities is ________________',
        options: ['Communication', 'Integrity', 'Expertise', 'Confidence'],
        correctAnswer: 'Integrity'
        },
        {
        question: 'A leader who is humble is seen by team members as _____________________',
        options: ['sober', 'vulnerable', 'Effective', 'Submissive'],
        correctAnswer: 'vulnerable'
        },
        {
        question: 'When I get to the top I will learn to lead. This is known as?',
        options: ['Position Myth', 'Destination Myth', 'Freedom Myth', 'Influence Myth'],
        correctAnswer: 'Destination Myth'
        },
        {
        question: 'A Good leader helps in mentoring and _______ employees',
        options: ['Rebuking', 'Rebranding', 'Promoting', 'Coaching'],
        correctAnswer: 'Coaching'
        },
        {
        question: 'The T in SMART method of setting goals stands for?',
        options: ['Total', 'Timed', 'Transparent', 'Timid'],
        correctAnswer: 'Timed'
        },
        {
            question: 'The terminology new- normal was first being used during the aftermath of what occurrence?',
            options: ['The great depression', 'The great revolution', 'The global recession', 'The global pandemic'],
            correctAnswer: 'The global recession'
            },
            {
            question: 'The required visa type for students who intend to study in the U.S is known as',
            options: ['Vocational Visa', 'Exchange visitor visa', 'Student academic visa', 'Immigrant Visa'],
            correctAnswer: 'Student academic visa'
            },
            {
            question: 'One of these is known to be among the Seven-Fold Challenge of leadership',
            options: ['Financial Challenge', 'Ego Challenge', 'Talent Challenge', 'Temptation Challenge'],
            correctAnswer: 'Ego Challenge'
            },
            {
            question: 'You can fund your idea through one of the following',
            options: ['Product concept', 'Assistantship’s', 'Crowd funding', 'Interview'],
            correctAnswer: 'Crowd funding'
            },
            {
            question: 'The type of leader known to be very open-minded is________________',
            options: ['Empathetic', 'Authoritative', 'Bogus', 'Verbose'],
            correctAnswer: 'Empathetic'
            },
            {
            question: 'The first covid-19 vaccine by Pfizer was produced by',
            options: ['A Nigerian', 'A Chinese', 'An American', 'A Ghanian'],
            correctAnswer: 'A Nigerian'
            },
            {
            question: 'Potential leaders must discover that _______________ has little to do with genuine leadership',
            options: ['Certificate', 'Position', 'Money', 'Time'],
            correctAnswer: 'Position'
            },
            {
            question: 'The process of entrusting a task or responsibility to another person who is less senior than oneself is known as?',
            options: ['Home Work', 'Assignment', 'Duty', 'Delegating'],
            correctAnswer: 'Delegating'
            },
            {
            question: 'It was the advice of _____________when he said A good leader takes little more than his share of the blame and little less than his share of the credit',
            options: ['Steve Jobs', 'Arnold Glasow', 'Donald Trump', 'Pastor W.F. Kumuyi'],
            correctAnswer: 'Arnold Glasow'
            },
            {
            question: 'A leader who values what others have to say is?',
            options: ['Understanding', 'Empowering', 'Listening', 'Navigating'],
            correctAnswer: 'Listening'
            },
            {
            question: 'Which of the following is not a type of graduate assistantship?',
            options: ['Administrative assistantship', 'Full time Appointment as a Lecturer', 'Teaching assistantship', 'Research assistantship'],
            correctAnswer: 'Full time Appointment as a Lecturer'
            },
            {
            question: ' and ________ are necessary to keep leaders and team members on track',
            options: ['Deadlines and Reward', 'Check and Balance', 'Timelines and Deadlines', 'Timelines and Date'],
            correctAnswer: 'Timelines and Deadlines'
            },
            {
            question: 'If I were on top then people would follow me. This is known as?',
            options: ['Destination Myth', 'Position Myth', 'Influence Myth', 'Freedom Myth'],
            correctAnswer: 'Influence Myth'
            },
            {
            question: 'The U.S. government-approved form certifying that a student has been admitted to a full time study programme with sufficient financial resources is known as',
            options: ['DS-160 form', 'T-40 form', 'I-20 form', 'DS-117 form'],
            correctAnswer: 'I-20 form'
            },
            {
            question: 'Management is about persuading people to do things they do not want do while leadership is about inspiring people to do things, they never thought they could. was said by',
            options: ['Andrew Jobs', 'Pastor W.F. Kumuyi', 'Steve Jobs', 'John Maxwell'],
            correctAnswer: 'Steve Jobs'
            },
            {
            question: 'Which of the following is a required document for your student visa application?',
            options: ['Company registration certificate', 'Pension book', 'International passport', 'NIN slip'],
            correctAnswer: 'International passport'
            },
            {
            question: 'When I get to the top I will no longer be limited. This is known as?',
            options: ['Position Myth', 'Freedom Myth', 'Influence Myth', 'Destination Myth'],
            correctAnswer: 'Freedom Myth'
            },
            {
            question: 'Learning to lead before attaining a leadership position makes a',
            options: ['Selfish leader', 'Successful leader', 'Over Zealous leader', 'Over-Knowledgeable leader'],
            correctAnswer: 'Successful leader'
            },
            {
            question: '__________defined Integrity as doing the right thing even when no one is watching',
            options: ['Edwin Donald', 'C.S.Lewis', 'John C Maxwell', 'Barack Obama'],
            correctAnswer: 'C.S.Lewis'
            },
            {
            question: 'The following are the ways to get funded for a graduate degree programme in the U.S.A except',
            options: ['Venture capital funds', 'Graduate Assistanship', 'Schorlarship', 'Self funding'],
            correctAnswer: 'Venture capital funds'
            },
            {
                question: 'The A in SMART method of setting goals stands for what?',
                options: ['Attention', 'Attainable', 'Actual', 'Action'],
                correctAnswer: 'Attainable'
                },
                {
                question: 'A leader who gives others the power to lead is?',
                options: ['Empowering', 'Connecting', 'Integrity', 'Understanding'],
                correctAnswer: 'Empowering'
                },
                {
                question: '_______ goals are targets that can be quantified to assess progress',
                options: ['Realistic', 'Tangible', 'Measurable', 'Timed'],
                correctAnswer: 'Measurable'
                },
                {
                question: 'The type of leader known to be very open-minded is________________',
                options: ['Bogus', 'Verbose', 'Authoritative', 'Empathetic'],
                correctAnswer: 'Empathetic'
                },
                {
                question: 'When I get to the top I will learn to lead. This is known as___________________________',
                options: ['Freedom Myth', 'Destination Myth', 'Position Myth', 'Influence Myth'],
                correctAnswer: 'Destination Myth'
                },
                {
                question: 'When I get to the top I will no longer be limited. What type of Myth is this?',
                options: ['Position Myth', 'Destination Myth', 'Influence Myth', 'Freedom Myth'],
                correctAnswer: 'Freedom Myth'
                },
                {
                question: 'In leadership no matter where you are in an organization the bottom line is?',
                options: ['Attention', 'Influence', 'Decision', 'Prosperity'],
                correctAnswer: 'Influence'
                },
                {
                question: 'Leadership skills can be learnt',
                options: ['Not sure', 'TRUE', 'FALSE', 'None of the above'],
                correctAnswer: 'TRUE'
                },
                {
                question: 'The M in SMART method of setting goals stands for ____________________',
                options: ['Moveable', 'Measurable', 'Magnify', 'Mountain'],
                correctAnswer: 'Measurable'
                },
                {
                question: 'If I were on top then people would follow me. This is known as _',
                options: ['Destination Myth', 'Influence Myth', 'Freedom Myth', 'Position Myth'],
                correctAnswer: 'Influence Myth'
                },
                {
                question: 'One of these is known to be among the Seven-Fold Challenge of leadership',
                options: ['Talent Challenge', 'Financial Challenge', 'Temptation Challenge', 'Ego Challenge'],
                correctAnswer: 'Ego Challenge'
                },
                {
                question: ' and ________ are necessary to keep leaders and team members on track',
                options: ['Timelines and Date', 'Timelines and Deadlines', 'Deadlines and Reward', 'Check and Balance'],
                correctAnswer: 'Timelines and Deadlines'
                },
                {
                question: 'The T in SMART method of setting goals stands for ',
                options: ['Timed', 'Total', 'Timid', 'Transparent'],
                correctAnswer: 'Timed'
                },
                {
                question: 'Great leaders are identified by the following except',
                options: ['Physique', 'Communication pattern', 'Behaviour', 'Action'],
                correctAnswer: 'Physique'
                },
                {
                question: 'Potential leaders must discover that _______________ has little to do with genuine leadership',
                options: ['Time', 'Certificate', 'Position', 'Money'],
                correctAnswer: 'Position'
                },
                {
                question: 'I cant lead if I am not at the top. This is known as',
                options: ['Potential Myth', 'Position Myth', 'Influence Myth', 'Freedom Myth'],
                correctAnswer: 'Position Myth'
                },
                {
                question: 'Leadership qualities are needed',
                options: ['As a boss', 'As an employee', 'at all times', 'As an Entrepreneur'],
                correctAnswer: 'at all times'
                },
                {
                question: 'What can you do to become the leader you desire to be?',
                options: ['Seek advise', 'Develop your leadership skills', 'Talk to people about leadership', 'Dream about it'],
                correctAnswer: 'Develop your leadership skills'
                },
                {
                question: 'The R in SMART method of setting goals stands for ___________________________',
                options: ['Record', 'Remarkable', 'Realistic', 'Reachable'],
                correctAnswer: 'Realistic'
                },
                {
                question: 'A leader who values what others have to say is?',
                options: ['Empowering', 'Navigating', 'Understanding', 'Listening'],
                correctAnswer: 'Listening'
                },
                {
                    question: 'Potential leaders must discover that _______________ has little to do with genuine leadership',
                    options: ['Money', 'Certificate', 'Position', 'Time'],
                    correctAnswer: 'Position'
                    },
                    {
                    question: 'A good leader is willing to do ___________',
                    options: ['Attend service', 'Control others', 'Be served', 'Serve'],
                    correctAnswer: 'Serve'
                    },
                    {
                    question: 'The Challenge of managing mobilizing understanding and leading change is known as',
                    options: ['Mutual Change', 'Benefit Change', 'Leader Change', 'Guiding Change'],
                    correctAnswer: 'Guiding Change'
                    },
                    {
                    question: 'The R in SMART method of setting goals stands for ',
                    options: ['Record', 'Remarkable', 'Reachable', 'Realistic'],
                    correctAnswer: 'Realistic'
                    },
                    {
                    question: ' goals are targets that can be quantified to assess progress',
                    options: ['Timed', 'Tangible', 'Realistic', 'Measurable'],
                    correctAnswer: 'Measurable'
                    },
                    {
                    question: 'The A in SMART method of setting goals stands for what?',
                    options: ['Action', 'Actual', 'Attainable', 'Attention'],
                    correctAnswer: 'Attainable'
                    },
                    {
                    question: 'People should strive to be on top of their game not the top of the',
                    options: ['Skills', 'Academic', 'Organization', 'Promotion'],
                    correctAnswer: 'Organization'
                    },
                    {
                    question: 'The S in SMART method of setting goals stand for _____',
                    options: ['System', 'Sound', 'Specific', 'Shine'],
                    correctAnswer: 'Specific'
                    },
                    {
                    question: 'The T in SMART method of setting goals stands for __________________________',
                    options: ['Transparent', 'Timed', 'Timid', 'Total'],
                    correctAnswer: 'Timed'
                    },
                    {
                    question: 'A Good leader helps in mentoring and _______ employees',
                    options: ['Rebuking', 'Rebranding', 'Promoting', 'Coaching'],
                    correctAnswer: 'Coaching'
                    },
                    {
                    question: 'When I get to the top I will no longer be limited. What type of Myth is this?',
                    options: ['Position Myth', 'Freedom Myth', 'Influence Myth', 'Destination Myth'],
                    correctAnswer: 'Freedom Myth'
                    },
                    {
                    question: ' and ________ are necessary to keep leaders and team members on track',
                    options: ['Timelines and Date', 'Deadlines and Reward', 'Check and Balance', 'Timelines and Deadlines'],
                    correctAnswer: 'Timelines and Deadlines'
                    },
                    {
                    question: 'The M in SMART method of setting goals stands for ____________________',
                    options: ['Magnify', 'Mountain', 'Measurable', 'Moveable'],
                    correctAnswer: 'Measurable'
                    },
                    {
                    question: 'In relation to being a leader you should do one of the following effectively',
                    options: ['Be the Boss', 'Let them serve you', 'Speak Boldly', 'Influence them'],
                    correctAnswer: 'Influence them'
                    },
                    {
                    question: 'What steps should be taken to gain influence with people you lead?',
                    options: ['force them to respect you', 'Build relationship with them', 'Add to their work load', 'Rebuke them always'],
                    correctAnswer: 'Build relationship with them'
                    },
                    {
                    question: 'One of these is known to be among the Seven-Fold Challenge of leadership',
                    options: ['Ego Challenge', 'Financial Challenge', 'Temptation Challenge', 'Talent Challenge'],
                    correctAnswer: 'Ego Challenge'
                    },
                    {
                    question: 'The true measure of leadership is _________',
                    options: ['Respect', 'Influence', 'Development', 'Progress'],
                    correctAnswer: 'Influence'
                    },
                    {
                    question: 'How many numbers of myths does every leader in the middle faces?',
                    options: ['8', '7', '6', '5'],
                    correctAnswer: '7'
                    },
                    {
                    question: 'Learning to lead before attaining a leadership position makes a',
                    options: ['Over-Knowledgeable leader', 'Successful leader', 'Selfish leader', 'Over Zealous leader'],
                    correctAnswer: 'Successful leader'
                    },
                    {
                    question: 'Leaders are been judged based on how effective they are at their _______',
                    options: ['Promoting Staffs', 'Dressing', 'Paying Wages', 'Core Responsibilities'],
                    correctAnswer: 'Core Responsibilities'
                    },
                    {
                        question: 'Potential leaders must discover that _______________ has little to do with genuine leadership',
                        options: ['Position', 'Certificate', 'Money', 'Time'],
                        correctAnswer: 'Position'
                        },
                        {
                        question: 'Motivation and Inspiration makes people to become good_________________',
                        options: ['Followers', 'Managers', 'Speakers', 'Leaders'],
                        correctAnswer: 'Leaders'
                        },
                        {
                        question: 'Leaders focus on ',
                        options: ['Problem solving', 'Innovations', 'Consistency', 'Profitability'],
                        correctAnswer: 'Problem solving'
                        },
                        {
                        question: 'The type of leader known to be very open-minded is',
                        options: ['Empathetic', 'Authoritative', 'Bogus', 'Verbose'],
                        correctAnswer: 'Empathetic'
                        },
                        {
                        question: 'Effective communication requires the following except',
                        options: ['Illustration', 'Genuflection', 'Illustration', 'Affirmation'],
                        correctAnswer: 'Genuflection'
                        },
                        {
                        question: '_ goals are targets that can be quantified to assess progress',
                        options: ['Tangible', 'Realistic', 'Timed', 'Measurable'],
                        correctAnswer: 'Measurable'
                        },
                        {
                        question: 'A leader seeks to________________ his team',
                        options: ['Control', 'Influence', 'Enforce', 'Command'],
                        correctAnswer: 'Influence'
                        },
                        {
                        question: 'Every follower can become a great leader',
                        options: ['TRUE', 'None of the above', 'FALSE', 'Not sure'],
                        correctAnswer: 'TRUE'
                        },
                        {
                        question: 'Which of these is not a part of communication',
                        options: ['Identification', 'Verbalization', 'Non Verbal Cues', 'Gesticulation'],
                        correctAnswer: 'Identification'
                        },
                        {
                        question: 'Leaders who come up with solutions fearlessly are leaders with ',
                        options: ['Confidence', 'Favor', 'Unction', 'Passion'],
                        correctAnswer: 'Confidence'
                        },
                        {
                        question: 'Leaders give all of the following except__',
                        options: ['Instructions', 'Insight', 'Expectations', 'Guidance'],
                        correctAnswer: 'Instructions'
                        },
                        {
                        question: 'Great leaders are identified by the following except',
                        options: ['Behavior', 'Communication pattern', 'Physique', 'Action'],
                        correctAnswer: 'Physique'
                        },
                        {
                        question: 'Delegation is difficult because it involves more of________________',
                        options: ['Doing', 'Following', 'Leading', 'Abandoning'],
                        correctAnswer: 'Leading'
                        },
                        {
                        question: 'Who are those that can be leaders?',
                        options: ['All of the above', 'Students', 'Children', 'Adults'],
                        correctAnswer: 'All of the above'
                        },
                        {
                        question: 'All the following are great leaders to be emulated in our contemporary times except',
                        options: ['Adolf Hitler', 'Nelson Mandela', 'John Maxwell', 'Pastor W.F. Kumuyi'],
                        correctAnswer: 'Adolf Hitler'
                        },
                        {
                        question: 'Learning to lead before attaining a leadership position makes a',
                        options: ['Over-Knowledgeable leader', 'Selfish leader', 'Over Zealous leader', 'Successful leader'],
                        correctAnswer: 'Successful leader'
                        },
                        {
                        question: 'The most important part of communication is __',
                        options: ['Gesticulation', 'Empathy', 'Listening', 'Talking'],
                        correctAnswer: 'Listening'
                        },
                        {
                        question: 'Which position do I need to occupy to be able to lead?',
                        options: ['middle', 'anywhere', 'bottom', 'Top'],
                        correctAnswer: 'anywhere'
                        },
                        {
                        question: 'An environment where the leader shows empathy will be characterized by the following except',
                        options: ['Collaboration', 'Communication', 'Creativity', 'Connection'],
                        correctAnswer: 'Communication'
                        },
                        {
                        question: 'A leader who is humble is seen by team members as _____________________',
                        options: ['sober', 'Submissive', 'Effective', 'Vulnerable'],
                        correctAnswer: 'Vulnerable'
                        }
       
];


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'block';

    shuffleQuestions();

    showQuestion();
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    const shuffledOptions = shuffleOptions(currentQuestion.options);

    optionsContainer.innerHTML = '';
    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement('div');
        option.className = 'option';
        option.textContent = shuffledOptions[i];
        option.onclick = () => checkAnswer(shuffledOptions[i]);
        optionsContainer.appendChild(option);
    }
}

function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
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
