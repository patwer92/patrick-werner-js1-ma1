// question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

cat.complain();


// result: Meow!




// question 2

const heading = document.querySelector("h3");

heading.innerHTML = `Updated Subheading`;



// question 3

heading.style.fontSize = "2em";



// question 4

heading.classList.add("Subheading");



//  question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    
    paragraphs[i].style.color = "red";
}






const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];



