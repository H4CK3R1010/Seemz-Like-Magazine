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


      {/* WHITE CONTENT AREA */}

      <section className="contentArea">

        {/* 
          Add more magazine sections here later.
        */}

      </section>

    </div>
  );
}
