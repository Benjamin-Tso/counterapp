// counter app
function init(){
    counts_str = localStorage.getItem("count")
    count = counts_str
    display()
}
function increment(){
    count++
    display()
}
function display(){
    document.getElementById("count-el").innerText = count
    document.getElementById("count-past").innerText = counts_str
}
function save(){
    counts_str = counts_str? `${counts_str} - ${count}` : `${count}`
    localStorage.setItem("count", counts_str)
    display()
}
function parse_latest_count(){
    counts_str 
}