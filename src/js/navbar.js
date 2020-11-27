Vue.component('nav-bar', {
    template: `
    <nav class="navbar bg-info flex-row">
        <h2><a href="../html/index.html" style="color:white; text-decoration:none;" title="Go to homepage">Coding for Coconuts</a></h2>
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

var app = new Vue({
    el: "#app"
})
