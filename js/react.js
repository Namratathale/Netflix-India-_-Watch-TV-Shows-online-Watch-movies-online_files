

// ********* Language Button ******** //
// popover //
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })

    document.getElementById("myPopoverButton").addEventListener("click", function(event) {
var button = this;
var popover = document.getElementById("myPopover");

// Calculate position below the button
var rect = button.getBoundingClientRect();
var top = rect.bottom + window.scrollY;
var left = rect.left + window.scrollX;

popover.style.top = top + "px" ;
popover.style.left = left + "px";

// Toggle popover visibility
popover.style.display = (popover.style.display === "block") ? "none" : "block";

// Prevent event propagation to document
event.stopPropagation();
});

document.addEventListener("click", function(event) {
var popover = document.getElementById("myPopover");

// Check if click is outside the popover
if (!popover.contains(event.target) && popover.style.display === "block") {
popover.style.display = "none";
}
});
// changing Eng and hindi //
document.getElementById("buttonB").addEventListener("click", function() {
let textA = document.getElementById("textA");
textA.innerText = " English ";
});

document.getElementById("buttonC").addEventListener("click", function() {
let textA = document.getElementById("textA");
textA.innerText = " हिन्दी ";
});

document.getElementById("email").addEventListener("input", function() {
let emailInput = this.value;
let errorMessage = document.getElementById("error-message");
let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

if (!emailPattern.test(emailInput)) {
    errorMessage.style.display = "block";
    this.classList.add("invalid");
} else {
    errorMessage.style.display = "none";
    this.classList.remove("invalid");
}
});
// Email Verification //
document.getElementById("email").addEventListener("input", function() {
let emailInput = this.value;
let errorMessage = document.getElementById("error-message");
let validMessage = document.getElementById("valid-message");
let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

if (emailInput === "") {
    errorMessage.style.display = "block";
    validMessage.style.display = "none";
    this.classList.add("invalid");
    this.classList.remove("valid");
} else if (!emailPattern.test(emailInput)) {
    errorMessage.style.display = "none";
    validMessage.style.display = "block";
    this.classList.add("invalid");
    this.classList.remove("valid");
} else {
    errorMessage.style.display = "none";
    validMessage.style.display = "none";
    this.classList.remove("invalid");
    this.classList.add("valid");
}
});

// ************* Slides *********** //
let currentSlide = 0;
const imagesPerSlide = 3;

// Array of slide images  //
const carouselImages = [
'images/Devaramov.webp', 'images/Dopattimov.webp', 'images/Meiyazamov.webp', 'images/kalkimov.webp',
'images/BhoolBhumov2.webp', 'images/AAAABQB3Wm713-pd4FPsVNbQcgjcHI6SH9HzKyuoLT3JTJsC1bXmHLMpCLjA.webp', 'images/Khelmov.webp', 'images/AAAABRZhdEIX6X_tguhBE7pbrdUqozGJ0ALpmBASefnQbIpsUpdUYXlXce5i.webp',
'images/theJackingmov.webp', 'images/Baghiramov.webp'
];
//Array of Modal Images //
const modalDetails = [
{
    background: 'images/Devara.png',
    title: ' 2024 . U/A 16+ . Movie . Action . Drama',
    caption: 'A mighty sea warrior takes a violent stand against the criminal deeds of his village. Years later, his mild-mannered son walks a path of his own.'
},
{
    background: 'images/Dopatti.png',
    title: ' 2024 . U/A 16+ . Movie . Trriller . Mistries . Drama',
    caption: 'A puzzling investigation leads a no-nonsense cop down a dark path involving the vicious rivalry between twin sisters and the volatile man they both love.'
},
{
    background: 'images/Meiyaz.png',
    title: ' 2024 . U/A 7+ . Drama',
    caption: 'A man makes a bittersweet journey back to his hometown after 22 years and meets an insistent yet kindhearted relative whose name he cannot remember.'
},
{
    background: 'images/kalki.png',
    title: ' 2024 . U/A 13+ . Movie . Sci-Fi . Action ',
    caption: 'The future of those in the dystopian city of Kasi is altered when the destined arrival of Lord Vishnus final avatar launches a war against darkness.'
},
{
    background: 'images/BhoolBhu2.png',
    title: ' 2022 . U/A 13+ . Movie . Horror . Comedy',
    caption: 'When strangers Reet and Ruhan cross paths, their journey leads to an abandoned mansion and a dreaded spirit who has been trapped for 18 years.'
},
{
    background: 'images/vijay.png',
    title: ' 2024 . U/A 13+ . Movie . Adventure . Drama',
    caption: 'An adventurous, foul-mouthed former swimming coach reaches for record-breaking glory when he attempts a triathlon at 69 years old.'
},
{
    background: 'images/khel.png',
    title: ' 2024 . U/A 16+ . Movie . Emotional . Comedy',
    caption: 'An unhappily married couple and five friends decide to share every call or text they get over one night with each other. There is nothing to hide — right?'
},
{
    background: 'images/timecut.png',
    title: ' 2024 . U/A 16+ . Movie . Horror . Sci-Fi',
    caption: 'A teen in 2024 accidentally time-travels to 2003, days before a masked killer murders her sister. Can she change the past without destroying the future?'
},
{
    background: 'images/buckingham.png',
    title: ' 2024 . U/A 16+ . Movie . Crime . Mystery',
    caption: 'When a teen boy’s murder rattles a quiet English town, a grieving detective uncovers the hidden hostilities beneath its idyllic surface.'
},
{
    background: 'images/baghira.png',
    title: ' 2024 . U/A 16+ . Crime . Action . Adventure',
    caption: 'Dismayed by corruption and violence, a virtuous police officer becomes a masked vigilante to deliver lethal justice to criminals and crooked cops alike.'
},
// can Add more objects for other images with different backgrounds and captions
];

