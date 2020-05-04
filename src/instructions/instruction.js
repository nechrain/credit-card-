import React, { Component } from 'react'
import Card from '../carte/carte';
import './instruction.css';

class Credit extends Component {
    
    state = {
      RIB:"****************",
      date: "",
      name: "",
      
    };
    /*test on RIB */
    testRIB = (e) => {
      var newRib = e.target.value;
      var regR = /^[0-9]+$/g;
      let res;
      let tab = newRib.split("");
     
  
      if (regR.test(newRib)) {
        this.setState({ RIB: tab.join("") });
  
        if (newRib.length === 16) {
          res = newRib.match(/\d{4}/g).join(" ");
          console.log(res);
          this.setState({ RIB: res });
        }
      } else res = "";
      this.setState({ RIB: res });
    };

    



  
/* Test on date*/

testdate = (e) => {
  var newDate = e.target.value;
  var regD=/[0-9]+/g;
  let month = newDate.substr(0, 2);
  let year = newDate.substr(2, 4);


if (newDate.length>3){
  let month1 = /^0[1-9]$/g;
  let month2 = /^1[0-2]$/g;
  let Year1 = /^2[0-5]$/g;
  if(month1.test(month) || month2.test(month))

  { if (Year1.test(year) )    
    {newDate=month+"/"+year }
    else {
    alert("would you please put the correct Year")
     newDate=""   
    }
  }
  else{
  alert("would you please put the correct Month")
  newDate="" 
      }
}
this.setState({date:newDate});
}
  
/*test on name */
testName = (e) => {
  var newName = e.target.value;
  var regN = /^[a-z]/g;
  if (regN.test(newName)) {
    this.setState({ name: newName.toUpperCase() });
  } else {
    this.setState({ name: "" });
  }
};


      render()
      { 
          return(
  
            <div>


<div className="entrer">  
<h1>Enter your info</h1>
<hr></hr>
<div>
<input type="text" 
placeholder=" Card RIB" 
onChange={this.testRIB } />
</div>

<div>
<input type="text" 
placeholder="The validation Date" 
onChange={this.testdate} />
</div>
<div>
<input type="text" 
placeholder="Card's owner 's name" 
onChange={this.testName} />
</div>





</div>   




<div className="sortie">
<Card infos={this.state} />
</div>



</div> 
            

            )
        }
}
    export default Credit;