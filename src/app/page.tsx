import TextToSpeechToggle from "./Toggle";

export default function Home() {
  return (
    <main className="p-4">
      <TextToSpeechToggle />

      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "3rem",
          padding: "1rem",
        }}
      >
        <div
          style={{
            padding: "1.5rem",
            backgroundColor: "#bae6fd",
            borderRadius: "1rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          <h1 style={{ fontSize: "1.875rem" }}>Example Website</h1>
          <p style={{ fontSize: "1rem", maxWidth: "30ch" }}>
            This website only serves as an example to showcase a small preview
            of the development progress.
          </p>
          <p style={{ fontSize: "1rem", maxWidth: "30ch" }}>
            Lorem ipsum dolor sit amet consectetur
            <a href="#" style={{ textDecoration: "underline" }}>
              {" "}
              adipisicing elit{" "}
            </a>
            . Accusantium perferendis pariatur id facere nisi laborum, delectus
            eos quam amet harum distinctio,
            <a href="#" style={{ textDecoration: "underline" }}>
              {" "}
              fugit magni est{" "}
            </a>
            mollitia provident architecto aut velit autem.
          </p>
        </div>
      </main>
      <h1 className="text-3xl font-bold mb-4 ">Welcome</h1>
      <p className="mb-4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, fugit.
      </p>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2 ">Lorem Ipsum</h2>
        <ul className="list-disc list-inside">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>
            This is a sample list item with placeholder text. It demonstrates
            how a list item might look with real content.
          </li>
        </ul>
      </section>
      <a href="#" className="text-blue-500 hover:underline mt-4 inline-block ">
        Learn More
      </a>

      <h2>Welcome</h2>
      <h2>GOOOOOOOOOOO</h2>
      <p>
        This is a sample paragraph meant to replace the placeholder text. It
        contains sentences that are easy to read and understand. The purpose of
        this text is to provide a realistic example of how content might look on
        a webpage.
      </p>
      <button>Test Lorem</button>

      <div
        className="p-2"
        style={{
          backgroundImage: "url('https://picsum.photos/800/600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
          width: "100%",
        }}
      >
        Lorem impsum
      </div>
    </main>
  );
}
