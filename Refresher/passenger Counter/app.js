// document.getElementById('count-el').innerText = 5
let count = 0 
const val = document.getElementById("count-el")
const st = document.getElementById('stat')

function increment(){
    count++
    val.innerHTML = count
    st.innerHTML = ''
}
function reset(){
    count = 0
    val.innerHTML = count
    st.innerHTML = ''
}
function decrement(){
    if(count > 0){
        count--
        val.innerHTML = count
    }
    else{
        stat.innerHTML = 'You can\'t do that'
    }
}