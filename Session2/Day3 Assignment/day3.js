function display()
{
    let name=document.querySelector('#name').value;
    let city=document.querySelector('#city').value;
    document.querySelector(".disp").innerHTML=`<h1>Hello!! ${name} Welcome to ${city}`;
}
