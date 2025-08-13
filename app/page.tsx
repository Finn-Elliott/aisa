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
            From Code to Clients. Build What You Love, Sell With Confidence,
            Scale Without Burnout
          </h1>
        </header>

        {/* <section id="vsl" className="mt-8">
          <div className="relative border border-border rounded-lg overflow-hidden bg-muted">
            <div className="aspect-video w-full bg-secondary/40" />
            <button
              type="button"
              aria-label="Play VSL"
              className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-background/90 border border-border shadow-sm flex items-center justify-center hover:bg-background transition-colors"
            >
              <Play className="h-6 w-6" />
            </button>
          </div>
        </section> */}

        <p className="mt-6 text-base sm:text-lg text-muted-foreground">
          If you can build, you can sell. You just haven’t been shown the
          playbook yet.
        </p>

        <hr className="my-12 border-border" />

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">The Pain</h2>
          <p className="text-base leading-relaxed">
            You’ve got the skills to deliver incredible work, but the income
            doesn’t match. Projects come in waves. Leads trickle. You see others
            with worse offers growing faster. It’s not your product. It’s not
            the market. It’s that no one’s taught you how to package, price, and
            close in a way that feels natural to you.
          </p>
        </section>

        <hr className="my-12 border-border" />

        <section className="space-y-4">
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
        </section>

        <div className="mt-14 border-t border-border pt-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-8 w-full">
              Ready to make it happen?
            </h3>
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
