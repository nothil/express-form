const fixture =`<!DOCTYPE html> 
<html>
    <head>
<title>visitor information</title>

<style>
    body {background-color: powderblue;
        text-align: center;
    }
     input {
        width: 100%; 
        margin: 10px 0px; 
        font-size: 15px;  
     }
    form {
        display: inline-block;
        width:200px;
        padding: 20px 50px;
        background-color: whitesmoke;

    }
    button { 
        padding: 10px 20; 
        align-self: auto;
    }
    textarea {
        margin: 10px 0px; 
        font-size: 15px;
        height: 100px;
        text-align: center;
    }
            
    </style>
    </head> 
    <body>
        
        <h1>Visitor information</h1>
    <form  action="/action" method="post" id="form">
            
            <input type="text" placeholder="visitor name" name="name"><br>
            <input type="text" placeholder="name of assistant" name="assistant"><br>
            <input type="age"  placeholder="visitors age" name="age"><br>
            <input type="date" placeholder="date of visit" name="date"><br>
            <input type="time" placeholder="time of visit" name="time"><br>
            <textarea type="text" placeholder="comments" name="comment"></textarea><br>
               
            
            <button type="submit" form="form">submit</button><br>
        </form>
    </div>
    </body>
</html>

`
module.exports = fixture;