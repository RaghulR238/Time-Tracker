let task=[{
    category:"Work",
    sub:"Meeting",
    duration:"3",
    task1:"Client Meeting"
},{
    category:"Work",
    sub:"Meeting",
    duration:"3",
    task1:"Client Meeting"
}];

let sub=document.getElementById("sub");
let duration=document.getElementById("duration");
let work=document.getElementById("work");
let cat=document.getElementById("category");

for(let i=0;i<task.length;i++)
{
    let c=document.createElement("p");
    c.textContent=task[i].category;
    cat.appendChild(c);

    let s=document.createElement("p");
    s.textContent=task[i].sub;
    sub.appendChild(s);


    let d=document.createElement("p");
    d.textContent=task[i].duration;
    duration.appendChild(d);

    let w=document.createElement("p");
    w.textContent=task[i].task1;
    work.appendChild(w);
}


