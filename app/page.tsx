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


<div style={{
textAlign:"center",
paddingTop:"120px"
}}>


<h1 className="title">

Seemz Like...

</h1>


<h2 className="subtitle">

For kids, By kids

</h2>


</div>



<div style={{
textAlign:"center",
marginTop:"120px"
}}>


<h2>

Meet the Team

</h2>



{

people.map((person)=>(

<Link

key={person}

href={`/people/${person}`}

className="card"

>

{person.charAt(0).toUpperCase()+person.slice(1)}

</Link>


))

}


</div>


</div>

)

}
