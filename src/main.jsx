import React from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  X,
  Binary,
  Clapperboard,
  Cpu,
  Crosshair,
  Eye,
  Gem,
  Landmark,
  Layers3,
  Volume2,
  VolumeX,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const worlds = [
  {
    id: "01",
    name: "FREEPORT",
    label: "Key Location of the Red Realm",
    locationLabel: "Red Realm",
    location: "Largest cyberpunk harbor city",
    copy: "A rain-soaked port of entertainment, capital, neon, and corporate power beneath the red moon.",
    visuals: ["Cyberpunk", "Neon", "Corporate Power", "Red Moon", "Rain"],
    tone: "red",
    image: "/assets/world-freeport.png",
  },
  {
    id: "02",
    name: "DEAD SEA",
    label: "The dangerous sea that separates the two realms",
    locationLabel: "Threats",
    location: "COLOSSAL SEA LIFE · MISSING ROUTES · UNKNOWN PHENOMENA",
    copy: "A black-blue border of storms and deep water, where navigation fails, vessels disappear, and the rules of both worlds begin to dissolve.",
    visuals: ["Black Ocean", "Storm", "Mist", "Lightning", "Lost Routes"],
    tone: "sea",
    image: "/assets/world-dead-sea.png",
  },
  {
    id: "03",
    name: "FUTURE PORT",
    label: "Key Location of the White Realm",
    locationLabel: "White Realm",
    location: "Cliffside trade harbor of sword culture",
    copy: "A moonlit mountain harbor where shrines, winding roads, sailing routes, and sword lineages grow into the cliffs.",
    visuals: ["Moonlight", "Cliffside Harbor", "Shrines", "Traditional Architecture", "Sword Culture"],
    tone: "white",
    image: "/assets/world-future-port.png",
  },
];

const characters = [
  {
    id: "01",
    name: "BAITING",
    title: "The Fool Who Refuses To Stop",
    image: "/assets/character-baiting.png",
    priority: "lead",
  },
  {
    id: "02",
    name: "YUKIMI GIN",
    title: "The Girl Between Worlds",
    image: "/assets/character-yukimi-gin.png",
    priority: "lead",
  },
  {
    id: "03",
    name: "ANKO",
    title: "The Seeker Of Truth",
    image: "/assets/character-anko.png",
    priority: "support",
  },
  {
    id: "04",
    name: "LOKI",
    title: "Bearer Of Sloth",
    image: "/assets/character-loki.png",
    priority: "support",
  },
];

const factionCharacters = [
  {
    id: "01",
    name: "KAREN RAYSER",
    title: "The Snake Of The Red Realm",
    tagline: "The one who controls the rules, yet is never bound by them.",
    image: "/assets/faction-karen-rayser.png",
  },
  {
    id: "02",
    name: "MOKAI",
    title: "The Phantom Blade",
    tagline: "If you can see him, you are already too late.",
    image: "/assets/faction-mokai.png",
  },
  {
    id: "03",
    name: "SHIRAYUME YUKA",
    title: "The Forgotten Bloom",
    tagline: "Purity, memory, love, and sacrifice.",
    image: "/assets/faction-shirayume-yuka.png",
  },
  {
    id: "04",
    name: "HOSS",
    title: "The Man Between Law And Crime",
    tagline: "the double-faced hound",
    image: "/assets/faction-hoss.png",
  },
];

const pillars = [
  {
    id: "01",
    name: "Federal Savings Banking Group",
    role: "Financial Core",
    line: "Order, capital, and authority made visible.",
    image: "/assets/pillar-federal-savings.png",
    icon: Landmark,
    tone: "gold",
  },
  {
    id: "02",
    name: "Ether Link Technologies",
    role: "Neural Infrastructure",
    line: "The signal that turns Freeport into a single mind.",
    image: "/assets/pillar-ether-link.png",
    icon: Cpu,
    tone: "blue",
  },
  {
    id: "03",
    name: "Shinwa United Construction",
    role: "Industrial Expansion",
    line: "Steel, concrete, logistics, and the shape of tomorrow.",
    image: "/assets/pillar-shinwa-construction.png",
    icon: Layers3,
    tone: "red",
  },
  {
    id: "04",
    name: "Valkyrie Armament & Entertainment",
    role: "Arms & Spectacle",
    line: "Weapons sold as dreams, dreams sold as war.",
    image: "/assets/pillar-valkyrie.png",
    icon: Crosshair,
    tone: "violet",
  },
];

