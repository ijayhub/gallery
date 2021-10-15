let places = [
    {
        
        title:'PARIS',
        Img:'paris.jpg',
        Destination:' paris a place to visit',
        Price:"$3500",
        link:"https://en.wikipedia.org/wiki/Paris"
    },
    {
        
        title:'CAMEROON',
        Img:'cameroon.jpg',
        Destination:' Sabga Hill',
        Price:"$700",
        link:"https://en.wikipedia.org/wiki/Bambui"
    },
    {
        title:'DUBAI',
        Img:'dubai.jpg',
        Destination:'A visit to dubai a beautiful place',
        Price:"$1500",
        link:"https://www.planetware.com/tourist-attractions-/dubai-uae-dub-dubai.htm"   
    },
    {
        title:'IVORY COAST',
        Img:'ivory.jpeg',
        Destination:'la-cascade-de-la-dent-man',
        Price:"$1000",
        link:"https://en.wikipedia.org/wiki/Man,_Ivory_Coast"   
    },
    {
        title:'DISNEY',
        Img:'disney.jpg',
        Destination:'A visit to disneyland located at Orlando florida,USA',
        Price:"$3500",
        link:"https://disneyworld.disney.go.com/"   
    },
    {
        title:'LONDON',
        Img:'london.jpg',
        Destination:'Try a visit to london',
        Price:"$2500",
        link:"https://en.wikipedia.org/wiki/London"   
    },
    {
        title:'TANZANIA',
        Img:'tanzania.jpg',
        Destination:'selous-game-reseve',
        Price:"$1500",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, atque itaque",
        link:"https://www.touropia.com/tourist-attractions-in-tanzania/"   
    },
    {
        title:'CANADA',
        Img:'canada.jpg',
        Destination:'Canada',
        Price:"$2500",
        link:"https://en.wikipedia.org/wiki/Canada"   
    },
    {
        
        title:'OBUDU',
        Img:'obudu.jpg',
        Destination:'Obudu Cattle Ranch',
        Price:"$500",
        link:"http://www.obudumountainresort.com/"
    },
    {
        title:'AUSTRALIA',
        Img:'australia.jpg',
        Destination:' A visit australia',
        Price:"$5000",
        link:"https://en.wikipedia.org/wiki/Australia"   
    },
    {
        title:'SOUTH AFRICA',
        Img:'sun_city_resort.jpg',
        Destination:' Sun-city resort',
        Price:"$2000",
        link:"https://www.touropia.com/tourist-attractions-in-south-africa/"   
    },
    {
        title:'SWITZERLAND',
        Img:'switzerland.jpg',
        Destination:' Rhine falls',
        Price:"$2500",
        link:"https://en.wikipedia.org/wiki/Rhine_Falls"   
    },
    
    
]


places.forEach(e => {

 });
 let gallerySection = document.querySelector('#gallery')
 console.log(gallerySection)

 let html= "";
places.forEach(e => {
    html +=`
    <div class="row me-1 overflow-hidden">
        <div class="col-8 col-lg-4 col-xl-3 w-100 h-100 mx-4 my-2 img-fluid ">
            <div class="card border-0">
                   <img src="./images/${e.Img }"class="card-img-top img-fluid" style="max-height: 170px;"/>
                <div class="card-body py-4 text-center">
                    <h4 class="card-title text-primary">${e.title}</h4>
                    <p class="card-subtitle text-muted">${e.Destination}</p>
                    <p class="display-5 text-primary lead fw-bold">${e.Price}</p>
                    <a href="${e.link}"target="_blank"class="btn btn-outline-primary btn-lg">click to read more</a>

                </div>
            </div>
        </div>
    </div>
    `

        

    gallerySection.innerHTML = html;
});

