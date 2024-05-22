var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;

xIcon.addEventListener("click", function(){
    typeNote();
})

checkIcon.addEventListener("click", function(){
    createNote();
})

function typeNote(){
    if(container3.style.display == "none"){
        container3.style.display = "block";
    }
    else{
        container3.style.display = "none";
    }

}

function createNote(){
    var noteText = document.getElementById("note-text").value;
    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");

    node1.innerHTML = noteText;

    node1.setAttribute("style", "width: 250px; height: 250px; font-size: 18px; padding: 25px; margin-top: 10px; overflow: hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.25)");

    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    node0.appendChild(node1);

    container2.insertAdjacentElement("beforeend", node0);

    node0.addEventListener("mouseenter", function(){
        node0.style.transform = "scale(1.1)";
    })

    node0.addEventListener("mouseleave", function(){
        node0.style.transform = "scale(1)";
    })

    node0.addEventListener("dblclick", function(){
        node0.remove();
    })

    document.getElementById("note-text").value= '';

}

function margin(){
var random_margin = ["10px", "15px", "20px"];

return random_margin[Math.floor(Math.random()*random_margin.length)];
}

function rotate(){
    var random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "roatate(-5deg)", "rotate(-10deg"];

    return random_rotate[Math.floor(Math.random()*random_rotate.length)];
}

function color(){
    var random_color = ["rgba(255,255,255,0.25)"]; 
    //#9880ff", "#eaff00", "#ff4d00", "#fe875a", "#112267", "#ffcdea"
    if (i> random_color.length -1){
        i = 0;
    }
    return random_color[i++];

}

  // ABOUT BUTTON
  function togglePopup() {
    var popup = document.getElementById('aboutPopup');
    var background = document.getElementById('popupBackground');
    if (popup.style.display === 'none') {
        popup.style.display = 'block';
        background.style.display = 'block'; // Show the background
    } else {
        popup.style.display = 'none';
        background.style.display = 'none'; // Hide the background
    }
}

// Connect the button to the toggle function
document.getElementById('aboutBtn').addEventListener('click', togglePopup);


  // FILTER 
        function filterImages(category) {
    const images = document.querySelectorAll('.image-item');

    images.forEach((image) => {
        if (category === 'all' || image.dataset.category === category) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

 // ACTIVE BUTTON

function setActiveButton(clickedButton) {
    // Get all buttons
    const buttons = document.querySelectorAll('.filter-btn');

    // Remove the active class from all buttons
    buttons.forEach(button => {
        button.classList.remove('active-button');
    });

    // Add the active class to the clicked button
    clickedButton.classList.add('active-button');
}

// Add click event listeners to buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        setActiveButton(this);
    });
});
