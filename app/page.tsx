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

            <Link href="/people/zoe" className="teamButton">
              Zoe
            </Link>

            <Link href="/people/maddox" className="teamButton">
              Maddox
            </Link>

            <Link href="/people/sophia" className="teamButton">
              Sophia
            </Link>

            <Link href="/people/evan" className="teamButton">
              Evan
            </Link>

            <Link href="/people/zak" className="teamButton">
              Zak
            </Link>

            <Link href="/people/evelyn" className="teamButton">
              Evelyn
            </Link>

            <Link href="/people/max" className="teamButton">
              Max
            </Link>

            <Link href="/people/elliot" className="teamButton">
              Elliot
            </Link>

          </div>

        </div>

      </section>


      {/* WHITE AREA FOR FUTURE SECTIONS */}

      <section className="contentArea">

      </section>

    </div>
  );
}
