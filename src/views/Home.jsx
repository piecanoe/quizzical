import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (targetPage) => {
    navigate(targetPage);
  };

  return (
    <div className="home-page">
      <section>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div class="flex flex-col w-full mb-12 text-center">
            <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
              Long headline
            </h1>
            <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">
              Free and Premium themes, UI Kit's, templates and landing pages
              built with Tailwind CSS, HTML &amp; Next.js.
            </p>
          </div>
        </div>
      </section>

      <h1>Quizzical</h1>
      <h2>Unlock Knowledge, Test Your Wits!</h2>
      <Link to="/quiz">
        <button type="button" onClick={handleClick}>
          Start A Quiz!
        </button>
      </Link>
      <Link to="/film-tv">
        <button type="button" onClick={handleClick}>
          Film & TV
        </button>
      </Link>
      <Link to="/music">
        <button type="button" onClick={handleClick}>
          Music
        </button>
      </Link>
      <Link to="/arts-literature">
        <button type="button" onClick={handleClick}>
          Arts & Literature
        </button>
      </Link>
    </div>
  );
};

export default Home;
