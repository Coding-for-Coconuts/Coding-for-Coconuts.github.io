Vue.component('nav-bar', {
    template: `
    <nav class="navbar bg-info flex-row">
        <a id="home" href="/src/html/index.html"><img src="/src/images/coding-for-coconuts-logo.png" alt="Coding for Coconuts"/></a>
        <div>
            <ul class="navbar-nav flex-row">
                <li class="nav-item">
                    <a href="/src/html/questions.html">Questions</a>
                </li>
                <li class="nav-item">
                    <a href="/src/html/coconutCounter.html">Coconut Counter</a>
                </li>
                <li class="nav-item">
                    <a href="/src/html/solutions.html">Solutions</a>
                </li>
            </ul>
        </div>
    </nav>
    `
});

Vue.component('problem-display', {
    props: ['problem'],
    template: `
    <div class="container">
        <form>
            <h3>Problem {{ problem.number }}</h3>
            <p>{{ problem.statement }}</p>
            <div class="form-group">
                <textarea class="form-control" v-model="message" rows="3"></textarea>
            </div>
        </form>
        <div class="d-flex justify-content-between">
            <a id="prev" class="btn btn-info" :href="'./problem'+problem.prevNum+'.html'" v-bind:class="{'disabled':(problem.number==1)}">Last Problem</a>
            <a id="check" class="btn btn-info" @click="problem.gradeProblem(message)">Check Answer</a>
            <a id="next" class="btn btn-info" :href="'./problem'+problem.nextNum+'.html'" v-bind:class="{'disabled':(problem.number==9)}">Next Problem</a>
        </div>
    </div>
    `
});

class Problem {
    number = 0;
    coconuts = 1;
    description="";
    statement = "";
    correctSolution = "";
    userSolution = "";
    nextNum = 0;
    prevNum = 0;

    constructor(n, difficulty, des, statement, sol){
        this.number = n;
        this.coconuts = difficulty;
        this.description = des;
        this.statement = statement;
        this.correctSolution = sol;

        if(n==1){ this.prevNum=n; }
        else { this.prevNum = n-1; }

        if(n==9){ this.nextNum=n; }
        else { this.nextNum = n+1; }
    }

    gradeProblem(answer){
        this.userSolution = answer;
        let msg="";
        if(this.userSolution == this.correctSolution){
            msg="Correct! You earned "+this.coconuts+" coconuts. You're ready for the next problem.";
            app.addCoconuts(this.coconuts);
        }
        else {
            msg="Try again! Make sure your answer is formatted correctly and keep working.";
        }
        alert(msg);
    }
}

