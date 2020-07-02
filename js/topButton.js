

window.onload = function()
{



    const Button = document.getElementById("topButton");
    const test = document.getElementById("test"); 


    window.onscroll = function()
    {
        let yScrollAxis = window.pageYOffset;
        if(yScrollAxis > 450)
        {
            Button.style.display = "block";
        }
        else 
        {
            Button.style.display = "none";
        }
    }


    Button.onclick = function()
    {
        window.scrollBy(0, -1 * window.pageYOffset);
        
    };

};