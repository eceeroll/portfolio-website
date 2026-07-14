import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-text pt-16">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl">Home Section</h1>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl">About Section</h1>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl">Projects Section</h1>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl">Contact Section</h1>
        </section>
      </main>
    </>
  );
}

export default App;
