import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import heroImg from "@/assets/hero-restaurant.jpg";
import chefImg from "@/assets/about-chef.jpg";
import outdoorflowerImg from "@/assets/outdoorflower.png";
import familymealImg from "@/assets/familymeal.png";
import artboardImg from "@/assets/artboardimg.jpg";
import tuaristImg from "@/assets/tourists.jpg";
import hallImg from "@/assets/restaurant-hall.jpg";

/** Sample MP4s (replace with your own hosted files in `public/` or a CDN). */
const SAMPLE_MP4_FLOWER =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const SAMPLE_MP4_FRUIT =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/fruits.mp4";

type GalleryImageItem = {
  kind: "image";
  id: string;
  src: string;
  alt: string;
};

type GalleryVideoItem = {
  kind: "video";
  id: string;
  poster: string;
  title: string;
  sources: readonly { src: string; type: string }[];
};

type GalleryItem = GalleryImageItem | GalleryVideoItem;

const GALLERY_ITEMS: GalleryItem[] = [
  { kind: "image", id: "1", src: heroImg, alt: "Restaurant interior" },
  {
    kind: "video",
    id: "2",
    poster: chefImg,
    title: "Kitchen clip",
    sources: [{ src: SAMPLE_MP4_FLOWER, type: "video/mp4" }],
  },
  { kind: "image", id: "3", src: outdoorflowerImg, alt: "Outdoor seating" },
  { kind: "image", id: "4", src: familymealImg, alt: "Family meal" },
  {
    kind: "video",
    id: "5",
    poster: artboardImg,
    title: "Highlights",
    sources: [{ src: SAMPLE_MP4_FRUIT, type: "video/mp4" }],
  },
  { kind: "image", id: "6", src: tuaristImg, alt: "Guests" },
  { kind: "image", id: "7", src: hallImg, alt: "Dining hall" },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = useMemo(
    () =>
      GALLERY_ITEMS.map((item) => {
        if (item.kind === "image") {
          return { src: item.src, alt: item.alt };
        }
        return {
          type: "video" as const,
          poster: item.poster,
          width: 1280,
          height: 720,
          autoPlay: false,
          controls: true,
          playsInline: true,
          preload: "metadata",
          sources: item.sources,
        };
      }),
    [],
  );

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Badge className="mb-3 bg-secondary text-secondary-foreground border-none">Gallery</Badge>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3">Photos & videos</h1>
          <p className="text-muted-foreground">
            Tap an image to enlarge, or open a video and press play — nothing autoplays.
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 list-none p-0 m-0">
          {GALLERY_ITEMS.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => openAt(i)}
                className="group relative w-full overflow-hidden rounded-xl border border-border/60 bg-muted shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <img
                  src={item.kind === "image" ? item.src : item.poster}
                  alt={item.kind === "image" ? item.alt : item.title}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] md:h-52"
                  loading="lazy"
                />
                {item.kind === "video" && (
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/95 text-primary shadow-lg">
                      <Play className="ml-0.5 h-7 w-7 fill-current" aria-hidden />
                    </span>
                    <span className="sr-only">Video — opens viewer to play</span>
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Video]}
        video={{ autoPlay: false, controls: true, playsInline: true, preload: "metadata" }}
        on={{ view: ({ index: next }) => setIndex(next) }}
      />
    </section>
  );
};

export default Gallery;
