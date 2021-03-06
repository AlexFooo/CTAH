const news = [{
    name: "Проекти",
    img: "./img/photo1.png",
    icon: "./img/project-icon.png",
    content: "Найбільший виклик сьогодні – знайти баланс між споживанням енергії та збереженням довкілл",
    date: "02.11.20"
}, {
    name: "Медіа",
    img: "./img/photo2.png",
    icon: "./img/media-icon.png",
    content: "Ким стати:гид для майбутнього енергетика",
    date: "02.11.20"
}, {
    name: "Практики",
    img: "./img/photo3.png",
    icon: "./img/practic-icon.png",
    content: "На прикарпатті під час мандрівного docudays ua говоритимуть про права дітей",
    date: "02.11.20"

}]


const project = news.map(item => (

    `
    <div class="project">
    
    <a href="#" class="project-card">
    <div class="left-project">
    <img src="${item.img}" alt="">
    </div>
    <div class="right-project">
    <div class="project-container">
    <div class="project-icon">
        <img src="${item.icon}" alt="">
    </div>
    <p>${item.name}</p>
</div>
    <div class="project-content">
        <p class="project-date">${item.date}</p>
        <p class="project-text">${item.content}</p>
        <a class="project-btn" href="#">Читати дали</a>
           </div>
    </div>
    </a>
    
    </div>
    
    
 `
))
project_wrapper.insertAdjacentHTML('afterbegin', project.join(''))