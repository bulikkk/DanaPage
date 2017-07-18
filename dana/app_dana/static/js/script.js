function initProjects(pro, ban) {

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
            n.classList.add("project-new");
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

    var banners = ((ban).replace(/&(l|g|quo)t;/g, function (a, b) {
        return {
            l: '<',
            g: '>',
            quo: '"'
        }[b];
    }));

    banners = banners.replace(/u'/g, '\'')
    banners = banners.replace(/'/g, '\"')

    var banner = JSON.parse(banners);

    for (var i = 1; i <= banner.length; i++) {
      var dots = document.querySelector(".dot-container");
      var dot = document.createElement("span");
      dot.classList.add("dot");
      dot.setAttribute("onclick", "currentSlide(" + i + ")");
      dots.appendChild(dot);

      var prev = document.querySelector(".prev");

      var slides = document.querySelector(".slide-container");
      var slide = document.createElement("div");
      slide.classList.add("mySlides");
      slide.classList.add("fade");
      slide.setAttribute("data-time", String(banner[i-1].fields.time));
      slide.style.zIndex = banner.length-i;
      // slide.style.animationName = "fade";
      // slide.style.animationDuration = String(parseInt(banner[i-1].fields.time)) + "s";
      // slide.style.WebkitAnimationName = "fade";
      // slide.style.WebkitAnimationDuration = String(parseInt(banner[i-1].fields.time)) + "s";
      var image = document.createElement("img");
      image.setAttribute("src", "/static/" + banner[i-1].fields.image);
      slide.appendChild(image);
      slides.insertBefore(slide, prev);
    }
}



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (slideIndex<0) {slideIndex=slides.length-1}
    else if (slideIndex>slides.length-1) {slideIndex=0}

    var next = slideIndex+1;
    if (next>slides.length-1){next=0}

    for (i = 0; i < slides.length; i++) {
      if (i==slideIndex){
        slides[i].style.zIndex = "3";
         
      }
      else if (i==next){slides[i].style.zIndex = "2";}
      else {slides[i].style.zIndex = "1";}
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].classList.add("active");

    clearTimeout(myVar);

    myVar = setTimeout(showSlides, (parseInt(slides[slideIndex].getAttribute("data-time"))+1)*1000);

    slideIndex++;
}

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//
// }
