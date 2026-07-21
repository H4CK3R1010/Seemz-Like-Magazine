import Link from "next/link";

const people = [
  "Zoe",
  "Maddox",
  "Sophia",
  "Evan",
  "Zak",
  "Evelyn",
  "Max",
  "Elliot",
];

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Seemz Like...</h1>
        <h2>For kids, By kids</h2>
      </section>

      <section className="people">
        <h3>Meet the creators</h3>

        <div className="buttons">
          {people.map((person) => (
            <Link
              key={person}
              href={`/${person.toLowerCase()}`}
              className="personButton"
            >
              {person}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
