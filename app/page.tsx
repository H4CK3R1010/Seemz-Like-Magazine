import Link from "next/link";

export default function Home() {
  return (
    <div className="homePage">

      {/* HERO SECTION */}

      <section className="heroSection">

        <div className="heroContent">

          <h1>
            For Kids, By Kids
          </h1>

          <ul className="heroFeatures">

            <li>
              <span>★</span>
              The go to magazine for curious kids and teens
            </li>

            <li>
              <span>★</span>
              Digital and print copies available
            </li>

          </ul>

          <div className="subscribeButtons">

            <Link
              href="/pricing"
              className="subscribeButton printButton"
            >
              Subscribe to Print
            </Link>

            <Link
              href="/pricing"
              className="subscribeButton digitalButton"
            >
              Subscribe to Digital
            </Link>

          </div>

        </div>

      </section>


      {/* MEET THE TEAM SECTION */}

      <section className="teamSection">

        <div className="teamContent">

          <h2>
            Meet the Team
          </h2>


          <div className="teamGrid">

            {/* ZOE */}

            <div className="teamMember">

              <Link
                href="/people/zoe"
                className="teamButton"
              >
                Zoe
              </Link>

              <p>
                Hi! I’m Zoe, a junior in high school who loves reading,
                golfing, crafting, and exploring new ideas. I love learning
                about how the human brain works, and I’m hoping to major in
                neuroscience or cognitive science. When I’m not studying or
                reading, I’m usually out on the golf course or working on a
                creative project.
              </p>

            </div>


            {/* MADDOX */}

            <div className="teamMember">

              <Link
                href="/people/maddox"
                className="teamButton"
              >
                Maddox
              </Link>

            </div>


            {/* SOPHIA */}

            <div className="teamMember">

              <Link
                href="/people/sophia"
                className="teamButton"
              >
                Sophia
              </Link>

            </div>


            {/* EVAN */}

            <div className="teamMember">

              <Link
                href="/people/evan"
                className="teamButton"
              >
                Evan
              </Link>

            </div>


            {/* ZAK */}

            <div className="teamMember">

              <Link
                href="/people/zak"
                className="teamButton"
              >
                Zak
              </Link>

            </div>


            {/* EVELYN */}

            <div className="teamMember">

              <Link
                href="/people/evelyn"
                className="teamButton"
              >
                Evelyn
              </Link>

            </div>


            {/* MAX */}

            <div className="teamMember">

              <Link
                href="/people/max"
                className="teamButton"
              >
                Max
              </Link>

            </div>


            {/* ELLIOT */}

            <div className="teamMember">

              <Link
                href="/people/elliot"
                className="teamButton"
              >
                Elliot
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* FUTURE WHITE CONTENT AREA */}

      <section className="contentArea">

      </section>

    </div>
  );
}
