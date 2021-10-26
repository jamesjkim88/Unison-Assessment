// window on load
window.onload = function(evt){
  let obj;
  let topElm;
  let htmlOutput = document.querySelector('#html-output');
  document.getElementById('json-file').addEventListener('change', evt => {
    let reader = new FileReader();
    reader.onload = evt => {
      console.log(evt.target.result);
      obj = JSON.parse(evt.target.result);
      json2HTML(obj);
    }
    reader.readAsText(evt.target.files[0]);
  });

  // helper function that converts json to html
  function json2HTML(json){
    if(!json.element) return; // empty return if top element doesn't exist
    topElm = document.createElement(json.element); // making top parent html element

    // if json.children exists...
    if(json.children){
      // do this ...
      handleChildren(json.children, topElm);
    };
    // if json.props exists...
    if(json.props){
      // loop through the object
      for(const prop in json.props){
        // setting up the attributes
        topElm.setAttribute(prop, json.props[prop]);
      };
    };
    htmlOutput.append(topElm) // appending the created top parent element to div#html-output
  };

  // recursion function for nested children
  function handleChildren(childProp, parentElm){
    if(Array.isArray(childProp)){ // if childProp is an array
      childProp.forEach(e => {
        let childrenElm = document.createElement(e.element); // creating children's html element
        if(e.children){
          handleChildren(e.children, childrenElm); // recursion function for nested children
        };
        if(e.props){
          for(const prop in e.props){
            childrenElm.setAttribute(prop, e.props[prop]);
          };
        };
        parentElm.appendChild(childrenElm)
      });
    }
    else if(typeof childProp === "string"){
      parentElm.append(childProp)
    };
  };
};