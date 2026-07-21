import Link from "next/link";

export default function Home(){

const people=[
"zoe",
"maddox",
"sophia",
"evan",
"zak",
"evelyn",
"max",
"elliot"
];


return(
<div className="background">

<div className="title">
Seemz Like...
</div>

<div className="subtitle">
For kids, By kids
</div>


<div style={{textAlign:"center", marginTop:200}}>

{people.map((person)=>(
<Link
className="card"
href={`/people/${person}`}
key={person}
>
{person}
</Link>
))}

</div>


<div style={{textAlign:"center",marginTop:100}}>

<Link className="card" href="/timeline">
Timeline
</Link>

<Link className="card" href="/pricing">
Pricing
</Link>

<Link className="card" href="/topics">
Topics
</Link>

<Link className="card" href="/goals">
Goals
</Link>

</div>


</div>
)

}
