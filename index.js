let i = 0;
const dialog = document.querySelector('dialog');
const btnDialog = document.querySelector('.btnDialog');
btnDialog.onclick = (event) => {
    if (i % 2 == 0) { 
        dialog.show(); // show opens the dialog as a non-modal
        dialog.innerHTML =`<h1>This is a non-modal dialog</h1>
                            <p>Close it with the same button you used to open it (top-right corner)</p>
                            <p>non-modal dialog does not take focus away from the page content 
                                <br />
                                i.e. you can still some-what interact (e.g copy) with the main page content
                            </p>
                            <form>
                                <h3>Example Form inside a dialog</h3>
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name here"/>  
                                <br />
                                <textarea draggable disabled name="message" id="message" cols="30" rows="2"></textarea>
                                <button onclick=btnClicked()>Click This</button>
                            </form>`;
        btnDialog.textContent = "dialog: close";
        // we can also add event listeners inside the dialog
        document.getElementById('name').onkeyup = (event) => { // can be onchange
            document.getElementById('message').value = `Hello ${event.target.value}!`;
        }
    } else {
        dialog.close();
        btnDialog.textContent = "dialog: open"
    }
    i++;
};
const btnModal = document.querySelector('.btnModal');
btnModal.onclick = (event) => {
    dialog.innerHTML =`<h1>This is a modal</h1>
                        <p class="alert">Close it with the button below</p>
                        <p>Modal takes the focus away from the background!<br/>You can't interact with the main page content in this state.</p>
                        <h2>Both dialogs and modals can hold anything</h2>
                        <p>For example, here is an embedded youtube video 📼</p>`
                        +
                        `<iframe width="75%" 
                            src="https://www.youtube.com/embed/URCClNrYiBA?si=8w2tWZhWpUa50yIs&amp;start=180" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen></iframe><br/>`;
    // create a button inside the modal for closing
    dialog.showModal(); // show opens the dialog as a non-modal
    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('alert');
    btn.textContent = 'modal: close';
    dialog.appendChild(btn);

    // we have to handle this button work from inside here because this button only exists from in here
    btn = document.querySelector('button.btn');
    btn.onclick = (event) => {
        dialog.close(); 
        // remove the button inside the modal
        dialog.removeChild(btn);
    }
}

function btnClicked(event) {
    alert(`Hello `+ document.getElementById('name').value);
}