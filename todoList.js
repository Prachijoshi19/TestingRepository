
const btn=document.getElementById('btn_tasks')
const URL='https://jsonplaceholder.typicode.com/todos'
let responseData=''
let i=null
const data=document.getElementById('ulData')
const mainList=document.getElementById('main')

function getData(method,URL,data)
{
    return fetch(URL,{
        method:method,
        body:JSON.stringify(data)
    }).then((response)=>{
        return response.json()
    }).catch((error)=>{
        return error
    })
}
async function showData()
{
    responseData=await getData('GET',URL)
    console.log(responseData)
    for(let rec of responseData)
    {
        console.log(rec)
        i=document.createElement('li')
        i.innerHTML=i.id=`${rec.id}`
        i.innerHTML=`<section>Title:${rec.title}</section>
                    <section>Completed:${rec.completed}</section>
                    <section>UserId:${rec.userId}</section>
                    <section><button>DELETE</button></section>`
                    data.append(i)
    }
    mainList.appendChild(data)
}
btn.addEventListener('click',showData)
let id;
mainList.addEventListener('click',(event)=>{
    if(event.target.tagName==='BUTTON')
    {
        alert('delete is clicked!!')
	id=event.target.closest('li').id
        alert(id)
        getData('DELETE',URL+`/${id}`)
    }
})

getData('PUT',URL+`/${id}`,data)