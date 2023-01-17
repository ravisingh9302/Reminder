console.log('in this vedio project is to be done ')

// ADD NOTE BUTTON

let aa = document.getElementById('addbtn');
aa.addEventListener('click', function (fun1) {
    let noteswrite = document.getElementById('addtext');
    bb = localStorage.getItem('Notes');

    if (bb == null) {
        dd = [];
    }
    else {
        dd = JSON.parse(localStorage.getItem('Notes'))
    }

    dd.push(noteswrite.value);
    localStorage.setItem('Notes', JSON.stringify(dd));
    noteswrite.value = '';
    shownotes();

});

shownotes();
// SHOW NOTES

function shownotes() {
    let ff = '';
    dd = JSON.parse(localStorage.getItem('Notes'))
    dd.forEach(function (element, index) {

        ff += `
        <div class="card notescard my-2 mx-2" style="width: 12rem;">
            <div class="card-body">
                <h5 class="card-title" id="notesno"> Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <a id="${index}" onclick="delnotes(this.id)" class="btn btn-primary">Delete Note</a>
            </div>
        </div>`;
    });

    let gg = document.getElementById('notescont');
    if (dd.length != 0) {
        gg.innerHTML = ff;
    }
    else {
        gg.innerHTML = '<h4>There is No Notes </h4>'
    }
};

// DELETE NOTES

function delnotes(index) {
    dd.splice(index, 1);
    localStorage.setItem('Notes', JSON.stringify(dd));
    shownotes();
};

//SEARCH MENU

let searchmenu = document.getElementById('searchbox');
searchmenu.addEventListener('input', function (fun3) {
    let inputword = searchbox.value;
    console.log('input event fired', inputword);
    let cardcontr = document.getElementsByClassName('notescard');
    Array.from(cardcontr).forEach(function (fun4) {
        let mm = fun4.getElementsByTagName('p')[0].innerText;

        if (mm.includes(inputword)) {
            fun4.style.display = "block";
        }
        else {
            fun4.style.display = "none";

        }
    });
});
