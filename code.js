// Here i will place smth global... what, i don know yet

function showPage(divId){

    // get div from given id
    const div = document.querySelector(`#${divId}`);
    if (div.style.display ==='none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

function clearAll(){
    // clears everything as mouse goes away
    document.querySelectorAll('div').forEach( div => div.style.display = 'none')
}


document.addEventListener('DOMContentLoaded', () =>{
    document.querySelectorAll('button').forEach( function (button){
        // on mouseenter show page
        button.onmouseenter  = function () {
            showPage(this.dataset.page);
        }
        // on mouseleave toggle off page

        button.onmouseleave = function () {
            clearAll();
        }

    })
})