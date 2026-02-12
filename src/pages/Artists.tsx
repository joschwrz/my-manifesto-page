import { Link } from "react-router-dom";

const Artists = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm leading-relaxed text-manifesto tracking-wide">
          Your manifesto text goes here. Share it when you're ready and it will
          replace this placeholder.
        </p>
      </div>
      <Link
        to="/"
        className="mt-16 text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        back
      </Link>
    </div>
  );
};

export default Artists;
