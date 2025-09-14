import { Play } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <main className="font-sans min-h-screen py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
        <nav className="mb-10">
          <Link href="/" aria-label="Home" className="inline-flex items-center">
            <span className="text-base font-semibold tracking-tight">
              AI Solopreneur Accelerator
            </span>
          </Link>
        </nav>
        <header className="space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight">
            You&apos;re One Step Away From Building A $10k/mo Solo Developer
            Business In Less Than 180 Days
          </h1>
        </header>

        {/* <snpm */}

        {/* <p className="mt-6 text-base sm:text-lg text-muted-foreground">
          If you can build, you can sell. You just haven’t been shown the
          playbook yet.
        </p> */}

        <hr className="my-12 border-border" />

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">
            <span className="text-chart-2">Step 1 of 2:</span> Watch Video
          </h2>
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/234Bc3BAf2w?controls=0&disablekb=1&modestbranding=1&rel=0&fs=0"
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          {/* <p className="text-base leading-relaxed">
            You’ve got the skills to deliver incredible work, but the income
            doesn’t match. Projects come in waves. Leads trickle. You see others
            with worse offers growing faster. It’s not your product. It’s not
            the market. It’s that no one’s taught you how to package, price, and
            close in a way that feels natural to you.
          </p> */}
        </section>

        {/* <hr className="my-12 border-border" /> */}

        {/* <section className="space-y-4">
          <h2 className="text-lg font-semibold">The Promise</h2>
          <p className="text-base leading-relaxed">
            In the AI Solopreneur Accelerator, I’ll work with you to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Turn your technical skill into an irresistible AI offer</li>
            <li>Price for profit and position for authority</li>
            <li>Build a simple, repeatable sales system</li>
          </ul>
          <p className="text-base leading-relaxed">
            So you can finally have consistent $10k+ months — without burning
            out or chasing clients.
          </p>
        </section>

        <hr className="my-12 border-border" />

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Why This Works</h2>
          <p className="text-base leading-relaxed">
            Sales isn’t magic. It’s a skill. A skill that can be learned,
            practiced, and mastered, especially by people who think in systems.
            I’ll show you the exact process I use (and teach) to take technical
            solopreneurs from struggling for leads to booked-out and in demand.
          </p>
        </section> */}

        <div className="mt-14 border-t border-border pt-10">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              <span className="text-chart-2">Step 2 of 2:</span> Schedule Your
              Free Growth Call
            </h2>
            <div className="p-4 rounded-lg border border-muted h-[1000px]">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/finn-elliott/aisa-demo-call"
                style={{ minWidth: 320, height: "1000px" }}
              />
            </div>
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
