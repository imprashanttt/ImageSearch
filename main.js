const apiKey="Sye4YpqOakZLYKwaDtKFsQrlLHTWu0GwBscn2RYXD-o"
const formEl=document.querySelector("form")
const inputEl=document.querySelector("#search-input");
const searchResult=document.querySelector(".search-results");
const showMore=document.querySelector("#show-more");
let inputData="";
let page=1;
let imgText;

async function searchImages(){
    inputData=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;
    const response = await fetch(url);
    const data=await response.json();
    const results=data.results;
    if(page===1){
        searchResult.innerHTML="";

    }
    results.map((result)=>{
        const imgContainer=document.createElement('div');
        imgContainer.classList.add('search-result');
        const img=document.createElement('img');
        img.src=result.urls.small;
        img.alt=result.alt_description;

      
        const link=document.createElement('a');
        link.href=result.links.html;
        link.target="_blank";
        link.textContent=result.alt_description;
        imgContainer.appendChild(img);
        searchResult.appendChild(imgContainer);
        imgContainer.appendChild(link);
     });

     page++;
     if(page>1){
        showMore.style.display="block";
     }


    }

formEl.addEventListener("submit",()=>{
    event.preventDefault()
    page=1;
    
    searchImages();
})
document.querySelector("#show-more").addEventListener("click",()=>{

    searchImages();
})