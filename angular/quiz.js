const myquiz =[
    {
        question:"Q1: Which of the following statement is correct for AngularJS?",
        a:"	AngularJS is an HTML framework",
        b:"	AngularJS is an Java framework",
        c:"AngularJS is a JavaScript framework",
        d:" AngularJS is a SQL framework",
        ans:"ans3",        
    },
    {
        question:"Q2: On which of the Architectural pattern AngularJS is based?",
        a:"	Observer Pattern",
        b:"Decorator Pattern",
        c:"MVC Architecture pattern",
        d:" MVVM Architecture pattern",
        ans:"ans4",        
    },
    {
        question:"Q3: AngularJS is perfect for?",
        a:"SPAs",
        b:"	MPAs",
        c:"	DPAs",
        d:" CPAs",
        ans:"ans1",        
    },
    {
        question:"Q4: Which of the following is the correct syntax for writing AngularJS expressions?",
        a:"(expression)",
        b:"{{expression}}",
        c:" {{{expression}}}",
        d:" [expression]",
        ans:"ans2",        
    },
    {
        question:"Q5: Which of the following directive is used to bind the application data to the HTML view in AngularJS?",
        a:"ng-app directive",
        b:"ng-model directive",
        c:"ng-bind directive",
        d:"	ng-init directive",
        ans:"ans3",        
    },
    {
        question:"Q6:Which of the following statement is true about the lowercase filter? ",
        a:"The lowercase filter converts a text to lower case text.",
        b:"The lowercase filter is a function that takes text as input.",
        c:"Both of the above.",
        d:" None of the above",
        ans:"ans1",        
    },
    {
        question:"Q7: Which of the following is an advantage of AngularJS?",
        a:"AngularJS code is unit testable.",
        b:"AngularJS provides reusable components.",
        c:"AngularJS uses dependency injection and makes use of separation of concerns.",
        d:" all of the above",
        ans:"ans4",        
    },
    {
        question:"Q8: Which of the following statement is true about $dirty flag?",
        a:"$dirty flag is used to state that value has been changed.",
        b:"$dirty flag is used to state that the form has invalid data.",
        c:"Both of the above",
        d:" None of the above",
        ans:"ans1",        
    },
    {
        question:"Q9: What is the use of Angular Controllers in the application?",
        a:"Angular controllers are used for controlling the data.",
        b:"Angular controllers are used for displaying the data.",
        c:"Both of the above",
        d:" None of the above",
        ans:"ans1",        
    },
    {
        question:"Q10: Which of the following syntax is used to create a module in AngularJS?",
        a:"var myModule= angular.module();",
        b:"	var myModule= new Module();",
        c:"module(app, []);",
        d:" None of the above",
        ans:"ans3",        
    },
    {
        question:"Q11: Which of the following is used to share data between controller and view in AngularJS?",
        a:"Using Model",
        b:"Using Services",
        c:"Using factory",
        d:" Using $scope",
        ans:"ans2",        
    },
    {
        question:"Q12: Which of the following statement specifies the data-binding in AngularJS?",
        a:"Synchronization of data between the model and view components",
        b:"Synchronization of data between the model and controller components",
        c:"Synchronization of data between the controller and view components",
        d:" none of the above",
        ans:"ans1",        
    },
    {
        question:"Q13: Which of the following is not a valid AngularJS filter?",
        a:"Lowercase",
        b:"Email",
        c:"OrderBy",
        d:" Currency",
        ans:"ans2",        
    },
    {
        question:"Q14: Who is known as the father of AngularJS?",
        a:"Brad Green",
        b:"Misko Hevery",
        c:"Adam Abrons",
        d:" Mike Adams",
        ans:"ans2",        
    }, 
    {
        question:"Q15: Which of the following directive is used to bind the value of HTML controls to application data?",
        a:"Ng-app",
        b:"Ng-init",
        c:"Ng-model",
        d:" Ng-hode",
        ans:"ans3",        
    },
    {
        question:"Q16: Which of the following community Angular JS belong to?",
        a:"Twitter",
        b:"Facebook",
        c:"Google",
        d:"Microsoft",
        ans:"ans3",        
    },
    {
        question:"Q17: A module created by using the AngularJS function is called?",
        a:"modules()",
        b:"Module()",
        c:"Mod()",
        d:" Angular module()",
        ans:"ans2",        
    },
    {
        question:"Q18: Which of the following types of the component can be used to create a custom directive?",
        a:"Element directives",
        b:"Attribute",
        c:"CSS",
        d:" all of the above",
        ans:"ans4",        
    },
    {
        question:"Q19: How many $RootScope an AngularJS application can have?",
        a:"Zero",
        b:"One",
        c:"Two",
        d:" Infinity",
        ans:"ans2",        
    },
    {
        question:"Q20: Which of the following is true about the currency filter?",
        a:"A currency filter is used to format the text in a currency format.",
        b:"A currency filter is a function that takes text as input",
        c:"Both A and B",
        d:" None of the above",
        ans:"ans2",        
    },
    {
        question:"Q21: Which of the following components can be injected as a dependency in AngularJS?",
        a:"Value",
        b:"Factory",
        c:"Constant",
        d:" Application Module",
        ans:"ans4",        
    },
    {
        question:"Q22: What is deep linking in AngularJS?",
        a:"Deep linking is an SEO-based technique",
        b:"Deep linking refers to linking various views to the main page.",
        c:"Deep linking allows you to encode the state of an application in the URL so that it can be bookmarked",
        d:" all of the above",
        ans:"ans3",        
    },
    {
        question:"Q23: AngularJS applications are a mix of which of the following technologies?",
        a:"	HTML and PHP",
        b:"HTML and Javascript",
        c:"HTML and typescript",
        d:" PHP and JavaScript",
        ans:"ans2",        
    },
    {
        question:"Q24: Which of the following template can be used to write AngularJS directives? ",
        a:"Tag",
        b:"Attribute",
        c:"	Class name",
        d:" all of the above",
        ans:"ans4",        
    },
    {
        question:"Q25: Which of the following statement is true in the case of $routeProvider?",
        a:"	It is a service.",
        b:"	It is a module.",
        c:"It is a component.",
        d:" None of the above",
        ans:"ans1",        
    },
    {
        question:"Q26: Which of the following statement justify the working of AngularJS?",
        a:"module is primarily used to create application modules.",
        b:"module is used to create AngularJS modules along with its dependent modules.",
        c:"Both A and B",
        d:" None of the above",
        ans:"ans3",        
    },
    {
        question:"Q27: The [] parameter in the module definition is used to define dependent modules.",
        a:"True",
        b:"False",
        c:"Can be true or false",
        d:" Cannot say",
        ans:"ans1",        
    },
    {
        question:"Q28: Which of the following is correct about TypeScript?",
        a:"Angular is based on TypeScript.",
        b:"This is a superset of JavaScript.",
        c:"TypeScript is maintained by Microsoft.",
        d:" all of the above",
        ans:"ans4",        
    },
    {
        question:"Q29: What is .subscribe?",
        a:"Streams data in asynchronously",
        b:"Streams data in synchronously",
        c:"Both",
        d:" None of the above",
        ans:"ans3",        
    },
    {
        question:"Q30: What does AOT stand for?",
        a:"Ahead-Of-Time Compilation",
        b:"Angular Object Templates",
        c:"Both",
        d:" None of the above",
        ans:"ans1",        
    },
    {
        question:"Q31: Which of the following is not a hook application life cycle?",
        a:"ngOnChanges",
        b:"ngViewStart",
        c:"ngOnInit",
        d:" None of the above",
        ans:"ans2",        
    },
    {
        question:"Q32: Router is part of which of the following module?",
        a:"@angular/core",
        b:"@angular/router",
        c:"both",
        d:" none of the above",
        ans:"ans2",        
    },
    {
        question:"Q33: RxJS can be used for?",
        a:"Browser",
        b:"Server Side",
        c:"Both",
        d:" None of the above",
        ans:"ans3",        
    },
    {
        question:"Q34: Which angular decorator allows us to define the pipe name that is globally available for use in any template in the across application?",
        a:"pipeName",
        b:"pipeDeco",
        c:"Pipe",
        d:" None of the above",
        ans:"ans3",        
    },
    {
        question:"Q35: What is the decorator used for configuring your module class?",
        a:"@NgModule",
        b:"@NgApp",
        c:"Both",
        d:" None of the above",
        ans:"ans1",        
    },
    {
        question:"Q36: What is used .angular-cli.json",
        a:"Used to link external files",
        b:"Used to configure your angular 2 project",
        c:"used to install required project packages",
        d:" None of the above",
        ans:"ans2",        
    },
    {
        question:"Q37: Which file is responsible for startup of angular 2 project ?",
        a:"main.ts",
        b:"index.js",
        c:"app.ts",
        d:" angular.cli.json",
        ans:"ans1",        
    },
    {
        question:"Q38: Which of the following is the correct way to apply a filter?",
        a:"Property-value | filter",
        b:"Property-value || filter",
        c:"Property-value && filter",
        d:" none of the above",
        ans:"ans1",        
    },
    {
        question:"Q39: Interpolation in angular 2 is done using",
        a:"{{}}",
        b:"{{{}}}",
        c:"{{|var}}",
        d:" !!!!",
        ans:"ans1",        
    },
    {
        question:"Q40: Which of the following filter is used to convert input to all uppercase?",
        a:"upper",
        b:"uppercase",
        c:"toUpper",
        d:" None of the above",
        ans:"ans2",        
    },
    {
        question:"Q41: Which of the following is not a hook in Angular 2 application life cycle. ",
        a:"ngOnInit",
        b:"ngOnChanges",
        c:"ngAfterViewInit",
        d:" ngViewStart",
        ans:"ans4",        
    },
    {
        question:"Q42: Which of the following service has Angular 2, that allows us to dynamically load a component in a certain position on the page?",
        a:"DynamicComponentLoader",
        b:"DynamicControlLoader",
        c:"DynamicControllerLoader",
        d:" none of the above",
        ans:"ans1",        
    },
    {
        question:"Q43: Which of the following option is using Angular 2 to detect changes.",
        a:"Scope.js",
        b:"zone$.js",
        c:"zone.js",
        d:" zones.js",
        ans:"ans3",        
    },
    {
        question:"Q44: Needs cleanup step before compiling",
        a:"Need to maintain AOT version of bootstrap file",
        b:"Works only with HTML and CSS",
        c:"Detect error at build time",
        d:" none of the above",
        ans:"ans3",        
    },
    {
        question:"Q45: Which of the following is not a feature of Angular 2?",
        a:"Components",
        b:"Multithread",
        c:"Typescript",
        d:" Services",
        ans:"ans2",        
    },
    {
        question:"Q46: To start working with Angular 2, we need to install the _____________components.",
        a:"Npm",
        b:"Editor",
        c:"GIT",
        d:" all of the above",
        ans:"ans4",        
    },
    {
        question:"Q47: Which of the following option is correct about tsconfig.json?",
        a:"This file contains information about Angular 2 project.",
        b:"This file contains the system files required for Angular JS application.",
        c:"This file is used to give the options about TypeScript used for the Angular JS project.",
        d:" all of the above",
        ans:"ans3",        
    },
    {
        question:"Q48: How would you retrieve a list of items from a server’s URL?",
        a:"Create a URL transaction",
        b:"Use the HTTP get method",
        c:"Create a get SQL statement",
        d:" Use an HTTP package",
        ans:"ans1",        
    },
    {
        question:"Q49: Which of the following is not built-in pipe in Angular?",
        a:"DatePipe",
        b:"CurrencyPipe",
        c:"DataPipe",
        d:"PercentPipe",
        ans:"ans3",        
    },
    {
        question:"Q50: Angular 1.x is written in",
        a:"Java",
        b:"Javascript",
        c:"Typescript",
        d:" none of the above",
        ans:"ans2",        
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
    } 
    else {
        
        showScore.innerHTML = `
        <h3> Your Score is ${score} / ${myquiz.length}  </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});