const arcs = [
  {
    part: "PART I",
    title: "THE RED & WHITE WORLD",
    fullTitle: "Exrealm Blade I — The Red & White World",
    copy: "Two realms discover the wound between them.",
    tone: "red-white",
    posters: ["/assets/story-part-1-red.png", "/assets/story-part-1-white.png"],
  },
  {
    part: "PART II",
    title: "HEARTS UNSEEN",
    fullTitle: "Exrealm Blade II — Hearts Unseen",
    copy: "The first betrayal arrives without raising a blade.",
    tone: "heart",
    posters: [],
  },
  {
    part: "PART III",
    title: "SILENT INFILTRATION",
    fullTitle: "Exrealm Blade III — Silent Infiltration",
    copy: "The swordswoman finds a city she was never prepared to understand.",
    tone: "infiltration",
    posters: ["/assets/story-part-3.png"],
  },
  {
    part: "PART IV",
    title: "SEVEN BLADES DUEL",
    fullTitle: "Exrealm Blade IV — Seven Blades Duel",
    copy: "Seven blades cross beneath a silent moon.",
    tone: "duel",
    posters: [],
  },
  {
    part: "PART V",
    title: "COUNTERSTRIKE",
    fullTitle: "Exrealm Blade V — Counterstrike",
    copy: "The hunters strike back, and become the hunted.",
    tone: "counterstrike",
    posters: [],
  },
  {
    part: "PART VI",
    title: "SERPENT · SCORPION · FOX",
    fullTitle: "Exrealm Blade VI — Serpent · Scorpion · Fox",
    copy: "Three masks move the city toward collapse.",
    tone: "masks",
    posters: ["/assets/story-part-6.png"],
  },
  {
    part: "PART VII",
    title: "WHITE WORLD WAR",
    fullTitle: "Exrealm Blade VII — White World War",
    copy: "The boundary chooses its final witness.",
    tone: "war",
    posters: [],
  },
];

const journeys = [
  ["The Red and White World", "Origin design: black tactical form, silver hair, restrained red accents."],
  ["Hearts Unseen", "A softer silhouette appears as memory becomes the battlefield."],
  ["Silent Infiltration", "Covert details, darker layers, and the burden of Freeport."],
  ["Serpent · Scorpion · Fox", "The final design language fractures into myth, weapon, and omen."],
];

const workflow = [
  ["Story Design", "GPT", Sparkles],
  ["Character Design", "MidJourney", Eye],
  ["Refinement", "Photoshop", Gem],
  ["Video Production", "Seedance", Clapperboard],
  ["Game Prototype", "Unity", Binary],
];

const gallery = [
  "Character Poster",
  "PV Still",
  "Realm Concept",
  "Costume Sheet",
  "Weapon Study",
  "Freeport Night",
];

function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <FadeIn className="mx-auto mb-12 max-w-5xl px-6">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </FadeIn>
  );
}

