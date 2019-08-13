const checkboxes = document.querySelector('.inbox').getElementsByTagName('input');
// shift + click 把所有的都选中
console.log(checkboxes);
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleClick)
});
function handleClick(event) {
    console.log(event);
    if(event.shifkey && this.checked){
        checkboxes.forEach(checkbox => {
            checkbox.checked = !this.checked;
        })
    }   
}