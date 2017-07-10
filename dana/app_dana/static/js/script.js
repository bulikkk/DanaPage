function initProjects(pro) {

    var projects = ((pro).replace(/&(l|g|quo)t;/g, function (a, b) {
        return {
            l: '<',
            g: '>',
            quo: '"'
        }[b];
    }));

    projects = projects.replace(/u'/g, '\'')
    projects = projects.replace(/'/g, '\"')

    var obj = JSON.parse(projects);

    var today = new Date().getTime();

    for (var i = 1; i <= obj.length; i++) {
        if (i % 3 === 1) {
            var col = document.getElementById("c1");

        }
        else if (i % 3 === 2) {
            var col = document.getElementById("c2");
        }
        else {
            var col = document.getElementById("c3");
        }
        var project = document.createElement("div");
        project.classList.add("project");

        var f = obj[i-1].fields.add_date.split("-");
        var date = new Date(f[0], f[1] - 1, f[2]).getTime();

        if ((((today / 1000) - (date / 1000)) < 2629743) && (obj[i-1].fields.new === true)) {
            var n = document.createElement("p");
            n.classList.add("project-new")
            n.innerHTML = "new";
            project.appendChild(n);
        }

        var img = document.createElement("img");
        img.classList.add("project-image");
        img.setAttribute("src", "/static/" + obj[i-1].fields.image);
        img.setAttribute("alt", "Project image");
        project.appendChild(img);
        var title = document.createElement("p");
        title.classList.add("project-project-title");
        title.innerHTML = obj[i-1].fields.title;
        project.appendChild(title);
        var desc = document.createElement("p");
        desc.classList.add("project-project-desc");
        desc.innerHTML = obj[i-1].fields.description;
        project.appendChild(desc);
        var plus = document.createElement("img");
        plus.classList.add("project-plus");
        plus.setAttribute("src", "/static/plus.png");
        plus.setAttribute("alt", "Plus");
        project.appendChild(plus);
        col.appendChild(project);
    }
}
