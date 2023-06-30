//write Namaste Everyone using javascript

// const heading =document.getElementById("root");
// const myPara= document.createElement("h1");
// myPara.innerHTML= "Namaste Everyone!";

// heading.appendChild(myPara);


//writing Namste Everyone using react
const myElement= React.createElement("h1",
{
    id:"heading",
},"Namaste Dosto"
)

const subHeading = React.createElement("h3",{
    id:"subheading",
},"We are learning React today!")

const heading = React.createElement("div",
{
    id:"container",
},
[myElement,subHeading])

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);