"use client";

import HeroSection from "../components/HeroSection";
import Jumpscare from "../components/Jumpscare";

import angy_main from "../../public/images/angy_main.png";
import marie_pic from "../../public/images/friends/marie.jpeg";
import wiam_pic from "../../public/images/friends/wiam.jpeg";
import reem_pic from "../../public/images/friends/reem.jpeg";

import milo_pic from "../../public/images/friends/milo.jpeg";
import gmc_pic from "../../public/images/friends/gmc.jpeg";
import vivo_pic from "../../public/images/friends/vivo.jpeg";
import celine_pic from "../../public/images/friends/celine.jpeg";
import jade_pic from "../../public/images/friends/jade.jpeg";

import lacan_jumpsace from "../../public/images/lacan_jumpscare.png";

// import scare from "../../public/sounds/scare.mp3";

export default function Home() {
  const heroData = {
    name: "Profesora Angel",
    cards: [
      {
        id: 0,
        icon: "🧚‍♀️",
        image: milo_pic,
        title: "Milo",
        paragraph:
          "istg not a single human hasnt met you and said so many good things about you. angy u're literally the kindest soul to ever exist. wish u all the best and may 21 treat u as good as ur heart is <3",
      },
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
        icon: "🧚‍♀️",
        image: vivo_pic,
        title: "Vivo",
        paragraph:
          "Happy birthday honey. you're always on my mind, sweetheart. I am wishing you endless success. I've watched you become the most amazing, beautiful woman. You're a little older, but still my baby. I'm always going to be here for you, love. You're the best daughter anyone could have, and I am so thankful for you.",
      },
      {
        id: 3,
        icon: "💭",
        image: wiam_pic,
        title: "Wiam",
        paragraph:
          "Angy you're an angel on earth, yet you're so humble so human so precious I pray you get everything you dream of in life you deserve heaven on earth my love ❤️",
      },
      {
        id: 4,
        icon: "🐛",
        image: jade_pic,
        title: "Jade",
        paragraph:
          "You're an awesome and amazing friend !! And our friendship means soooo much to me!!! I love you tons and tons and want you to know that you're one of the sweetest and coolest and most important people in my life!! Our friendship has always brought me happiness and peace and  comfort :)) And I want you to know that you're loved!! That I love you!!!!! And everything about you :]  A a subject of course, never an object <333",
      },
      {
        id: 5,
        icon: "💛",
        image: gmc_pic,
        title: "GMC",
        paragraph:
          "To the kindest soul, Happy Birthday Anouj 🎂💛 You've always had a special way of making people feel loved. I'll never forget that. No matter how far life takes us, I'm really thankful for everything we shared. Wishing you all the happiness in the world today. Keep being you ✨",
      },
      {
        id: 6,
        icon: "😉",
        image: reem_pic,
        title: "Reem",
        paragraph:
          "as my memory of yesterday morphs into your celebration of today, i take the opportunity to express my never-ending pride and joy in you. \t sweet twenty-first angy, may we never cease to pass our torches right back to each other…",
      },
      {
        id: 7,
        icon: "🌟",
        image: celine_pic,
        title: "Celine",
        paragraph:
          "To my favorite human, my soul sister, and the person who knows me better than I know myself.  \nYou've been there through every laugh, every tear, and every crazy moment in between.  \nI'm endlessly grateful for your kindness, your strength, and the way you make everything feel a little brighter.   \nI don't say it enough, but I truly appreciate you.  \nHere's to more memories, more adventures, and a year as amazing as you are. \nHappiest of birthdays falfoulll.💕",
      },
    ],
  };

  return (
    <div className="min-h-screen  bg-bg-light ">
      <HeroSection {...heroData} />

      {/* Jumpscare Component - Customize these props as needed */}
      <Jumpscare
        // Uncomment and add your sound file path if you want audio
        soundFile="/sounds/scare.mp3"
        // Uncomment and add your image file path if you want a custom image
        // imageFile="/images/scary-face.png"
        // Timing configuration
        minDelay={60000} // 15 seconds minimum
        maxDelay={120000} // 45 seconds maximum
        scareDuration={3500} // 2.5 seconds visible
        // Multiple scares (optional)
        multipleScares={false}
        scareInterval={10000} // 2 minutes between scares
        // Mobile features
        enableVibration={true}
        // Enable/disable the jumpscare
        enabled={true}
        imageFile={lacan_jumpsace}
      />
    </div>
  );
}
