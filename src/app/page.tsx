"use client";

import HeroSection from "../components/HeroSection";
import Jumpscare from "../components/Jumpscare";

import angy_main from "../../public/images/angy_main.png";
import marie_pic from "../../public/images/friends/marie.jpeg";
import wiam_pic from "../../public/images/friends/wiam.jpeg";
import reem_pic from "../../public/images/friends/reem.jpeg";

import lacan_jumpsace from "../../public/images/lacan_jumpsacre.png";

// import scare from "../../public/sounds/scare.mp3";

export default function Home() {
  const heroData = {
    name: "Profesora Ankhel",
    cards: [
      {
        id: 1,
        icon: "🧠",
        image: marie_pic,
        title: "Marie",
        paragraph:
          "angyy you're the nicest person ever, may your 21st be blessed with things that make you happy! know that i'll be here whenever you need <3 I wish you peace of mind and success :)",
      },
      {
        id: 2,
        icon: "💭",
        image: wiam_pic,
        title: "Wiamm",
        paragraph:
          "Angy you're an angel on earth, yet you're so humble so human so precious I pray you get everything you dream of in life you deserve heaven on earth my love ❤️",
      },
      {
        id: 3,
        icon: "🧚‍♀️",
        image: angy_main,
        title: "Milo",
        paragraph:
          "istg not a single human hasnt met you and said so many good things about you. angy u're literally the kindest soul to ever exist. wish u all the best and may 21 treat u as good as ur heart is <3",
      },
      {
        id: 4,
        icon: "😉",
        image: reem_pic,
        title: "Reem",
        paragraph:
          "as my memory of yesterday morphs into your celebration of today, i take the opportunity to express my never-ending pride and joy in you. \t sweet twenty-first angy, may we never cease to pass our torches right back to each other…",
      },
      {
        id: 5,
        icon: "🌟",
        image: angy_main,
        title: "Desarrollo Personal",
        paragraph:
          "Herramientas prácticas para tu crecimiento personal y autoconocimiento.",
      },
    ],
  };

  return (
    <div className="min-h-screen max-h-screen bg-bg-light ">
      <HeroSection {...heroData} />

      {/* Jumpscare Component - Customize these props as needed */}
      <Jumpscare
        // Uncomment and add your sound file path if you want audio
        soundFile="../../public/sounds/scare.mp3"
        // Uncomment and add your image file path if you want a custom image
        // imageFile="/images/scary-face.png"
        // Timing configuration
        minDelay={2000} // 15 seconds minimum
        maxDelay={2000} // 45 seconds maximum
        scareDuration={1500} // 2.5 seconds visible
        // Multiple scares (optional)
        multipleScares={true}
        scareInterval={120000} // 2 minutes between scares
        // Mobile features
        enableVibration={true}
        // Enable/disable the jumpscare
        enabled={true}
        imageFile={lacan_jumpsace}
      />
    </div>
  );
}
