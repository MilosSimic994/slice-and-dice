const persons = [
  {
    qoute:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis repudiandae iure",
    name: "Milos Simic",
    job: "FE Developer",
    company: "PH",
    img: "./images/carousel-3.jpg",
  },
  {
    qoute:
      "Mollitia corporis, quam numquam eum aut quidem suscipit perspiciatis quis porro facilis.",
    name: "Ana Jov",
    job: "Interaction desingner",
    company: "Reserved",
    img: "./images/carousel-2.jpg",
  },
  {
    qoute:
      "Ibero inventore quis unde architecto ex eaque praesentium tempora delectus",
    name: "Tara Sims",
    job: "Actor ",
    company: "Hollywood",
    img: "./images/carousel-1.jpg",
  },
];

const quotes = document.querySelector(".quote");
const personImg = document.getElementById("person-img");
const navigation = document.querySelectorAll(".carousel-nav div");

console.log(navigation);
let index = 0;

function ja() {
  if (index > persons.length - 1) {
    index = 0;
  }
  personImg.src = persons[index].img;
  quotes.innerHTML = `
             <p >"${persons[index].qoute}"</p>
            <div class="customer">
                <p >${persons[index].name}</p>
                <p >${persons[index].job}</p>
                <p >${persons[index].company}</p>
            </div>
      `;

  index++;
}
ja();
setInterval(ja, 5000);

navigation.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-id");
    index = id;
    ja();
  });
});
