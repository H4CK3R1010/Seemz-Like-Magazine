import Link from "next/link";

export default function Home() {

  const people = [
    "zoe",
    "maddox",
    "sophia",
    "evan",
    "zak",
    "evelyn",
    "max",
    "elliot"
  ];

  return (
    <div className="background">

      <div style={{ paddingTop: "80px", textAlign: "center" }}>
        <div className="textBox">
          <h1 className="title">Seemz Like...</h1>
          <p className="subtitle">For kids, By kids</p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "120px" }}>

        <div className="textBox" style={{ marginBottom: "35px" }}>
          <h2>Meet the Team</h2>
        </div>

        <br />

        {people.map((person) => (
          <Link
            key={person}
            href={`/people/${person}`}
            className="card"
          >
            {person.charAt(0).toUpperCase() + person.slice(1)}
          </Link>
        ))}

      </div>

      <div style={{ textAlign: "center", marginTop: "120px", paddingBottom: "80px" }}>

        <div className="textBox" style={{ marginBottom: "35px" }}>
          <h2>Explore the Magazine</h2>
        </div>

        <br />

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
  );

}
