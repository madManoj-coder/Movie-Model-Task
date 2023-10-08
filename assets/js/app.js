const cl = console.log;

const backDrop = document.getElementById("backDrop");
const ourModal = document.getElementById("ourModal");
const addMovie = document.getElementById("addMovie");
const cancelCard = [...document.querySelectorAll(".cancelCard")];

const onAddBtn = () => {
    backDrop.classList.toggle("active")
    ourModal.classList.toggle("active")

    cancelCard.forEach(ele => {
        // cl(ele)
        ele.addEventListener("click",onAddBtn)
    })
}





addMovie.addEventListener("click", onAddBtn);






