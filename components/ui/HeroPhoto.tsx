import Image from "next/image";

type HeroPhotoProps = {
  src: string;
  alt: string;
  caption: string;
  // Punto dell'immagine da tenere in vista quando viene ritagliata.
  position?: string;
};

// Foto nella testata delle pagine interne, con la stessa cornice di Chi sono.
export default function HeroPhoto({ src, alt, caption, position = "center" }: HeroPhotoProps) {
  return (
    <figure className="overflow-hidden rounded-[1.75rem] bg-sea">
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      <figcaption className="px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-paper/70">
        {caption}
      </figcaption>
    </figure>
  );
}
