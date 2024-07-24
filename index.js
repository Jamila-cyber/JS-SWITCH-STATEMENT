//Switch = statement that examines a value
//         for a match against many case clauses
//         more efficient than many "else if"  statements

let grade = "DIVA";

switch(grade){
     case "A":
        console.log("You did Great");
        break;
        
     case "B":
          console.log("You did Good");
          break;
          
     case "C":
         console.log("You did Okay!");
         break;
            
     case "D":
         console.log("You passed ... barely");
         break;

     case "E":
        console.log("You FAILED");
         break;  

     default:
        console.log(grade,"is not a letter grade!")

    }
