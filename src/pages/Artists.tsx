import { Link } from "react-router-dom";

const Artists = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm leading-relaxed text-manifesto tracking-wide">
          we are very good editions. we are collaborative. we partner with artists that we love. those that dare to push the boundaries. those that make you stop in your tracks. those with a unique perspective. many of them woman. many of them early career. many of them non-traditional. but not always. because most of all, we believe that art should be fun. approachable. should delight. and that life must not always be as serious as we make it out to be.
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
