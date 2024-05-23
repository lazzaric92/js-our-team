const outputSectionEl = document.querySelector('#output');

const ourTeam = [
    {
        image: 'wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        position: 'Founder & CEO'
    },
    {
        image: 'angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        position: 'Chief Editor'
    },
    {
        image: 'walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        position: 'Office Manager'
    },
    {
        image: 'angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        position: 'Social Media Manager'
    },
    {
        image: 'scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        position: 'Developer'
    },
    {
        image: 'barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        position: 'Graphic Designer'
    }
]

for (let index = 0; index < ourTeam.length; index++){
    const member = ourTeam[index];
    console.log(member.name, member.position, member.image);
    const articleEl = document.createElement('article');
    for (let key in member) {
        const divEl = document.createElement('div');
        const pEl = document.createElement('p');
        if(key == 'image'){
            const imgEl = document.createElement('img');
            imgEl.setAttribute('src', 'img/' + (member[key]));
            imgEl.setAttribute('alt', 'img/' + member.name + ' photo');
            divEl.appendChild(imgEl);
        } else {
            pEl.append(member[key]);
            divEl.appendChild(pEl);
        }

        if(key == 'name'){
            pEl.classList.add('card-name');
        }
        articleEl.appendChild(divEl);
    }
    outputSectionEl.appendChild(articleEl);
}