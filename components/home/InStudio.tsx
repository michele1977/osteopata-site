import Image from "next/image";

const foto = [
  {
    src: "/foto/studio-trattamento-lombare.webp",
    alt: "Il Dott. Trupiano tratta la zona lombare di un paziente disteso sul lettino",
    didascalia: "Schiena",
    posizione: "62% 50%",
  },
  {
    src: "/foto/trattamento-cervicale.webp",
    alt: "Il Dott. Trupiano lavora su collo e spalle di una paziente seduta",
    didascalia: "Collo e spalle",
    posizione: "38% 50%",
  },
  {
    src: "/foto/trattamento-cranio.webp",
    alt: "Il Dott. Trupiano esegue un trattamento cranio-sacrale su una paziente anziana",
    didascalia: "Cranio",
    posizione: "50% 40%",
  },
  {
    src: "/foto/trattamento-neonato.webp",
    alt: "Il Dott. Trupiano tratta un neonato disteso sul lettino",
    didascalia: "Neonati",
    posizione: "72% 50%",
  },
];

// Foto reali dello studio: mostrano il lavoro con pazienti di ogni età.
export default function InStudio() {
  return (
    <section className="mx-auto max-w-[1320px] px-6 pb-28 lg:px-10">
      <div className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.18em] text-stone sm:text-[11.5px]">
        <span className="h-px w-8 bg-tufo" />
        In studio
      </div>
      <h2 className="mt-6 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight md:text-5xl">
        Dal neonato all&rsquo;anziano, <em className="text-tufo">con le mani.</em>
      </h2>
      <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {foto.map((f) => (
          <li key={f.src}>
            <figure className="overflow-hidden rounded-3xl bg-sea">
              <div className="relative aspect-[4/5]">
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: f.posizione }}
                />
              </div>
              <figcaption className="px-4 py-3 text-[13px] font-medium uppercase tracking-[0.18em] text-paper/75 sm:text-[11px]">
                {f.didascalia}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
