export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <a 
            href="https://github.com/KashS28" 
            target="_blank" 
            rel="noreferrer"
            title="GitHub"
          >
            GitHub
          </a>
          <span className="footer-separator">|</span>
          <a 
            href="https://linkedin.com/in/kashish-shah-2804" 
            target="_blank" 
            rel="noreferrer"
            title="LinkedIn"
          >
            LinkedIn
          </a>
          <span className="footer-separator">|</span>
          <a 
            href="https://medium.com/@ctrlaltthrive" 
            target="_blank" 
            rel="noreferrer"
            title="Medium Blog"
          >
            Blog
          </a>
          <span className="footer-separator">|</span>
          <a 
            href="https://calendly.com/kashayn-2001/15min" 
            target="_blank" 
            rel="noreferrer"
            title="Schedule a Call"
          >
            Schedule a Call
          </a>
        </div>
        <p style={{ margin: "var(--space-md) 0 0 0", fontSize: "var(--font-size-sm)" }}>
          © 2025 Kashish Shah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}