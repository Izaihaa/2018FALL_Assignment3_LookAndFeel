/**
 * Your JS code here
 */


    function menuexpand()
    {
        var x = document.getElementById("topnavbutton");
        if (x.className === "topnav")
        {
                x.className += " responsive";
        } 

        else
            {
                x.className = "topnav";
            }
    }

