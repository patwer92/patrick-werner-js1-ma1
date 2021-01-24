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

heading.innerHTML = "Updated Subheading";



// question 3

heading.style.fontSize = "2em";



// question 4

heading.classList.add("Subheading");



//  question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    
    paragraphs[i].style.color = "red";
}



// question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.background = "yellow";

// result: added a new paragraph with an yellow background color



// question 7

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

function printList(list) {

    for (let i = 0; i < list.length; i++) {

        console.log(list[i].name);

    }
    
}

printList(cats);

// result: Blob, Harold, Blurt



// question 8

let catProperty = "";

function createCats(cats) {
    for (let i = 0; i < cats.length; i++) {
        catProperty += "<h5>" + cats[i].name + "</h5>";


        let catAge = "Age unknown";

        if (cats[i].age) {
            catAge = cats[i].age;
        }
        
        catProperty += "<p>" + catAge + "</p>";

        // console.log(catProperty);
        
    }
    return catProperty;
    
}

const finalHtml = createCats(cats);

// console.log(finalHtml);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = finalHtml;

// result: 

// Blob
// 10

// Harold
// Unknown

// Blurt
// 21