function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 opacity-60">
      {Array.from({ length: 42 }).map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${(index * 37) % 100}%`,
            animationDelay: `${(index % 12) * 0.7}s`,
            animationDuration: `${9 + (index % 9)}s`,
          }}
        />
      ))}
    </div>
  );
}

function MusicControl() {
  const cinematicActive = React.useRef(false);
  const audioRef = React.useRef(null);
  const restartTimerRef = React.useRef(null);
  const startTimerRef = React.useRef(null);
  const musicOnRef = React.useRef(false);
  const [musicOn, setMusicOn] = React.useState(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem("exrealm-music-enabled") !== "false";
  });

  const clearRestartTimer = React.useCallback(() => {
    if (restartTimerRef.current) {
      window.clearTimeout(restartTimerRef.current);
      restartTimerRef.current = null;
    }
  }, []);

  const setMusicPreference = React.useCallback((enabled, persist = true) => {
    musicOnRef.current = enabled;
    setMusicOn(enabled);
    if (persist) {
      window.localStorage.setItem("exrealm-music-enabled", enabled ? "true" : "false");
    }
  }, []);

  const playMusic = React.useCallback(() => {
    const audio = audioRef.current;
    if (!audio || cinematicActive.current) return;

    audio.play().catch(() => {
      setMusicPreference(false, false);
      clearRestartTimer();
    });
  }, [clearRestartTimer, setMusicPreference]);

  React.useEffect(() => {
    const handleCinematic = (event) => {
      cinematicActive.current = event.detail;
      if (event.detail) {
        clearRestartTimer();
        audioRef.current?.pause();
      } else if (musicOnRef.current) {
        playMusic();
      }
    };
    window.addEventListener("exrealm-cinematic", handleCinematic);
    return () => window.removeEventListener("exrealm-cinematic", handleCinematic);
  }, [clearRestartTimer, playMusic]);

  React.useEffect(() => {
    musicOnRef.current = musicOn;
  }, [musicOn]);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const handleEnded = () => {
      clearRestartTimer();
      if (!musicOnRef.current) return;

      restartTimerRef.current = window.setTimeout(() => {
        if (!musicOnRef.current) return;
        audio.currentTime = 0;
        playMusic();
      }, 2000);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [clearRestartTimer, playMusic]);

  React.useEffect(() => {
    musicOnRef.current = musicOn;
    const shouldAttemptAutoplay = musicOn;
    startTimerRef.current = window.setTimeout(() => {
      if (shouldAttemptAutoplay && musicOnRef.current) playMusic();
    }, 2000);

    return () => {
      if (startTimerRef.current) window.clearTimeout(startTimerRef.current);
      clearRestartTimer();
    };
  }, [clearRestartTimer, playMusic]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicOn) {
      clearRestartTimer();
      audio.pause();
      setMusicPreference(false);
      return;
    }

    setMusicPreference(true);
    playMusic();
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/exfeeling-moonlight-between-worlds.wav" preload="auto" />
      <button type="button" className={`music-toggle ${musicOn ? "active" : ""}`} onClick={toggleMusic}>
        {musicOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
        <span>{musicOn ? "Music On" : "Music Off"}</span>
      </button>
    </>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 900], [0, 120]);
  const textY = useTransform(scrollY, [0, 900], [0, -70]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-void">
      <motion.img
        src="/assets/hero-yukimi-gin.png"
        alt="Yukimi Gin holding Bloody Candy between the Red Realm and White Realm"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y: imageY }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_35%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(90deg,rgba(3,5,10,0.78)_0%,rgba(3,5,10,0.30)_36%,rgba(3,5,10,0.18)_58%,rgba(3,5,10,0.76)_100%)]" />
      <div className="absolute inset-0 bg-scanline bg-[length:100%_4px] opacity-[0.08]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-void via-void/80 to-transparent" />

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm tracking-[0.42em] text-silver">
            EXREALM
          </a>
          <div className="nav-actions">
            <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.26em] text-silver/70 md:flex">
              <a href="#world">World</a>
              <a href="#characters">Characters</a>
              <a href="#story">Story</a>
              <a href="#gallery">Gallery</a>
            </div>
            <MusicControl />
          </div>
        </nav>
      </header>

      <motion.div
        id="top"
        className="relative z-30 flex min-h-screen items-end px-6 pb-16 pt-32 md:items-center md:pb-0"
        style={{ y: textY }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.58em] text-red-200/80">
              Original IP Project
            </p>
            <h1 className="font-display text-6xl leading-none text-white md:text-8xl xl:text-9xl">
              EXREALM
              <span className="block text-silver">BLADE</span>
            </h1>
            <p className="mt-7 max-w-md font-display text-3xl leading-tight text-red-100 md:text-5xl">
              Two Worlds.
              <span className="block text-blue-100">One Fate.</span>
            </p>
            <p className="mt-6 max-w-sm text-base uppercase tracking-[0.24em] text-silver/70">
              An Original Seven-Part Story Universe
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#world" className="primary-button">
                Enter the World <ArrowRight size={18} />
              </a>
              <a href="#characters" className="ghost-button">
                View Characters
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function WorldDesign() {
  return (
    <section id="world" className="section-shell world-section">
      <SectionTitle
        eyebrow="World Design"
        title="Two worlds connected by the Dead Sea."
        copy="The structure of Exrealm Blade is vertical: Red Realm above, White Realm below, and the Dead Sea as the impossible border between them."
      />
      <div className="world-atlas mx-auto max-w-7xl px-6">
        {worlds.map(({ id, name, label, locationLabel, location, copy, visuals, tone, image }, index) => (
          <FadeIn key={name} delay={index * 0.08}>
            <article className={`world-panel world-panel-${tone}`}>
              <img className="world-art" src={image} alt={`${name} concept art`} />
              <div className="world-illustration" aria-hidden="true" />
              <div className="world-content">
                <div className="world-index">
                  <span>{id}</span>
                  <i />
                </div>
                <div>
                  <p className="world-label">{label}</p>
                  <h3>{name}</h3>
                  <p className="world-copy">{copy}</p>
                </div>
              </div>
              <div className="world-dossier">
                <div>
                  <p>{locationLabel}</p>
                  <strong>{location}</strong>
                </div>
                <ul>
                  {visuals.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Characters() {
  const leadCharacters = characters.filter((character) => character.priority === "lead");
  const supportCharacters = characters.filter((character) => character.priority === "support");

  return (
    <section id="characters" className="section-shell characters-section">
      <FadeIn className="mx-auto mb-10 max-w-7xl px-6">
        <p className="section-kicker">Main Characters</p>
        <h2 className="characters-title">The ones who move the world.</h2>
      </FadeIn>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 lg:grid-cols-2">
        {leadCharacters.map((character, index) => (
          <CharacterShowcase key={character.name} character={character} delay={index * 0.08} lead />
        ))}
      </div>

      <div className="mx-auto mt-5 grid max-w-7xl grid-cols-1 gap-5 px-6 md:grid-cols-2">
        {supportCharacters.map((character, index) => (
          <CharacterShowcase key={character.name} character={character} delay={index * 0.08} />
        ))}
      </div>
    </section>
  );
}

function FactionCharacters() {
  return (
    <section className="section-shell faction-section">
      <FadeIn className="mx-auto mb-10 max-w-7xl px-6">
        <p className="section-kicker faction-kicker">Blue Faction</p>
        <h2 className="characters-title faction-title">Power moves in colder light.</h2>
      </FadeIn>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 lg:grid-cols-2">
        {factionCharacters.map((character, index) => (
          <CharacterShowcase key={character.name} character={character} delay={index * 0.08} faction />
        ))}
      </div>
    </section>
  );
}

function CharacterShowcase({ character, delay = 0, lead = false, faction = false }) {
  return (
    <FadeIn delay={delay}>
      <motion.article
        whileHover={{ y: -8 }}
        className={`character-showcase ${lead ? "lead" : "support"} ${faction ? "faction-card" : ""} character-${character.id}`}
      >
        <img src={character.image} alt={character.name} />
        <div className="character-vignette" />
        <div className="character-meta">
          <span>{character.id}</span>
          <h3>{character.name}</h3>
          <p>{character.title}</p>
          {character.tagline && <small>{character.tagline}</small>}
        </div>
      </motion.article>
    </FadeIn>
  );
}

function Pillars() {
  const [activePillar, setActivePillar] = React.useState(0);
  const active = pillars[activePillar];

  return (
    <section className={`section-shell pillars-section pillar-tone-${active.tone}`}>
      <SectionTitle
        eyebrow="The Four Pillars of Freeport"
        title="The corporations that rule the harbor."
      />
      <div className="pillars-command">
        <div className="pillar-list" onMouseLeave={() => setActivePillar(0)}>
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const selected = index === activePillar;

            return (
              <FadeIn key={pillar.name} delay={index * 0.08}>
                <motion.button
                  type="button"
                  className={`pillar-selector ${selected ? "active" : ""}`}
                  onMouseEnter={() => setActivePillar(index)}
                  onFocus={() => setActivePillar(index)}
                  onClick={() => setActivePillar(index)}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="pillar-index">{pillar.id}</span>
                  <Icon size={26} className="pillar-icon" />
                  <span className="pillar-copy">
                    <span className="pillar-role">{pillar.role}</span>
                    <strong>{pillar.name}</strong>
                    <small>{pillar.line}</small>
                  </span>
                </motion.button>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.12} className="pillar-preview-shell">
          <div className="pillar-preview">
            {pillars.map((pillar, index) => (
              <motion.img
                key={pillar.image}
                src={pillar.image}
                alt={`${pillar.name} headquarters`}
                animate={{ opacity: index === activePillar ? 1 : 0, scale: index === activePillar ? 1 : 1.04 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
            <div className="pillar-preview-shade" />
            <div className="pillar-preview-meta">
              <span>{active.role}</span>
              <h3>{active.name}</h3>
              <p>{active.line}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function StoryArcs() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [partOnePoster, setPartOnePoster] = React.useState(0);
  const [storyHovering, setStoryHovering] = React.useState(false);
  const displayIndex = storyHovering ? activeIndex : 0;
  const activeArc = arcs[displayIndex];

  React.useEffect(() => {
    if (storyHovering) return undefined;

    const interval = window.setInterval(() => {
      setPartOnePoster((current) => (current + 1) % 2);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [storyHovering]);

  return (
    <section id="story" className={`section-shell story-section story-tone-${activeArc.tone}`}>
      <div
        className="story-showcase-layout mx-auto max-w-7xl px-6"
        onMouseLeave={() => {
          setActiveIndex(0);
          setStoryHovering(false);
        }}
      >
        <FadeIn className="story-list-panel">
          <p className="section-kicker">Story Arcs</p>
          <h2>Seven chapters. One fate.</h2>
          <p className="story-active-title">{activeArc.fullTitle}</p>

          <div className="story-list">
            {arcs.map((arc, index) => (
              <motion.button
                type="button"
                key={arc.part}
                className={`story-arc ${index === displayIndex ? "active" : ""}`}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setStoryHovering(true);
                }}
                onFocus={() => {
                  setActiveIndex(index);
                  setStoryHovering(true);
                }}
                onClick={() => {
                  setActiveIndex(index);
                  setStoryHovering(true);
                }}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.75, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>{arc.part}</span>
                <strong>{arc.title}</strong>
              </motion.button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="story-poster-panel">
          <div className="story-poster-stage">
            {arcs.map((arc, index) => (
              <motion.div
                key={arc.part}
                className="story-poster-slide"
                animate={{ opacity: index === displayIndex ? 1 : 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {arc.posters.length > 0 ? (
                  <div className="story-official-poster">
                    {arc.posters.map((poster, posterIndex) => (
                      <motion.img
                        key={poster}
                        src={poster}
                        alt={`${arc.fullTitle} poster`}
                        animate={{
                          opacity: index === 0 ? (posterIndex === partOnePoster ? 1 : 0) : posterIndex === 0 ? 1 : 0,
                        }}
                        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className={`story-coming-soon ${arc.tone}`}>
                    <span>{arc.part}</span>
                    <h3>{arc.title}</h3>
                    <p>Coming Soon</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function DesignJourney() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Yukimi Gin Design Journey"
        title="The heroine changes as the world closes in."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn>
          <div className="design-image">
            <img src="/assets/yukimi-gin-design-sheet.png" alt="Yukimi Gin design sheet" />
          </div>
        </FadeIn>
        <div className="grid gap-4">
          {journeys.map(([title, copy], index) => (
            <FadeIn key={title} delay={index * 0.08}>
              <article className="journey-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-2xl text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-silver/65">{copy}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CreativeWorkflow() {
  return (
    <section className="section-shell bg-[radial-gradient(circle_at_50%_20%,rgba(133,27,42,0.22),transparent_34%),#03050a]">
      <SectionTitle
        eyebrow="Creative Workflow"
        title="A modern production chain for a living IP."
      />
      <div className="mx-auto flex max-w-7xl flex-wrap items-stretch justify-center gap-4 px-6">
        {workflow.map(([label, tool, Icon], index) => (
          <FadeIn key={label} delay={index * 0.07} className="workflow-step">
            <Icon size={28} />
            <p>{label}</p>
            <strong>{tool}</strong>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section-shell">
      <SectionTitle
        eyebrow="Gallery"
        title="Fragments awaiting final transmission."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 md:grid-cols-3">
        {gallery.map((item, index) => (
          <FadeIn key={item} delay={index * 0.05}>
            <article className={`gallery-tile ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              {index === 0 && <img src="/assets/hero-yukimi-gin.png" alt="Hero key visual" />}
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-red-100/60">Archive {index + 1}</p>
                <h3 className="mt-2 font-display text-3xl text-white">{item}</h3>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Cinematics() {
  const [selected, setSelected] = React.useState(null);
  const videos = React.useRef({});
  const notify = (active) => window.dispatchEvent(new CustomEvent("exrealm-cinematic", { detail: active }));

  React.useEffect(() => () => {
    window.dispatchEvent(new CustomEvent("exrealm-cinematic", { detail: false }));
  }, []);

  const close = () => {
    Object.values(videos.current).forEach((video) => video?.pause());
    setSelected(null);
    notify(false);
  };

  return (
    <section id="cinematics" className="section-shell cinematics-section">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="section-kicker mb-8">CINEMATICS</h2>
        <div className="cinematics-grid">
          {["PV001", "PV002"].map((id) => (
            <article key={id} className="cinematic-item">
              <div className="cinematic-screen">
                {selected === id ? (
                  <>
                    <video
                      ref={(node) => { videos.current[id] = node; }}
                      src={`/assets/${id}.mp4`}
                      poster={`/assets/${id}cover.png`}
                      controls autoPlay playsInline preload="metadata"
                      onPlay={() => notify(true)}
                      onEnded={() => notify(false)}
                      onError={() => notify(false)}
                    />
                    <button className="cinematic-close" type="button" onClick={close} aria-label="Close video" title="Close video"><X size={20} /></button>
                  </>
                ) : (
                  <button className="cinematic-cover" type="button" aria-label={`Play ${id}`} onClick={() => {
                    Object.values(videos.current).forEach((video) => video?.pause());
                    notify(true);
                    setSelected(id);
                  }}>
                    <img src={`/assets/${id}cover.png`} alt={`${id} cinematic cover`} loading="lazy" />
                    <span className="cinematic-play"><Play size={28} fill="currentColor" /></span>
                  </button>
                )}
              </div>
              <h3 className="cinematic-name">{id}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Particles />
      <Hero />
      <WorldDesign />
      <Characters />
      <FactionCharacters />
      <Pillars />
      <StoryArcs />
      <Cinematics />
      <CreativeWorkflow />
      <Gallery />
      <footer className="border-t border-white/10 bg-black px-6 py-12 text-center">
        <p className="font-display text-3xl tracking-[0.24em] text-white">EXREALM BLADE</p>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-silver/55">
          Original IP Project
        </p>
        <p className="mt-3 text-sm text-silver/45">Created by Yang Chengdong</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
