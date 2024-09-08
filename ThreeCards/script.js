var arr = [
    {name: "Prince",img: "1.jpg", status: "STRANGERS"},
    {name: "Pragyan",img: "2.jpg", status: "STRANGERS"},
    {name: "Ram",img: "3.jpg", status: "STRANGERS"},
    {name: "Arr",img: "2.jpg", status: "STRANGERS"},
    {name: "Test",img: "3.jpg", status: "STRANGERS"},
    {name: "Test1",img: "2.jpg", status: "STRANGERS"},
    {name: "Test2",img: "1.jpg", status: "STRANGERS"},
    {name: "Test3",img: "3.jpg", status: "STRANGERS"},
    {name: "Test4",img: "2.jpg", status: "STRANGERS"},
    {name: "Test5",img: "1.jpg", status: "STRANGERS"},
    {name: "Test6",img: "3.jpg", status: "STRANGERS"},
    {name: "Test7",img: "2.jpg", status: "STRANGERS"},
    {name: "Test8",img: "1.jpg", status: "STRANGERS"}
]


function print()
{
    var clutter = "";
    arr.forEach(function(val,index){
        clutter  = clutter +  ` <div id="card">
                <div id="img">
                    <img src="${val.img}">
                    </div>
                <h4>${val.name}</h4>
                <p id="${val.status}">${val.status}</p>
                <button class="${val.status==="STRANGERS"? "green" : "red"}"  id="${index}">${val.status==="STRANGERS"? "Add Friend" : "Remove Friend"}</button>
            </div>`;
    })
    document.querySelector("#main").innerHTML = clutter;
}

print();


document.querySelector("#main").addEventListener('click', function(details){
    if(details.target.className === "green")
    {
        arr[details.target.id].status="Friends";
    }
    else if(details.target.className === "red")
    {
        arr[details.target.id].status="STRANGERS";
    }
    print();
});