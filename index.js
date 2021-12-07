const review = [
    {
      id : 1,
      name  : "ROSE",
      job : "WEB DEVELOPER",
      image : "https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar neque. Scelerisque varius morbi enim nunc faucibus.",
    },
    {
      id : 2,
      name : "MICHALE",
      job : "UX DEVELOPER",
      image : "https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text : "Nunc congue nisi vitae suscipit tellus mauris a diam. Leo duis ut diam quam nulla porttitor massa",
    },
    {
      id : 3,
      name : "JOHANA",
      job : "AI DEVELOPER",
      image : "https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text : "Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Vitae et leo duis ut diam quam nulla. ",
    },
    {
      id : 4,
      name : "PAUL WALKER",
      job : "INTERN",
      image : "https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text : "Feugiat in ante metus dictum at tempor commodo. Nisl nisi scelerisque eu ultrices vitae auctor eu. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.",
    }
  ]
  
  // choose items
  const image = document.getElementById("image");
  const name = document.getElementById("name");
  const job = document.getElementById("job");
  const text = document.getElementById("text");
  
  // choose buttons
  
  const pre = document.getElementById("pre");
  const next = document.getElementById("next");
  
  var counterItems = 0;
  
  window.addEventListener("DOMContentLoaded", function(){
    nextProfile();
  });
  
  function nextProfile(){
    var items = review[counterItems];
    image.src = items.image;
    name.textContent = items.name;
    job.textContent = items.job;
    text.textContent = items.text;
  };
  
  next.addEventListener("click", function(){
    counterItems ++;
    if(counterItems > review.length - 1){
      counterItems = 0;
    }
     nextProfile();
  });
  
  pre.addEventListener("click", function(){
    counterItems--;
    if(counterItems < 0){
      counterItems = review.length - 1;
    }
    nextProfile();
  })