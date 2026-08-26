export default function Contact() {
  return (
    <main className="background">
      <section className="contactPage">
        <h1>Contact Us</h1>

        <p className="contactEmail">
          You can contact us at{" "}
          <a href="mailto:seemzlike@gmail.com">seemzlike@gmail.com</a>
        </p>

        <p className="contactFormIntro">
          Or by filling out the form below!
        </p>

        <iframe
          className="googleContactForm"
          src="https://docs.google.com/forms/d/e/1FAIpQLScmmOxsAbXt5wjCZM14ZlZ5rKVhT3ypvQQnZO8sTn2v1HxuQQ/viewform?embedded=true"
          title="Contact Seemz Like Magazine"
        >
          Loading…
        </iframe>
      </section>
    </main>
  );
}
