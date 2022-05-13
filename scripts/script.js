/*
<article class="person">
    <img class="person__image"/>
    <h2 class="person__name"></h2>
    <h3 class="person__title"></h3>
    <p class="person__biography"></p>
    <span class="person__favorite-show"></span>
    <ol class="person__favourite-technologies">
        <li class="person__favorite-technology"></li>
        <li class="person__favorite-technology"></li>
        <li class="person__favorite-technology"></li>
    </ol>

    <footer class="person__footer">
        <a class="person__button person__button--party"></a>
        <a class="person__button"></a>
    </footer>
</article>
*/

const people = [ 
    {
        name: "Andrew",
        title: "Senior Educator",
        biography: "I’ve been a web developer for more than ten years now (umm, has it been that long?), with everything from agencies, to small, scrappy startup teams, to bigger companies trying to reinvent slow-moving industries. I lean towards frontend development, especially JavaScript frameworks and single-page web apps, but I am a full-stack developer and I’ve also dabbled in UX/UI design. I have a special fondness for the mysteries and miracles of CSS.",
        imageUrl: "/assets/images/andrew.jpg",
        favoriteShow: "Maple Leafs Hockey",
        favoriteTechnologies: [
            "TypeScript", 
            "JavaScript", 
            "CSS"
        ]
    },
    {
        name: "Nolan",
        title: "Senior Educator",
        biography: "I’ve been a web developer for more than ten years now (umm, has it been that long?), with everything from agencies, to small, scrappy startup teams, to bigger companies trying to reinvent slow-moving industries. I lean towards frontend development, especially JavaScript frameworks and single-page web apps, but I am a full-stack developer and I’ve also dabbled in UX/UI design. I have a special fondness for the mysteries and miracles of CSS.",
        imageUrl: "/assets/images/nolan.jpg",
        favoriteShow: "Maple Leafs Hockey",
        favoriteTechnologies: [
            "TypeScript", 
            "JavaScript", 
            "CSS"
        ]
    },
    {
        name: "Fahd",
        title: "Senior Educator",
        biography: "I’ve been a web developer for more than ten years now (umm, has it been that long?), with everything from agencies, to small, scrappy startup teams, to bigger companies trying to reinvent slow-moving industries. I lean towards frontend development, especially JavaScript frameworks and single-page web apps, but I am a full-stack developer and I’ve also dabbled in UX/UI design. I have a special fondness for the mysteries and miracles of CSS.",
        imageUrl: "/assets/images/fahd.jpg",
        favoriteShow: "Maple Leafs Hockey",
        favoriteTechnologies: [
            "TypeScript", 
            "JavaScript", 
            "CSS"
        ]
    },
    {
        name: "Siulok",
        title: "Senior Educator",
        biography: "I’ve been a web developer for more than ten years now (umm, has it been that long?), with everything from agencies, to small, scrappy startup teams, to bigger companies trying to reinvent slow-moving industries. I lean towards frontend development, especially JavaScript frameworks and single-page web apps, but I am a full-stack developer and I’ve also dabbled in UX/UI design. I have a special fondness for the mysteries and miracles of CSS.",
        imageUrl: "/assets/images/siulok.jpg",
        favoriteShow: "Maple Leafs Hockey",
        favoriteTechnologies: [
            "TypeScript", 
            "JavaScript", 
            "CSS"
        ]
    },
    
];

displayPeople(people);

function displayPeople(peopleArray) {
    const peopleEl = document.querySelector(".people");

    peopleArray.forEach(person => {
        let personEl = createPersonEl(person);

        peopleEl.appendChild(personEl);
    });
}

function createPersonEl(personObject) {
    const personEl = document.createElement("article");
    personEl.classList.add("person");

    const imageEl = createElementWithClass("img", "person__image");
    imageEl.setAttribute("src", personObject.imageUrl);
    personEl.appendChild(imageEl);

    const nameEl = createElementWithClass("h2", "person__name");
    nameEl.textContent = personObject.name;
    personEl.appendChild(nameEl);

    const titleEl = createElementWithClass("h3", "person__title");
    titleEl.textContent = personObject.title;
    personEl.appendChild(titleEl);

    const biographyEl = createElementWithClass("p", "person__biography");
    biographyEl.textContent = personObject.biography;
    personEl.appendChild(biographyEl);

    const favoriteShowEl = createElementWithClass("span", "person__favorite-show");
    favoriteShowEl.textContent = personObject.favoriteShow;
    personEl.appendChild(favoriteShowEl);

    const favoriteTechnologiesEl = createFavoriteTechnologiesEl(personObject.favoriteTechnologies);

    personEl.appendChild(favoriteTechnologiesEl);

    const footerEl = createFooterEl();

    personEl.appendChild(footerEl);

    return personEl;
}

function createFavoriteTechnologiesEl(favoriteTechnologies) {
    // It's an array -> we still need to create our list items
    const favoriteTechnologiesEl = createElementWithClass("ol", "person__favourite-technologies");

    // create 3 LIs, give them classes and append them to the ol
    // forEach?
    favoriteTechnologies.forEach((technology) => {
        const technologyEl = createElementWithClass("li", "person__favorite-technology");
        technologyEl.textContent = technology;
        favoriteTechnologiesEl.appendChild(technologyEl);
    })

    return favoriteTechnologiesEl;
}

/**
 * 
 * @param string tagName 
 * @param string className 
 * @returns HTMLElement
 */
function createElementWithClass(tagName, className) {
    const el = document.createElement(tagName);
    el.classList.add(className)

    return el;
}

function createFooterEl() {
    const footerEl = createElementWithClass("footer", "person__footer");

    const partyEl = createElementWithClass("a", "person__button");
    partyEl.classList.add("person__button--party");
    footerEl.appendChild(partyEl);

    const contactEl = createElementWithClass("a", "person__button");
    footerEl.appendChild(contactEl);

    return footerEl;
}