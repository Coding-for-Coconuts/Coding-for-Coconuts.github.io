Vue.component('nav-bar', {
    template: `
    <nav class="navbar bg-info flex-row">
        <a id="home" href="/html/index.html"><img src="/images/coding-for-coconuts-logo.png" alt="Coding for Coconuts"/></a>
        <div>
            <ul class="navbar-nav flex-row">
                <li class="nav-item">
                    <a href="../html/questions.html">Questions</a>
                </li>
                <li class="nav-item">
                    <a href="../html/coconutCounter.html">Coconut Counter</a>
                </li>
                <li class="nav-item">
                    <a href="../html/solutions.html">Solutions</a>
                </li>
            </ul>
        </div>
    </nav>
    `
})

Vue.component('problem', {
    props: ['number', 'description'],
    template: `
    <div class="container">
        <form>
            <h3>Problem {{ number }}</h3>
            <p>{{ description }}</p>
            <div class="form-group">
                <textarea class="form-control" id="exampleFormControl" rows="3"></textarea>
            </div>
        </form>
        <div class="d-flex justify-content-between">
            <button class="btn btn-info">Last Problem</button>
            <button type="submit" class="btn btn-info">Check Answer</button>
            <button class="btn btn-info">Next Problem</button>
        </div>
    </div>
    `
})

var app = new Vue({
    el: "#app",
    data: {
        coconuts: 0
    },
    mounted() {
        if(localStorage.coconuts) {
            this.coconuts = localStorage.coconuts;
        }
    },
    methods: {
        addCoconuts(x) {
            this.coconuts = parseInt(this.coconuts);
            var newCoconuts = parseInt(x);
            this.coconuts += newCoconuts;
            localStorage.setItem('coconuts', this.coconuts);
        },
        clearCoconuts() {
            this.coconuts = 0;
            localStorage.setItem('coconuts', this.coconuts);
        },
    }
});
