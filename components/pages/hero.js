import Link from "next/link";

export default function Hero() {
  return (
    <section className="m-auto px-2 md:px-10 mt-5 md:pt-16 xl:pt-20 h-screen text-white">
      <div className="z-20 flex flex-col space-y-3 md:space-y-10 items-center justify-center md:mt-16">
        <div className="flex-row space-y-5 text-center md:w-8/12 xl:w-6/12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Advantage Venture supports projects for Strategic Fundraising,
            Tier-1 CEX Listings, and Influential Marketing via Tier 1 Kols and
            Calls community
          </h1>
          {/* <p>
            <b>Advantage Venture</b> supports projects for Strategic
            Fundraising, Tier-1 CEX Listings, and Influential Marketing via Tier
            1 Kols and Calls community
          </p> */}
          <Link
            href="#contact"
            className="block mx-auto text-center w-32 py-2 mt-2 rounded bg-black text-white font-bold hover:bg-white hover:text-black border transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