// problems
let problem1 = new Problem(1, 1, "Learn sequences through story telling.", "Read the short story about Manny the Monkey. Then describe the correct order that events happened. Please present your answer like this: 'eat,walk,sleep,swing'. Make sure not to include any spaces, and keep everything lowercase!", "walk,eat,swing,sleep");
let problem2 = new Problem(2, 2, "Understanding sequences through a maze", "In this problem you will navigate through a maze to understand how sequences work. Help Manny the Monkey reach the bananas! Give him directions (up, down, left, right) to reach the bananas. Try to use the fastest route available because Manny is REALLY hungry! Beware of the roadblocks! You may have to navigate around one or more roadblocks to reach the bananas. Present your answer like this: 'left,up,down,left'. Make sure not to add any spaces, and please keep everything lowercase!", "right,down,right,down,down");
let problem3 = new Problem(3, 3, "Understanding the assignment of variables and their different types", "In this problem you will learn about the different types of variables. It varies from language to language, so for this example we will talk about the different variable types in C. The most common types are: int (integer), char (character), float (floating point number), double (like an int, but allows larger number values), boolean (either contains true or false), and char* (pointer to a string, array, or other value). This problem requires you to match a variable type with a value it might contain. For example, an int might contain the value 17, but a char* might contain the value 'cat'. Please format your answer like this: 'a,b,c,d,e,f'. Make sure to keep everything lowercase and remember not to add any extra spaces!", "e,d,b,a,c,f");
let problem4 = new Problem(4, 4, "Understand variables by completing a mad-lib", "In this problem you will complete a mad-lib using variables. Fill in the blanks with a variable containing the correct word. If the sentence requires a verb, look for a variable containing a verb value. Please format your answer like this: 'apple,Bird,Diamond,fox,elephant'. Make sure not to include any extra spaces! Variables are case sensitive, so make sure to match the variable name exactly! Don't get confused by the variable names; it is merely a label used to reference the value it contains. Please format your answer like this: 'a,b,c,d,e,f'. Make sure to keep everything lowercase and remember not to add any extra spaces!", "Diamond,apple,car,Bird,Giraffe,fox");
let problem5 = new Problem(5, 5, "Understanding for-loops with a number line", "In this problem you will use a number line to understand the values in a for-loop. The syntax for for-loops varies from language to language, but for this example I will use C. A for-loop in C is written as the following: for(i=0; i<10; i=i+1){...}. The first element (i=0), is an initialization for the variable 'i' which we will use to step throught the loop. The second element (i<10) is a test that is run before every loop. In this case, we check to make sure that 'i' is less than 10 before running the loop. The third element (i=i+1) is for incrementing our stepping variable (i) after every execution of the code inside the loop. The last element ({...}) is called a block. A block contains one or more lines of code that will be run each time the second element (i<10) passes its test. To complete this problem, please describe this number line in terms of a for-loop. The green circles represent the values that 'i' will equal during the loop. The red brackets represent boundaries that the value of 'i' will not surpass. If the for-loop was for(i=0; i<10; i=i+1){...}, then your answer should be formatted like this: '0,10,i+1'. Make sure not to include any spaces, and keep everything lowercase!", "3,9,i+2");
let problem6 = new Problem(6, 6, "Understanding more complex loops with a number line", "This problem is very similar to the last one. In the last example, we only mentioned addition as the third element of a for-loop (i=i+1), but it is important to know that any mathematical operation will work! You can use addition, subtraction, mulitplication, and division! In the problem below, we ask that you solve it using division. Keep in mind that if we are going backwards through the numbers, your second element (i<10) will actually change to use a '>' symbol. Good luck!  Make sure not to include any spaces, and keep everything lowercase!", "8,2,i/2");
let problem7 = new Problem(7, 7, "Learn a simple if-else statement", "Given the following information, follow the if-then-else statement to decide what to do. Make sure to keep everything lowercase!", "yes");
let problem8 = new Problem(8, 8, "Understand more complex nested if-else statements", "Given the following information, follow the if-then-else statement to decide what to do. Make sure to keep everything lowercase!", "eat");
let problem9 = new Problem(9, 9, "Your first coding problem!", "First off, CONGRATULATIONS! You've made it to the last (and hardest) problem in the series. This problem should combine all of what you learned and put it to the test. In the image below, you will see code. Along the left side, there are line numbers. Your answer will consist of the line numbers in which you find errors. You get one hint: there are exactly 4 lines containing errors. Your answer should look like this: '1,2,3,4'. Please keep them in numeric order, and don't add any spaces.", "3,8,11,17");


var app = new Vue({
    el: "#app",
    data: {
        coconuts: 0,
        problems: [problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9]
    },
    mounted() {
        if(localStorage.coconuts) {
            this.coconuts = localStorage.coconuts;
        }
    },
    methods: {
        coconutDisplay(){
            let n = parseInt(localStorage.getItem('coconuts'));
            let a = [];

            for(let i=0; i<n; i++){
                a[i]=0;
            }

            return a;
        },
        addCoconuts(x) {
            this.coconuts = parseInt(this.coconuts);
            var newCoconuts = parseInt(x);
            this.coconuts += newCoconuts;
            localStorage.setItem('coconuts', this.coconuts);
            console.log(localStorage.coconuts);
        },
        clearCoconuts() {
            this.coconuts = 0;
            localStorage.setItem('coconuts', this.coconuts);
        },
        randomNumber(){
            let random = Math.floor(Math.random()*(this.problems.length))+1;
            return "./problems/problem"+random+".html";
        },
    }
});
