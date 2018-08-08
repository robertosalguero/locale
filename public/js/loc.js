const postForm = document.querySelector("form.new-post");
const latInput = document.querySelector('input#lat');
const longInput = document.querySelector('input#long');

let setLatLong = false;
console.log('getCurrentPosition');

function getPosSuccess (pos) {
    console.log(pos)
    latInput.value = pos.coords.latitude;
    longInput.value = pos.coords.longitude;
    setLatLong = true;
}

function getPosError (pos) {
    (error) => console.log(error);
}

navigator.geolocation.getCurrentPosition(getPosSuccess, getPosError);
