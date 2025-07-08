import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Resume</h1>
            <p>Download or view my complete professional resume</p>
            <div style={{ marginTop: "var(--space-lg)" }}>
              <a href="/resume.pdf" download className="btn btn-primary">
                Download PDF
              </a>
            </div>
          </section>

          <section style={{ marginTop: "var(--space-2xl)" }}>
            <div style={{ 
              background: "var(--surface-bg)", 
              padding: "var(--space-md)", 
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-default)"
            }}>
              <iframe
                src="/resume.pdf"
                width="100%"
                height="800px"
                style={{ border: "none", borderRadius: "var(--radius-md)" }}
                title="Kashish Resume"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}