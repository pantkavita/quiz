const myquiz =[
    {
        question:"Q1:What does the expression float a = 35 / 0 return? ",
        a:"0",
        b:"Not a number",
        c:"Infinity",
        d:" Run time exception",
        ans:"ans3",        
    },
    {
        question:"Q2: Who invented Java Programming?",
        a:"Guido van Rossum",
        b:"James Gosling",
        c:"Dennis Ritchie",
        d:" none of the above",
        ans:"ans2",        
    },
    {
        question:"Q3: Which component is used to compile, debug and execute the java programs?",
        a:"JRE",
        b:"JIT",
        c:"JDK",
        d:"JVM",
        ans:"ans3",        
    },
    {
        question:"Q4: Which one of the following is not a Java feature?",
        a:"object-oriented",
        b:"Use of Pointers",
        c:"Portable",
        d:" Dynamic and Extensible",
        ans:"ans2",        
    },
    {
        question:"Q5: Which of these cannot be used for a variable name in Java?",
        a:"identifier & keyword",
        b:"identifier",
        c:"keyword",
        d:" none of the above",
        ans:"ans3",        
    },
    {
        question:"Q6: Which of the following is not an OOPS concept in Java?",
        a:"polymorphism",
        b:"Inheritance",
        c:"Compilation",
        d:"Encapsulation",
        ans:"ans3",        
    },
    {
        question:"Q7: Which exception is thrown when java is out of memory?",
        a:"MemoryError",
        b:"OutOfMemoryError",
        c:"MemoryOutOfBoundsException",
        d:"MemoryFullException",
        ans:"ans2",        
    },
    {
        question:"Q8: Which of these are selection statements in Java?",
        a:"break",
        b:"continue",
        c:"for()",
        d:" if()",
        ans:"ans4",        
    },
    {
        question:"Q9: Which of the following is a superclass of every class in Java?",
        a:"ArrayList",
        b:"Abstract Class",
        c:"Object Class",
        d:" String",
        ans:"ans3",        
    },
    {
        question:"Q10: Which of these keywords are used for the block to be examined for exceptions?",
        a:"check",
        b:"throw",
        c:"catch",
        d:" try",
        ans:"ans4",        
    },
    {
        question:"Q11: Which one of the following is not an access modifier?",
        a:"Protected",
        b:"Void",
        c:"Public",
        d:" Private",
        ans:"ans2",        
    },
    {
        question:"Q12: Automatic type conversion is possible in which of the possible cases?",
        a:"Byte to int",
        b:"Int to long",
        c:"Long to int",
        d:" Short to int",
        ans:"ans2",        
    },
    {
        question:"Q13: Select the valid statement.",
        a:"Char[] ch = new char(5)",
        b:"Char[] ch = new char[5]",
        c:"Char[] ch = new char()",
        d:" Char[] ch = new char[]",
        ans:"ans2",        
    },
    {
        question:"Q14: Select the valid statement to declare and initialize an array",
        a:"Int[] A = {}",
        b:"Int[] A = {1, 2, 3}",
        c:"Int[] A = (1, 2, 3)",
        d:" Int[][] A = {1, 2, 3}",
        ans:"ans2",        
    }, 
    {
        question:"Q15: Arrays in java are-",
        a:"Object references",
        b:"Objects",
        c:"Primitive data type",
        d:" None",
        ans:"ans2",        
    },
    {
        question:"Q16: When is the object created with new keyword?",
        a:"At run time",
        b:"At compile time",
        c:"Depends on the code",
        d:" None of the above",
        ans:"ans2",        
    },
    {
        question:"Q17: Identify the corrected definition of a package.",
        a:"A package is a collection of editing tools",
        b:"A package is a collection of classes",
        c:"A package is a collection of classes and interfaces",
        d:" A package is a collection of interfaces",
        ans:"ans1",        
    },
    {
        question:"Q18: In which of the following is toString() method defined?",
        a:"java.lang.Object",
        b:"java.lang.String",
        c:"java.lang.util",
        d:" None of the above",
        ans:"ans1",        
    },
    {
        question:"Q19: compareTo() returns",
        a:"true",
        b:"false",
        c:"an int value",
        d:" none of the above",
        ans:"ans3",        
    },
    {
        question:"Q20: Identify the modifier which cannot be used for constructor.",
        a:"Public",
        b:"Protected",
        c:"private",
        d:" static",
        ans:"ans4",        
    },
    {
        question:"Q21: What is the variables declared in a class for the use of all methods of the class called?",
        a:"Object",
        b:"Instance variables",
        c:"Reference variables",
        d:" None of the above",
        ans:"ans2",        
    },
    {
        question:"Q22: What is the implicit return type of constructor?",
        a:"No return type",
        b:"A class object in which it is defined",
        c:"Void",
        d:" none of the above",
        ans:"ans2",        
    },
    {
        question:"Q23: When is the finalize() method called?",
        a:"Before garbage collection",
        b:"Before an object goes out of scope",
        c:"Before a variable goes out of scope",
        d:" none of the above",
        ans:"ans1",        
    },
    {
        question:"Q24: What is Runnable?",
        a:"Abstract class",
        b:"Interface",
        c:"Class",
        d:" Method",
        ans:"ans2",        
    },
    {
        question:"Q25: Exception created by try block is caught in which block",
        a:"Catch",
        b:"Throw",
        c:"final",
        d:" none of the above",
        ans:"ans1",        
    },
    {
        question:"Q26: Which of the following exception is thrown when divided by zero statement is executed?",
        a:"NullPointerException",
        b:"NumberFormatException",
        c:"ArithmeticException",
        d:" none of the above",
        ans:"ans3",        
    },
    {
        question:"Q27: Which of the following statements are true about finalize() method? ",
        a:"It can be called Zero or one times",
        b:"It can be called Zero or more times",
        c:"It can be called Exactly once",
        d:"It can be called One or more times",
        ans:"ans1",        
    },
    {
        question:"Q28: What does the operator >>>> do?",
        a:"Right shift operator",
        b:"Left shift operator",
        c:"Zero fill left shift",
        d:"Zero fill right shift",
        ans:"ans4",        
    },
    {
        question:"Q29: Identify the incorrect Java feature",
        a:"Object-oriented",
        b:"Use of pointers",
        c:"Dynamic",
        d:" Architectural neural",
        ans:"ans2",        
    },
    {
        question:"Q30: Which of the following is used to find and fix bugs in the program?",
        a:"JDK",
        b:"JVM",
        c:"JRE",
        d:" JDB",
        ans:"ans4",        
    },
    {
        question:"Q31: What does a Data Type in Java refers to?",
        a:"The place where data is stored",
        b:"The technique how data is retreived",
        c:"The type or variety of data being handled for reading and writing",
        d:" None of the above",
        ans:"ans3",        
    },
    {
        question:"Q32: Which data type among the following is an implementation of Objects or OOPs?",
        a:"byte",
        b:"int",
        c:"char",
        d:" none of the above",
        ans:"ans4",        
    },
    {
        question:"Q33: Which among the following is not a Data Type in Java?",
        a:"short",
        b:"int",
        c:"long double",
        d:" double",
        ans:"ans3",        
    },
    {
        question:"Q34: An IF-ELSE statement is also called ___.",
        a:"Branching statement",
        b:"Control statement",
        c:"Block statement",
        d:" all of the above",
        ans:"ans4",        
    },
    {
        question:"Q35: An ELSE statement must be preceded by ___ statement in Java.",
        a:"IF",
        b:"ELSE IF",
        c:"IF or ELSE IF",
        d:" none of the above",
        ans:"ans3",        
    },

    {
        question:"Q36: Java is a ___ programming language.",
        a:"Functional",
        b:"Object-oriented",
        c:"Theoretical",
        d:" all of the above",
        ans:"ans2",        
    },
    {
        question:"Q37: In Java programming language, the code is placed inside ___.",
        a:"Classes, Interfaces",
        b:"Methods",
        c:"Blocks",
        d:" all of the above",
        ans:"ans4",        
    },
    {
        question:"Q38: To successfully overload a method in Java, the return types must be ___.",
        a:"Same",
        b:"Different",
        c:"Same but using superclass or subclass types also work",
        d:" none of the above",
        ans:"ans3",        
    },
    {
        question:"Q39: To successfully overload a method in Java, the method names must be ___.",
        a:"Same",
        b:"Differenr",
        c:"Same or different",
        d:" none of the above",
        ans:"ans1",        
    },
    {
        question:"Q40: What are the features reused using Inheritance in Java?",
        a:"Methods",
        b:"Variables",
        c:"Constants",
        d:" all of the above",
        ans:"ans4",        
    },
    {
        question:"Q41: In a Multi-Level Inheritance in Java, the last subclass inherits methods and properties of ____.",
        a:"Only one immediate Superclass",
        b:"Few classes above it",
        c:"All classes above it",
        d:" none of the above",
        ans:"ans3",        
    },
    {
        question:"Q42: What is an Exception in Java?",
        a:"An exception is like a generic error error occurring during the time of execution of program",
        b:"An exception may occur due to memory or hardware issues",
        c:"An exception leads to bad experience for an End user of the software",
        d:" all of the above",
        ans:"ans4",        
    },
    {
        question:"Q43: Which is the super class in Java that bundles all classes to deal with exceptions and errors?",
        a:"Error",
        b:"Exception",
        c:"Throwable",
        d:"Throw",
        ans:"ans3",        
    },
    {
        question:"Q44: Which of the following interface is used to declare core methods in java?",
        a:"set",
        b:"Event Listener",
        c:"Collection",
        d:"Comparator",
        ans:"ans3",        
    },
    {
        question:"Q45: Which of these interface handle sequences?",
        a:"Set",
        b:"List",
        c:"Comparator",
        d:" Collection",
        ans:"ans2",        
    },
    {
        question:"Q46: Which of the follwing below live on the heap in java?",
        a:"Class",
        b:"Instance variable",
        c:"Method",
        d:"Object",
        ans:"ans4",        
    },
    {
        question:"Q47: Which of this interface must contain a unique element?",
        a:"Set",
        b:"List",
        c:"Array",
        d:"Collection",
        ans:"ans1",        
    },
    {
        question:"Q48: Which of the below are reserved keyword in Java ?",
        a:"array",
        b:"goto",
        c:"null",
        d:" let",
        ans:"ans2",        
    },
    {
        question:"Q49: Which of the below is not an unchecked exceptions in java ?",
        a:"RuntimeException",
        b:"ClassCastException",
        c:"NullPointerException",
        d:"IOException",
        ans:"ans4",        
    },
    {
        question:"Q50: Which of the below is not a built-in class loader in java ?",
        a:"Bootstrap class loader",
        b:"Extensions class loader",
        c:"Runtime class loader",
        d:"System class loader",
        ans:"ans3",        
    },

]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let score = 0;


let questionCount = 0;
const loadQuestion = () => {
    // question.innerText= myquiz [0].question ;
    const questionList = myquiz[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();


const getAnswerCheck = () => {
    let answer2;
    answers.forEach((currElement) => {
        if (currElement.checked) {
            answer2 = currElement.id;
        }

    });
    return answer2;
}

const disSelectAll=()=>{
    answers.forEach((currElement) => currElement.checked=false )
}
submit.addEventListener('click', () => {
    const checkedAnswer = getAnswerCheck();
    console.log(checkedAnswer)
    if (checkedAnswer === myquiz[questionCount].ans) {
        score++;
    }
    questionCount++;
    total.innerHTML=`
    <span> ${questionCount}/${myquiz.length}</span>`;
    disSelectAll();
    if (questionCount < myquiz.length) {
        loadQuestion();
    } else {
        
        showScore.innerHTML = `
        <h3> Your Score is ${score} / ${myquiz.length}  </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});
