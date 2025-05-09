// start with links shwo btn 
let navBtn=document.querySelector(".nav-menu-btn");
let navLinks=document.querySelector(".nav-links");

navBtn.addEventListener("click",()=>{
navLinks.classList.toggle("open");
let boolean=navLinks.classList.contains("open");
let i=navBtn.querySelector("i");
// change the icon 
boolean ? i.classList="fa-solid fa-x" : i.classList="fa-solid fa-bars"
});

let nvLis=navLinks.querySelectorAll("li");
nvLis.forEach(li=>{
    li.addEventListener("click",(e)=>{
        e.preventDefault();
            navLinks.classList.remove("open");
            navBtn.querySelector("i").classList="fa solid fa-bars";
        })
})

let search=document.querySelector(".nav-search");
let icon=search.querySelector("span");
icon.addEventListener("click",()=>{
    search.querySelector("input").classList.toggle("open");
})

// using scroll reveal 
let scrollRevealObject={
    distance:"50px",
    origin:"bottom",
    duration:"1000"
}

ScrollReveal().reveal(".header-img img", {
    ...scrollRevealObject,
    origin: "right"
  });
  
ScrollReveal().reveal(".header-text div", {
    duration:"1000",
    delay:"500"
  });
  
ScrollReveal().reveal(".header-text h1", {
  ...scrollRevealObject,
    delay:"1000",
  });
ScrollReveal().reveal(".header-text p", {
  ...scrollRevealObject,
    delay:"1400"
  });
  
  // end scroll reveal 
  // start deals 
  let dealCards=document.querySelectorAll(" .deals-card");
  dealCards.forEach((card,i)=>{
    ScrollReveal().reveal(card,{
      distance:"70px",
      origin:"right",
      delay:(i)*400

    })
  }
  )
  // start about us 
let aboutUSs=document.querySelectorAll(".about-us-info .text .card");
aboutUSs.forEach((note,i)=>{
  ScrollReveal().reveal(note,{
    duration:1000,
    interval:500,
    delay:i*300,
  
  })
}
)
  // end about us 
  // start client swipe 
  const clients =document.querySelectorAll(".client-card");
  let cIdnex=0;
let arrowRight=document.querySelector(".client-arrow.right");
arrowRight.addEventListener("click",(e)=>{
  if (cIdnex!=2) {
    cIdnex++;
  }else cIdnex=0;
  clients.forEach(client=>{
    client.classList.remove("active");
    clients[cIdnex].classList.add("active");
  }
  )
});

let arrowLeft=document.querySelector(".client-arrow.left");
arrowLeft.addEventListener("click",(e)=>{
  if (cIdnex!=0) {
    cIdnex--;
  }else cIdnex=2;
  clients.forEach(client=>{
    client.classList.remove("active");
    clients[cIdnex].classList.add("active");
  }
  )
});
  // end client swipe 
  
  // the list scroll section 
  let sectionLis=document.querySelectorAll(".nav-links li a");
  
  sectionLis.forEach(element=>{
    
    element.addEventListener("click",e=>{
      // in case of links 
      e.preventDefault();
      // Element.scrollINtoView 
      document.querySelector(e.currentTarget.dataset.section).scrollIntoView({
        behavior:'smooth'
      })
    })
  })
  //end the list scroll section 