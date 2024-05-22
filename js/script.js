const outputSectionEl = document.querySelector('#output');

const ourTeam = [
    {
        Name: 'Wayne Barnett',
        Position: 'Founder & CEO',
        Photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        Name: 'Angela Caroll',
        Position: 'Chief Editor',
        Photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        Name: 'Walter Gordon',
        Position: 'Office Manager',
        Photo: 'walter-gordon-office-manager.jpg'
    },
    {
        Name: 'Angela Lopez',
        Position: 'Social Media Manager',
        Photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        Name: 'Scott Estrada',
        Position: 'Developer',
        Photo: 'scott-estrada-developer.jpg'
    },
    {
        Name: 'Barbara Ramos',
        Position: 'Graphic Designer',
        Photo: 'barbara-ramos-graphic-designer.jpg'
    }
]

for (let index = 0; index < ourTeam.length; index++){
    const articleEl = document.createElement('article');
    for (let key in ourTeam[index]) {
        const divEl = document.createElement('div');
        divEl.append((ourTeam[index])[key]);
        if(key == 'Name'){
            divEl.classList.add('card-name');
        }
        articleEl.appendChild(divEl);
    }
    outputSectionEl.appendChild(articleEl);
}