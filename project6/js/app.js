// Data is an array of objects which contains information about the candidates
console.log('hii');
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]
// Iterator function 
function cvIterator(profiles){
    let nextindex =0;
    return{
        next: function(){
            return nextindex<profiles.length?
            {value: profiles[nextindex++],
            done:false
            }:
            {done:true}
        }
    }
}
const next=document.getElementById('next');
// its for the btn next 
next.addEventListener('click', nextCV);

const candidates =cvIterator(data);
nextCV();

function nextCV(){
    const currentcandidates = candidates.next().value;
    let Image=document.getElementById('Image');
    let profile =document.getElementById('profile');
        if(currentcandidates!=undefined){
        Image.innerHTML=` <img src ='${currentcandidates.image}'> `
        profile.innerHTML=`<ul class="list-group">
        <li class="list-group-item">Name: ${currentcandidates.name}</li>
        <li class="list-group-item">${currentcandidates.age} years old</li>
        <li class="list-group-item">Lives in ${currentcandidates.city}</li>
        <li class="list-group-item">Primarily works on ${currentcandidates.language}</li>
        <li class="list-group-item">Uses ${currentcandidates.framework} framework</li>
    </ul>`;
    }else{
        alert('khatam tata byby');
        window.location.reload()
    }    
}
