import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "@/components/Icons";
import { contactInfo as info, guideBanner } from "@/lib/guide";

export const metadata = {
  title: "Contact Us | Dermaplex Professional",
  description: "Get in touch with Dermaplex Professional for product information, bulk orders and skincare advice.",
};

const wide = "mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-12";

export default function ContactPage() {
  const cards = [
    [Phone, "Call Us", <a key="p" href={`tel:${info.phone.replace(/[^+\d]/g, "")}`} className="hover:text-brand">{info.phone}</a>, info.phoneHours],
    [Mail, "Email Us", <a key="e" href={`mailto:${info.email}`} className="break-all hover:text-brand">{info.email}</a>, info.emailNote],
    [MapPin, "Our Address", info.address[0], info.address[1]],
    [Clock, "Business Hours", info.hours[0], info.hours[1]],
  ];
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.mapQuery)}`;

  return (
    <>
      <Header />
      <main>
        <PageBanner
          crumbs={[["Home", "/"], ["Contact"]]}
          eyebrow="Let's connect"
          title="Get in Touch"
          text="We're here to help you with your skincare needs, product information and support."
          {...guideBanner}
        />

        <section className={`${wide} grid gap-10 py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:py-20`}>
          <div>
            <p className="eyebrow">Contact information</p>
            <h2 className="mt-2 font-serif text-4xl text-forest sm:text-5xl">We&apos;d Love to Hear from You</h2>
            <p className="mt-3 max-w-lg text-muted">
              Have a question, suggestion, or need personalized skincare advice? Our team is here to assist you.
            </p>
            <ul className="mt-8 space-y-4">
              {cards.map(([Icon, title, line1, line2]) => (
                <li key={title} className="flex items-center gap-5 rounded-3xl border border-forest/10 bg-white/70 p-5">
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#e3ecdc] text-forest">
                    <Icon className="size-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl text-forest">{title}</h3>
                    <p className="mt-0.5 text-ink/85">{line1}</p>
                    <p className="text-sm text-muted">{line2}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-forest/10 bg-white/70 p-6 sm:p-9">
            <p className="eyebrow">Send us a message</p>
            <h2 className="mt-2 font-serif text-4xl text-forest">Contact Form</h2>
            <p className="mt-2 text-muted">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
            <ContactForm email={info.email} />
          </div>
        </section>

        <section className={`${wide} pb-20`}>
          <div className="grid gap-5 rounded-[2rem] border border-forest/10 bg-white/60 p-4 sm:p-5 lg:grid-cols-[1.9fr_1fr]">
            <iframe
              title="Dermaplex Professional location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(info.mapQuery)}&z=16&output=embed`}
              className="h-80 w-full rounded-3xl border-0 lg:h-full lg:min-h-[22rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-col justify-center rounded-3xl bg-[radial-gradient(ellipse_at_top_right,#eef3e8,#fbf8f1_65%)] p-7">
              <h2 className="font-serif text-3xl text-forest sm:text-4xl">Find Us Here</h2>
              <p className="mt-3 text-muted">
                Visit our office for product inquiries, consultations or business collaborations.
              </p>
              <p className="mt-4 text-ink/80">
                <span className="font-medium text-forest">Dermaplex Professional</span>
                <br />
                {info.address[0]}
                <br />
                {info.address[1]}
              </p>
              <a
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-forest/40 px-6 py-3 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-white"
              >
                Get Directions <ArrowRight />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
