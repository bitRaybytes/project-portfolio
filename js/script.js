// Darkmode
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

// whitemode !== "active" ? enableWhitemode() : disableWhitemode()
// is the same as:

    // if(whitemode !== "active"){
    //     enableWhitemode()
    // }
    // else{
    //    disableWhitemode() 
    // }




// Open sidebar menu
    var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }


// CV Section Tablinks
    var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }


// active detail close, if another detail is opened  
// Fetch all the details element.
    const details = document.querySelectorAll("details");

// Add the onclick listeners.
    details.forEach((detail) => {   
      detail.addEventListener("toggle", () => { 
        if (detail.open) setTargetDetail(detail);   
      });   
     });

// Close all the details that are not targetDetail.
    function setTargetDetail(targetDetail) {
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.open = false;
        }
      });
    }


