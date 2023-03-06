import React from 'react';

export default function Main() {
    
    function newList() {
        let fruits = document.createElement("li");
        let goods = document.getElementById("input").value;
        let text = document.createTextNode(goods);
        fruits.appendChild(text);
        if (goods === '') {
          alert("Empty!!!");
        } else {
          document.getElementById("lists").appendChild(fruits);
          
        }

      let myNodelist = document.getElementsByTagName("LI");
      let i;
      for (i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
      }
      
      
      let close = document.getElementsByClassName("close");
      var x;
      for (x = 0; x < close.length; x++) {
        close[x].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
      }
        
      };

      function fruitQuantity() {
        let quantity = document.createElement("li");
        let input = document.getElementById("input2").value;
        let txt = document.createTextNode(input);
        quantity.appendChild(txt);
        if (input === '') {
          alert("Enter quantity");
        } else {
          document.getElementById("qtn").appendChild(quantity);
          
        } 
      let myNodelist = document.getElementsByTagName("LI");
      let i;
      for (i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
      }
      
      
      let close = document.getElementsByClassName("close");
      let x;
      for (x = 0; x < close.length; x++) {
        close[x].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
      }
      }

      function addAlert() {
        return alert('Saved');
      }

      
    
    return(
        <div>
            <label>Add Fruits</label><br></br>
            <input type='text' placeholder='Add Fruits...' id='input' />
            <button onClick={newList}>Add</button><br></br>
            <br></br>

            <label>Add Quantity</label><br></br>
            <input type='text' placeholder='Add Quantity...' id='input2' />
            <button onClick={fruitQuantity}>Add</button>

            <div className='output'>
                <p>Fruits</p>
                <p>Quantity</p>
            </div>
            <div className='result'>
            <ul id="lists"  class="ticked"> </ul>

            <ul id="qtn" class="marked"> </ul>
            </div>
            
            <h3 onClick={addAlert} className='save'>Save</h3>
        </div>
    )
} 