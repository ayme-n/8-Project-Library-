
let Books = []

let i = 0

function Book(id,author,title,page){

    this.id = id

    this.author = author

    this.title = title

    this.page = page
    
}



function add_book(author,title,page){

    const id = crypto.randomUUID()

    const book = new Book(id,author,title,page)

    Books[i] = book

    i++

}


function display(Books){

    const table = document.querySelector(".Table_body")

    table.innerHTML =""

    Books.forEach(book => {

    const tr = document.createElement("tr")

    const td1 = document.createElement("td")
    td1.textContent = book.author
    const td2 = document.createElement("td")
    td2.textContent = book.title
    const td3 = document.createElement("td")
    td3.textContent = book.page

    const td4 = document.createElement("td")
    const remove = document.createElement("button")
    remove.textContent = "remove"
    remove.className = "remove"
    remove.id = book.id


    const td5 = document.createElement("td")
    const toggle = document.createElement("button")
    toggle.textContent = "Mark as Unread"
    toggle.className = "toggle"
    toggle.id = book.id


    td4.appendChild(remove)
    td5.appendChild(toggle)


    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)



    table.appendChild(tr)

    re_attack_event_listener()

        
    });

    


   
}


function re_attack_event_listener(){


    let remove_btn_list = document.querySelectorAll(".remove")

    remove_btn_list.forEach(remove_btn => {

    remove_btn.addEventListener("click",()=>{

    Books = Books.filter((book)=>{
        return book.id != remove_btn.id
    })



    display(Books)
        re_toggle()
    
})
    
});
    
}

Book.prototype.Toggle = function(toggle){

    if(toggle.textContent == "Mark as Unread"){
            toggle.textContent = "Mark as Read"
        }
        else{
            toggle.textContent = "Mark as Unread"
        }

}
add_book("George Orwell","1984",328)
add_book("Harper Lee","To Kill a Mockingbird",281)
add_book("F. Scott Fitzgerald","The Great Gatsby",180)
add_book("J.R.R. Tolkien","The Hobbit",310)

display(Books)
    re_toggle()

function re_toggle(){


    toggle_list = document.querySelectorAll(".toggle")

    toggle_list.forEach(toggle => {


    toggle.addEventListener("click",()=>{
    
        let index = -1
        
        Books.forEach(book => {

            if (book.id == toggle.id) {
                    index =  Books.indexOf(book)
            }
            
    });

    Books[index].Toggle(toggle)

    
})
    
});

}


function change_color(toggle){

    console.log(toggle.style["BackgroundColor"])
    if(toggle.style["BackgroundColor"] = "#8F5D47"){
        toggle.style["BackgroundColor"] ="white"
    }
    else{
        toggle.style["BackgroundColor"] ="black"
    }


}





let add_btn = document.querySelector(".add_book")

add_btn.addEventListener("click",()=>{
    display_form()
    
})


function display_form(){

    const container = document.querySelector(".form_container")

    container.style.display ="block"




}

let submit = document.querySelector("#submit")

submit.addEventListener("click",(event)=>{

    event.preventDefault()
    
    const container = document.querySelector(".form_container")

    const form = document.querySelector(".form")

    const Data = new FormData(form)

    const author = Data.get("author")
    const title = Data.get("title")
    const page = Data.get("pages")



    add_book(author,title,page)


    container.style.display ="none"

    form.reset();

    display(Books)

    re_toggle()
    
})