console.log('hii');
let paramscount =0;

//utility function to get DOM element from string
function getelementFromString(string){
   let div =document.createElement('div');
   div.innerHTML=string;
   return div.firstElementChild;
}


let parameterbox =document.getElementById('parameterBox');
parameterbox.style.display='none';

let paramsRadio =document.getElementById('paramsRadio');
paramsRadio.addEventListener('click',()=>{
    document.getElementById('requestJsonBox').style.display='none';
    document.getElementById('parameterBox').style.display='block';

});
let jsonRadio =document.getElementById('jsonRadio');
jsonRadio.addEventListener('click',()=>{
    document.getElementById('parameterBox').style.display='none';
    document.getElementById('requestJsonBox').style.display='block';
    
});
// if user click on + button ,add more parameters
let addparam =document.getElementById('addParam');
addparam.addEventListener('click',()=>{
    let params =document.getElementById('params');
    let string =`
    <div class="form-row my-3">
                <label for="url" class="col-sm-2 col-form-label">Parameter ${paramscount+2}</label>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterKey${paramscount+2}" placeholder="Enter Parameter  ${paramscount+2} Key">
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterValue${paramscount+2}" placeholder="Enter Parameter ${paramscount+2} Value">
                </div>
                <button  class="btn btn-primary deleteParam">−</button>
            </div>
    `
    let paramElement =getelementFromString(string);
    params.appendChild(paramElement);
    //to remove paramitar to delete parameters
    let deleteParam =document.getElementsByClassName('deleteParam');
    for(item of deleteParam){
        item.addEventListener('click',(e)=>{
        e.target.parentElement.remove();
        })
    }
    paramscount++;


})

//click submit button
let submit =document.getElementById('submit');
submit.addEventListener('click',()=>{
    //show message in text ereaya
    // document.getElementById('responseJsonText').value ="Please wait.........";
    document.getElementById('responsePrism').innerHTML ="Please wait.........";

    //fech all value
    let url =document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;
    //if user has  used params option instead of jsion ,collect all the parameters in a object
    if (contentType=='params') {
        data={};
        for (i=0;i<paramscount+1;i++){
            if (document.getElementById('parameterKey'+(i+1)) !=undefined) {
                let key =document.getElementById('parameterKey'+(i+1)).value;
                let value =document.getElementById('parameterValue'+(i+1)).value;
                data[key]=value; 
            }
        }
        data =JSON.stringify(data);
    }
    else{
        // data =document.getElementById('requestJsonText').value;
        data =document.getElementById('responsePrism').value;

    }

    console.log(requestType);
    console.log(contentType);
    console.log(data);

    if (requestType=='GET'){
        fetch(url,{
            method :'GET',
        })
        .then(Response=>Response.text())
        .then((text)=>{
            // document.getElementById('responseJsonText').value =text;
            document.getElementById('responsePrism').innerHTML =text;
            Prism.highlightAll();
            


        })
    }
    else{
        fetch(url,{
            method :'POST',
            body : data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .then(Response=>Response.text())
        .then((text)=>{
            // document.getElementById('responseJsonText').value =text;
            document.getElementById('responsePrism').innerHTML =text;
            
            Prism.highlightAll();

        });
    }

})

