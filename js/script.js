const outputSectionEl = document.querySelector('#output');

const ourTeam = [
    {
        Photo: 'wayne-barnett-founder-ceo.jpg',
        Name: 'Wayne Barnett',
        Position: 'Founder & CEO'
    },
    {
        Photo: 'angela-caroll-chief-editor.jpg',
        Name: 'Angela Caroll',
        Position: 'Chief Editor'
    },
    {
        Photo: 'walter-gordon-office-manager.jpg',
        Name: 'Walter Gordon',
        Position: 'Office Manager'
    },
    {
        Photo: 'angela-lopez-social-media-manager.jpg',
        Name: 'Angela Lopez',
        Position: 'Social Media Manager'
    },
    {
        Photo: 'scott-estrada-developer.jpg',
        Name: 'Scott Estrada',
        Position: 'Developer'
    },
    {
        Photo: 'barbara-ramos-graphic-designer.jpg',
        Name: 'Barbara Ramos',
        Position: 'Graphic Designer'
    }
]

for (let index = 0; index < ourTeam.length; index++){
    const articleEl = document.createElement('article');
    for (let key in ourTeam[index]) {
        const divEl = document.createElement('div');
        if(key == 'Photo'){
            const imgEl = document.createElement('img');
            imgEl.setAttribute('src', 'img/' + ((ourTeam[index])[key]));
            imgEl.setAttribute('alt', 'img/' + ((ourTeam[index])['Name'] + ' photo'));
            divEl.appendChild(imgEl);
        } else {
            divEl.append((ourTeam[index])[key]);
        }

        if(key == 'Name'){
            divEl.classList.add('card-name');
        }
        articleEl.appendChild(divEl);
    }
    outputSectionEl.appendChild(articleEl);
}