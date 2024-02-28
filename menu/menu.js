function Sun(sunId) {
  let sun = document.getElementById(sunId);
  sun.classList.remove("sun_anime_reverse");
  sun.classList.add("sun_anime");
}
function Cloud(cloudId) {
  let cloud = document.getElementById(cloudId);
  cloud.classList.remove("cloud_anime_reverse");
  cloud.classList.add("cloud_anime");
}
function Day(dayId) {
  let day = document.getElementById(dayId);
  day.classList.remove("day_anime_reverse");
  day.classList.add("day_anime");
}

function Night(nightId) {
  let night = document.getElementById(nightId);
  night.classList.remove("night_anime_reverse");
  night.classList.add("night_anime");
}
function Moon(moonId) {
  let moon = document.getElementById(moonId);
  moon.classList.remove("moon_anime_reverse");
  moon.classList.add("moon_anime");
}
function Photo_Day(photo1Id) {
  let photo1 = document.getElementById(photo1Id);
  photo1.classList.remove("container_day");
  photo1.classList.add("container_night");
}
function Button1_day(button1Id) {
  let button1 = document.getElementById(button1Id);
  button1.classList.remove("button1_day");
  button1.classList.add("button1_night");
}
function Button2_day(button2Id) {
  let button2 = document.getElementById(button2Id);
  button2.classList.remove("button2_day");
  button2.classList.add("button2_night");
}
function Button3_day(button3Id) {
  let button3 = document.getElementById(button3Id);
  button3.classList.remove("button3_day");
  button3.classList.add("button3_night");
}
function Button4_day(button4Id) {
  let button4 = document.getElementById(button4Id);
  button4.classList.remove("button4_day");
  button4.classList.add("button4_night");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function Moon_reverse(moonId) {
  let moon = document.getElementById(moonId);
  moon.classList.remove("moon_anime");
  moon.classList.add("moon_anime_reverse");
}
function Night_reverse(nightId) {
  let night = document.getElementById(nightId);
  night.classList.remove("night_anime");
  night.classList.add("night_anime_reverse");
}
function Day_reverse(dayId) {
  let day = document.getElementById(dayId);
  day.classList.remove("day_anime");
  day.classList.add("day_anime_reverse");
}
function Cloud_reverse(cloudId) {
  let cloud = document.getElementById(cloudId);
  cloud.classList.remove("cloud_anime");
  cloud.classList.add("cloud_anime_reverse");
}
function Sun_reverse(sunId) {
  let sun = document.getElementById(sunId);
  sun.classList.remove("sun_anime");
  sun.classList.add("sun_anime_reverse");
}
function Photo_Night(photo1Id) {
  let photo1 = document.getElementById(photo1Id);
  photo1.classList.remove("container_night");
  photo1.classList.add("container_day");
}
function Button1_night(button1Id) {
  let button1 = document.getElementById(button1Id);
  button1.classList.remove("button1_night");
  button1.classList.add("button1_day");
}
function Button2_night(button2Id) {
  let button2 = document.getElementById(button2Id);
  button2.classList.remove("button2_night");
  button2.classList.add("button2_day");
}
function Button3_night(button3Id) {
  let button3 = document.getElementById(button3Id);
  button3.classList.remove("button3_night");
  button3.classList.add("button3_day");
}
function Button4_night(button4Id) {
  let button4 = document.getElementById(button4Id);
  button4.classList.remove("button4_night");
  button4.classList.add("button4_day");
}
let isTrue = true;

function Check() {
  if (isTrue) {
    Sun("Sun");
    Cloud("Cloud");
    Day("Day");
    Night("Night");
    Moon("Moon");
    Photo_Day("Photo_day");
    Button1_day("Button_1");
    Button2_day("Button_2");
    Button3_day("Button_3");
    Button4_day("Button_4");
  } else {
    Moon_reverse("Moon");
    Night_reverse("Night");
    Day_reverse("Day");
    Cloud_reverse("Cloud");
    Sun_reverse("Sun");
    Photo_Night("Photo_day");
    Button1_night("Button_1");
    Button2_night("Button_2");
    Button3_night("Button_3");
    Button4_night("Button_4");
  }
  isTrue = !isTrue;
}

let audio = document.getElementById("Sound");

function Sound() {
  let audio = document.getElementById("Sound");
  audio.play();
}
function Sound1() {
  let audio = document.getElementById("Sound1");
  audio.play();
}
function Sound2() {
  let audio = document.getElementById("Sound2");
  audio.play();
}
function Sound3() {
  let audio = document.getElementById("Sound3");
  audio.play();
}

function Settings() {
  let set = document.getElementById("Buttons");
  let set_new = document.getElementById("Settings");
  set.style.display = "none";
  set_new.style.display = "flex";
}
function Settings_back() {
  let back = document.getElementById("Settings");
  let back_new = document.getElementById("Buttons");
  back.style.display = "none";
  back_new.style.display = "block";
}

function Customise() {
  let set = document.getElementById("Buttons");
  let set_new = document.getElementById("Customise");
  set.style.display = "none";
  set_new.style.display = "flex";
}
function Customise_back() {
  let back = document.getElementById("Customise");
  let back_new = document.getElementById("Buttons");
  back.style.display = "none";
  back_new.style.display = "block";
}

function Sound_enter() {
  let audio = document.getElementById("Sound_enter");
  audio.play();
}
function Sound_back() {
  let audio = document.getElementById("Sound_back");
  audio.play();
}

/////////////////////SOUND//////////////

document.addEventListener("DOMContentLoaded", function () {
  let size = 42;
  let circle = null;
  let isDragging = false;
  let offset = { x: 0 };

  document.addEventListener("mousedown", function (event) {
    if (event.target.id === "Circle") {
      circle = event.target;
      isDragging = true;
      offset.x = event.clientX - circle.getBoundingClientRect().left;
    }
  });

  document.addEventListener("mousemove", function (event) {
    if (isDragging && circle) {
      event.preventDefault();
      let newX = Math.round((event.pageX - offset.x) / size) * size;
      circle.style.transform = `translateX(${newX}px)`;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    offset.x = 0;
    circle = null;
  });
});