// slide changing and arrows previous, next //
const slidesContainer = document.getElementById("slides");
carouselImages.forEach((image, index) => {
const imgElement = document.createElement("img");
imgElement.src = image;
imgElement.alt = `Image ${index + 1}`;
imgElement.onclick = function () {
    openModal(modalDetails[index]);
};
slidesContainer.appendChild(imgElement);
});

function changeSlide(direction) {
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
const visibleSlides = 4.5;
const maxSlideIndex = totalSlides - visibleSlides;

currentSlide += direction * imagesPerSlide;
if (currentSlide < 0) {
    currentSlide = 0;
} else if (currentSlide > maxSlideIndex) {
    currentSlide = maxSlideIndex;
}

slides.style.transform = `translateX(-${currentSlide * (100 / visibleSlides)}%)`;
updateArrows();
}

function updateArrows() {
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const totalSlides = document.querySelector('.slides').children.length;
const visibleSlides = 4.5;

if (currentSlide === 0) {
    prevButton.classList.add("hidden");
} else {
    prevButton.classList.remove("hidden");
}

if (currentSlide >= totalSlides - visibleSlides) {
    nextButton.classList.add("hidden");
} else {
    nextButton.classList.remove("hidden");
}
}
// Content of Modal // 
function openModal(details) {
const modal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent"); // Ensure we target the modal content correctly
const captionText = document.getElementById("caption");
const modalTitle = document.getElementById("modalTitle");

modal.style.display = "block";
modalContent.style.backgroundImage = `url(${details.background})`;
modalTitle.innerHTML = `.${details.title}`;
captionText.textContent = details.caption;
}

// for closing modal when the user clicks on the close button
document.getElementById("closeModal").onclick = function() {
document.getElementById("imageModal").style.display = "none";
}

// for closing modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
const modal = document.getElementById("imageModal");
if (event.target === modal) {
    modal.style.display = "none";
}
}

// Initialize with the first set of images
changeSlide(0);


// ************** Questions ************ //

function toggleAnswer(element) {
var allAnswers = document.querySelectorAll('.answer');
var allPlusIcons = document.querySelectorAll('.plus-icon');
var answer = element.nextElementSibling;
var isCurrentlyOpen = answer.classList.contains('open');

// Close all answers and reset all plus icons
allAnswers.forEach(function(ans) {
ans.classList.remove('open');
ans.style.maxHeight = null;
});
allPlusIcons.forEach(function(icon) {
icon.textContent = '+';
});

// If the clicked element was not open, open it
if (!isCurrentlyOpen) {
answer.classList.add('open');
element.querySelector('.plus-icon').textContent = 'x';
answer.style.maxHeight = answer.scrollHeight + "px";
}
}
// ///////////////////

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
myInput.focus()
})

