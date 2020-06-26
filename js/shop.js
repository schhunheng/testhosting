document.getElementById("s1").style.display="block"
            var sliders = document.getElementsByClassName("slide");
            var current =0;
            setInterval(runslide,3000);
            function runslide(){
                if(current == sliders.length-1){
                    current = 0;
                }else{
                    current +=1;
                }
                slideshow(sliders[current]);
            }
            
            function slideshow(currentslide){
                for(var slide of sliders){
                    if(slide==currentslide){
                        slide.style.display="block";
                    }else{
                        slide.style.display="none";
                    }
                       
                }
            }