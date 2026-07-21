export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 text-gray-900">

      {/* Hero */}
      <section className="px-8 py-24 text-center">
        <h1 className="text-7xl font-black">
          SEEMZ LIKE...
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          The magazine made by cousins ✨
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg">
          Stories, ideas, creativity, and chaos.
          A magazine built by eight cousins.
        </p>

        <button className="mt-8 rounded-full bg-yellow-300 px-8 py-4 font-bold">
          Explore The Magazine
        </button>
      </section>


      {/* Launch */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-4xl font-bold">
          Coming September 15, 2026 🚀
        </h2>

        <p className="mt-4 text-lg">
          Our first official issue launches soon.
        </p>
      </section>


      {/* Topics */}
      <section className="grid gap-6 px-8 py-16 md:grid-cols-4">

        {[
          "🎮 Gaming",
          "🎵 Music",
          "📚 Books",
          "🏀 Sports",
          "🧪 Kitchen Lab",
          "🤯 Mythbusters",
          "🏫 School",
          "🔥 Trends"
        ].map((topic) => (
          <div
            key={topic}
            className="rounded-3xl bg-white p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold">
              {topic}
            </h3>
          </div>
        ))}

      </section>


      {/* Footer */}
      <footer className="px-8 py-12 text-center">
        <p>
          Made by cousins. Built with creativity.
        </p>
      </footer>

    </main>
  );
}
