function addFunc(){
    const d=document.getElementById('todo');
    const val=d.value;
    const todoele=document.createElement('div')
    todoele.setAttribute("id","mine");
    todoele.innerHTML=val;
    document.body.append(todoele);
    todoele.setAttribute('onclick',"deleteHandle()")
    d.value="";
}

function deleteHandle(){
    const d=document.getElementById('mine');
    d.remove();
}