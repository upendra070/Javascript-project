const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const width=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    if(height===''||height<0||isNaN(height)){
        results.innerHTML="plese give me a vaild height";

    }
    else if(width===''||width<0||isNaN(width)){
        results.innerHTML="plese give me a vaild height";

    }
    else{
        const bmi=(width/((height*height)/1000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`;
    }


})
