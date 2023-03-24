let URL=[
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg"
]

var main_image = document.getElementById("display_image");

let images_collection = document.getElementsByTagName("img");
for(let i=0;i<URL.length;i++)
{
    images_collection[i].src=URL[i];
    images_collection[i].alt=i;
}



for(let i=0;i<URL.length;i++)
{
    images_collection[i].addEventListener("click",function(){
        let image_url = this.src;
        let image_a = this.alt;
        main_image.src=image_url;
        main_image.alt=image_a;
        main_image.style.display="block";
        document.getElementById("Slider_div").style.display="block";
       for(let j=0;j<3;j++)
       {
            document.getElementsByClassName("btn")[j].style.display="inline";
       }
})};

function Close(){
    main_image.src="";
    main_image.style.display="none"
    for(let j=0;j<3;j++)
       {
            document.getElementsByClassName("btn")[j].style.display="none";
       }
}

function Next(){
    let curr_image = main_image.alt;
    if(curr_image==URL.length-1)
    {
        main_image.src=URL[0];
        main_image.alt=1;
    }
    else{
        main_image.src=URL[++curr_image];
        main_image.alt=curr_image;
    }
}

function Prev(){
    let curr_image = main_image.alt;
    if(curr_image==0)
    {
        main_image.src=URL[URL.length-1];
        main_image.alt=URL.length-1;
    }else{
        main_image.src=URL[--curr_image];
        main_image.alt=curr_image;
    }
}



