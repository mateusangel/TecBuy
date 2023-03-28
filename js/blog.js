
class Menu{
    constructor(){
    
            this.menu = document.querySelector(".menu")
            this.menulink = document.querySelector(".menu-mob")
            
            this.menu1 = document.querySelector(".menu1")
            
            this.menu2 = document.querySelector(".menu2")
            
            this.menu3 = document.querySelector(".menu3")
            
            this.on = document.querySelector(".on")


    
    }

    handleclick(){
        this.menu.addEventListener("click",()=>{

            
            	
            this.menulink.classList.toggle("active")
                        
       

        })
           
    }
}


const MenuPrince = new Menu()

MenuPrince.handleclick()