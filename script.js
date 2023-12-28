 data = [{
    'img1': 'Projek.jpg',
    'img2': 'meme.jpg',
    'title':'Web E-Commerce',
    'subtitle': 'Zenit',
    'desc': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nulla nesciunt impedit totam aperiam vitae enim, incidunt porro ullam."
 }, {
    'img1': 'Projek.jpg',
    'img2': 'meme.jpg',
    'title':'Web Design',
    'subtitle': '',
    'desc': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nulla nesciunt impedit totam aperiam vitae enim, incidunt porro ullam."
 }]

 var container = document.querySelector('.container-project')

 data.forEach(element => {
    container.innerHTML += 
    `<div class="project">
        <div class="img-project">
            <img src=" `+element.img1+`"alt="">
            <img src= "${element.img2}" alt="">
        </div>
        <div class="desc-project">
            <h1>${element.title}</h1>
            <h2>${element.subtitle}</h2>
            <p>${element.desc}</p>
        </div>
        <button class="read-more">Read More</button>
    </div>`

 });

