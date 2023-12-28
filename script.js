 data = [{
    'img1': 'Assets/Projek.jpg',
    'img2': 'Assets/meme.jpg',
    'title':'Web E-Learning',
    'subtitle': 'Zenit',
    'desc': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nulla nesciunt impedit totam aperiam vitae enim, incidunt porro ullam."
 }, {
    'img1': 'Assets/Champions.jpg',
    'img2': 'Assets/MCL.jpg',
    'title':'Mobile Legend',
    'subtitle': 'Champions MCL',
    'desc': "Ini adalah kemenangan MCL Pertamaku, yang diraih pada tanggal 4 September 2021."
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

