const reviews = [
    {
        id: 1,
        name: "Gilbert E. Tineo",
        job: "Software Developer",
        img: "https://image.shutterstock.com/image-photo/serious-young-bearded-business-man-260nw-1564948399.jpg",
        text: " I´m a Software Ingenier",
    },

    {
        id: 2,
        name: " Lorayne Mariesca",
        job: "Doctor",
        img: "https://st.depositphotos.com/1594308/2420/i/600/depositphotos_24201329-stock-photo-enthusiastic-intern.jpg",
        text: "cardiology",
    },

    {
        id: 3,
        name: "Albert Ramírez",
        job: "Doctor",
        img: "https://post.medicalnewstoday.com/wp-content/uploads/2019/01/Male_Doctor_732x549-thumbnail.jpg",
        text: "Psychologist",
    },

];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
 showPerson(currentItem);
});


function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
    currentItem = 0;
    };

    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);
});
