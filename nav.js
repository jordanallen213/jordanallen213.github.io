fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

//function addElement(){

  //  const header= "<div>This is my nav</div>"
    //document.querySelector(".date").insertAdjacentHTML("afterbegin", header);

//}

//modules.export=addElement


//export default addElement;
