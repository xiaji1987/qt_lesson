const circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
// console.log(radius);
var circumference = radius * 2 * Math.PI;
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;
const input = document.querySelector('input');
const text = document.querySelector('text');
input.addEventListener('change', function(){
    setProgress(input.value);
})
function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
    text.innerHTML = percent;
}
