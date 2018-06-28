let s1 = document.getElementById("Select1")
let s2 = document.getElementById("Select2")
let s3 = document.getElementById("Select3")

arr = [s1,s2,s3]

let body1 = document.getElementById("body1")

let page1 = body1.innerHTML
let page2 = "<img src='https://media.boingboing.net/wp-content/uploads/2016/11/trump.jpg'>"
let page3 = `
<ul class="list-group">
  <li class="list-group-item"><div class='container'> 
  Thinking about writing out some post-season reflections to give everyone better perspective of what this season was like. It’s not going to have any Dallas drama so dont get too hyped. Stay tuned...
              </div></li>
  <li class="list-group-item"><div class='container'>
            It’s been a crazy season for me, but the time has finally come to rest and reflect on everything. Sorry to all the fans I have disappointed along the way. I have many things to think about and plan to return to the expectations everyone has had for me. The story continues...
41 replies 7 retweets 466 likes

            </div></li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
            `
for(let j = 0; j< arr.length; j++){
arr[j].addEventListener("click",()=>{
        for(let i = 0; i<arr.length; i++){
            if (arr[i] === arr[j]){
                arr[i].className = "active"
                if(i===0){
                    body1.innerHTML=page1
                }
                if(i===1){
                    body1.innerHTML=page2
                }
                if(i===2){
                    body1.innerHTML=page3
                }
            }
            else{
                arr[i].className =  ""
            }
        }

        
})}
