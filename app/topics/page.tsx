export default function Topics(){

const topics=[
["Video Games","Origins","Strategies","Game recs"],
["Trends","Dances","Clothes","Memes","Slang"],
["Music","Song recs","New artists","Artist recs","Effects of music"],
["Books","Book reviews","Book recs","Beneficial?"],
["Kitchen Lab","Simple recipes"],
["Mythbusters","Myth vs. Fact","Weird But True"],
["Sports","Current standings","Future games","Predictions","Game analyzations","Trades"],
["School","Studying tips","Testing tips","Classes","Struggles + Solutions"]
]


return(

<div className="background">

<h1 className="slideTitle">
Possible Article Topics
</h1>


<div className="topics">

{topics.map((topic)=>(
<div className="topicBox">

<h2>
{topic[0]}
</h2>


{topic.slice(1).map((item)=>(
<p key={item}>
- {item}
</p>
))}


</div>
))}


</div>


</div>

)

}
