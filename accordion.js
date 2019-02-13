document.getElementById("header").addEventListener("click", function(){
    document.getElementById("menu2").classList.toggle("show");
    });
    document.getElementById("text1").addEventListener("click", function(){
    document.getElementById("textmenu1").classList.toggle("show");
    });
    document.getElementById("text2").addEventListener("click", function(){
    document.getElementById("textmenu2").classList.toggle("show");
    });
    document.getElementById("navbar").addEventListener("click", function(){
    document.getElementById("menu3").classList.toggle("show");
    });
    document.getElementById("main").addEventListener("click", function(){
    document.getElementById("menu4").classList.toggle("show");
    });
    document.getElementById("footer").addEventListener("click", function(){
    document.getElementById("menu5").classList.toggle("show");
    });
    document.getElementById("text3").addEventListener("click", function(){
    document.getElementById("mn-txt").classList.toggle("show");
    });
    document.getElementById("mn-hdl-txt").addEventListener("click", function(){
    document.getElementById("mn-hdl-txt-men").classList.toggle("show");
    });
    document.getElementById("mn-hdl-fam").addEventListener("click", function(){
    document.getElementById("mn-hdl-fam-rad").classList.toggle("show");
    });
    document.getElementById("mn-hdl-txt-sz").addEventListener("click", function(){
    document.getElementById("mn-hdl-txt-sz-rad").classList.toggle("show");
    });
    document.getElementById("mn-pln-txt").addEventListener("click", function(){
    document.getElementById("mn-pln-txt-fam").classList.toggle("show");
    });
    document.getElementById("mn-pln-fam").addEventListener("click", function(){
    document.getElementById("mn-pln-fam-rad").classList.toggle("show");
    });
    document.getElementById("mn-pln-txt-sz").addEventListener("click", function(){
    document.getElementById("mn-pln-txt-sz-rad").classList.toggle("show");
    });
    document.getElementById("hdr-txt-fam").addEventListener("click", function(){
        document.getElementById("hdr-txt-fam-rad").classList.toggle("show");
    });
    document.getElementById("hdr-txt-size").addEventListener("click", function(){
        document.getElementById("hdr-txt-sz-rad").classList.toggle("show");
    });
    document.getElementById("nav-txt-fam").addEventListener("click", function(){
        document.getElementById("nav-txt-fam-rad").classList.toggle("show");
    });
    document.getElementById("nav-txt-size").addEventListener("click", function(){
        document.getElementById("nav-txt-sz-rad").classList.toggle("show");
    });
    document.getElementById("text4").addEventListener("click", function(){
    document.getElementById("ftr-txt").classList.toggle("show");
    });
    document.getElementById("ftr-txt-fam").addEventListener("click", function(){
    document.getElementById("ftr-txt-fam-rad").classList.toggle("show");
    });
    document.getElementById("ftr-txt-size").addEventListener("click", function(){
    document.getElementById("ftr-txt-sz-rad").classList.toggle("show");
    });
    
    /*Header-boder*/
    document.getElementById("border-header").addEventListener("click", function(){
        document.getElementById("border1").classList.toggle("show");
        });
       
        
       
        /*nav-border*/
        document.getElementById("border-nav").addEventListener("click", function(){
        document.getElementById("border2").classList.toggle("show");
        });
        /*Footer-border*/
        document.getElementById("border-footer").addEventListener("click", function(){
            document.getElementById("border4").classList.toggle("show");
            });
        
            /*Main-headline-border*/
        document.getElementById("border-hln").addEventListener("click", function(){
            document.getElementById("border3").classList.toggle("show");
            });
            /*Main-plain-border*/
            document.getElementById("border-txt").addEventListener("click", function(){
            document.getElementById("border5").classList.toggle("show");
            });
           
            
    
    //                              COLOR MENUS
    
    
    document.getElementById("txt-color").addEventListener("click", function () {
        document.getElementById("colormenu1").classList.toggle("show");
    });
    document.getElementById("txt-nav").addEventListener("click", function () {
        document.getElementById("colormenu2").classList.toggle("show");
    });
    
    document.getElementById("mn-hdl-txt-cl").addEventListener("click", function () {
        document.getElementById("colormenu3").classList.toggle("show");
    });
    document.getElementById("mn-pln-txt-cl").addEventListener("click", function () {
        document.getElementById("colormenu9").classList.toggle("show");
    });
    
    document.getElementById("txt-footer").addEventListener("click", function () {
        document.getElementById("colormenu4").classList.toggle("show");
    });
    document.getElementById("bg-color-header").addEventListener("click", function () {
        document.getElementById("colormenu5").classList.toggle("show");
    });
    
    document.getElementById("bg-color-nav").addEventListener("click", function () {
        document.getElementById("colormenu6").classList.toggle("show");
    });
    
    document.getElementById("bg-color-main").addEventListener("click", function () {
        document.getElementById("colormenu7").classList.toggle("show");
    });
    
    document.getElementById("bg-color-footer").addEventListener("click", function () {
        document.getElementById("colormenu8").classList.toggle("show");
    });
    
    

    /* Preview */
    function toggleDiv(toggleDiv){
        const myLayout = document.getElementById('myLayout');
        const myLayoutTwo = document.getElementById('myLayoutTwo');
        const myLayoutThree = document.getElementById('myLayoutThree');
        const color1 = document.getElementById('color1');
        const color2 = document.getElementById('color2');
        const color3 = document.getElementById('color3');
        let layouts = [{ layout: myLayout, button: color1 }, { layout: myLayoutTwo, button: color2 }, { layout: myLayoutThree, button: color3 }];
        layouts.map((layout, index) => {
            console.log(layout, index);
            if(toggleDiv === index) {
                layout.layout.style.display = "block"; 
                layout.button.style.backgroundColor = "white"; 
            }else{
                layout.layout.style.display = "none"; 
                layout.button.style.backgroundColor = "lightgrey"; 
            }
        })}
           