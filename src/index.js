import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Library } from './library';
import { Static } from './static';
import { Store } from './store';
import { Marks } from './marks';
import image1 from "./accets/image1.jpg";
import images3 from "./accets/images3.jpg";
import images6 from "./accets/images6.jpg";
import images14 from "./accets/images14.jpg";
import img0 from "./accets/img0.png";
import GamePage from "./gamePage"
import AuthorPage from './authorPage';
import LoginPage from './loginPage';

function App(){

  let [gamesList, setGamesList] = useState([
    {
      id: 1,
      title: "The Adventure Begins",
      describe: "Embark on an epic journey through uncharted lands.",
      images: [image1, images3, images6, images14, img0],
      price: 29.99,
      isBuy: false,
      rateCount: 0,
      ratedUsers: [],
      ganres: ["Adventure", "RPG"],
      authors: [
        { id: 1, name: "Alice Johnson", stage: "Lead Game Designer", img: images6 },
        { id: 2, name: "Bob Smith", stage: "Senior Programmer", img: image1 },
        { id: 12, name: "Larry Young", stage: "Network Engineer", img: image1 },
        { id: 4, name: "David Brown", stage: "Game Producer", img: image1 },
      ],
      comments: [
        { elTitle: "The Adventure Begins", id: 1, name: "Alex", cont: "Amazing story and gameplay!", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "The Adventure Begins", id: 2, name: "Megan", cont: "Loved the graphics.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "The Adventure Begins", id: 3, name: "Chris", cont: "Great characters!", ratedUsers: [], likes: 0, hates: 0 }
      ]
    },
    {
      id: 2,
      title: "Mystic Realms",
      describe: "Explore magical realms filled with mystery and wonder.",
      images: [images3, image1, images6, images14, img0],
      price: 34.99,
      isBuy: false,
      rateCount: 0,
      ratedUsers: [],
      ganres: ["Fantasy", "RPG"],
      authors: [
        { id: 5, name: "Eva Martinez", stage: "Level Designer", img: img0 },
        { id: 9, name: "Isabella Green", stage: "Marketing Manager", img: images14 },
        { id: 1, name: "Alice Johnson", stage: "Lead Game Designer", img: images6 },
        { id: 2, name: "Bob Smith", stage: "Senior Programmer", img: image1 }
      ],
      comments: [
        { elTitle: "Mystic Realms", id: 1, name: "Lucas", cont: "Incredible world-building.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Mystic Realms", id: 2, name: "Ella", cont: "Fantastic music and atmosphere.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Mystic Realms", id: 3, name: "Liam", cont: "A must-play for fantasy fans.", ratedUsers: [], likes: 0, hates: 0 }
      ]
    },
    {
      id: 3,
      title: "Space Odyssey",
      describe: "Navigate through the stars in this thrilling space adventure.",
      images: [images6, image1, images3, images14, img0],
      price: 39.99,
      isBuy: false,
      rateCount: 0,
      ratedUsers: [],
      ganres: ["Sci-Fi", "Adventure"],
      authors: [
        { id: 14, name: "Nathan Clark", stage: "Technical Artist", img: images3 },
        { id: 4, name: "David Brown", stage: "Game Producer", img: image1 },
        { id: 11, name: "Karen Scott", stage: "Character Designer", img: images14 },
        { id: 15, name: "Olivia Lewis", stage: "Community Manager", img: image1 }
      ],
      comments: [
        { elTitle: "Space Odyssey", id: 1, name: "Isabella", cont: "Stunning visuals and story.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Space Odyssey", id: 2, name: "Noah", cont: "Great gameplay mechanics.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Space Odyssey", id: 3, name: "Emma", cont: "Loved the space exploration.", ratedUsers: [], likes: 0, hates: 0 }
      ]
    },
    {
      id: 4,
      title: "Zombie Apocalypse",
      describe: "Survive the horrors of a zombie-infested world.",
      images: [images14, image1, images3, images6, img0],
      price: 24.99,
      isBuy: false,
      rateCount: 0,
      ratedUsers: [],
      ganres: ["Horror", "Survival"],
      authors: [
        { id: 1, name: "Alice Johnson", stage: "Lead Game Designer", img: images6 },
        { id: 20, name: "Tina Perez", stage: "Concept Artist", img: img0 },
        { id: 14, name: "Nathan Clark", stage: "Technical Artist", img: images3 },
        { id: 7, name: "Grace Lee", stage: "QA Tester", img: image1}
      ],
      comments: [
        { elTitle: "Zombie Apocalypse", id: 1, name: "Jack", cont: "Intense and scary!", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Zombie Apocalypse", id: 2, name: "Sophia", cont: "Great survival mechanics.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Zombie Apocalypse", id: 3, name: "Daniel", cont: "Kept me on the edge of my seat.", ratedUsers: [], likes: 0, hates: 0 }
      ]
    },
    {
      id: 5,
      title: "Mystery Manor",
      describe: "Unravel the secrets of the haunted manor.",
      images: [img0, image1, images3, images6, images14,],
      price: 19.99,
      isBuy: false,
      rateCount: 0,
      ratedUsers: [],
      ganres: ["Mystery", "Puzzle"],
      authors: [
        { id: 4, name: "David Brown", stage: "Game Producer", img: image1 },
        { id: 17, name: "Quinn Roberts", stage: "Monetization Specialist", img: images14 },
        { id: 6, name: "Frank Wilson", stage: "Sound Engineer", img: images14 },
        { id: 12, name: "Larry Young", stage: "Network Engineer", img: image1 }
      ],
      comments: [
        { elTitle: "Mystery Manor", id: 1, name: "Chloe", cont: "Loved the puzzles.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Mystery Manor", id: 2, name: "Ethan", cont: "Intriguing storyline.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Mystery Manor", id: 3, name: "Ava", cont: "Great atmosphere!", ratedUsers: [], likes: 0, hates: 0 }
      ]
    },
    {
      id: 6,
      title: "Dragon Quest",
      describe: "Become a hero and save the kingdom from dragons.",
      images: [image1, images3, images6, images14, img0],
      price: 29.99,
      isBuy: false,
      rateCount: 0,
      ratedUsers: [],
      ganres: ["Adventure", "Fantasy"],
      authors: [
        { id: 8, name: "Henry White", stage: "Story Writer", img: images6 },
        { id: 3, name: "Carol Davis", stage: "Art Director", img: images3 },
        { id: 17, name: "Quinn Roberts", stage: "Monetization Specialist", img: images14 },
        { id: 2, name: "Bob Smith", stage: "Senior Programmer", img: image1}
      ],
      comments: [
        { elTitle: "Dragon Quest", id: 1, name: "Jacob", cont: "Amazing dragon battles.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Dragon Quest", id: 2, name: "Mia", cont: "Loved the fantasy world.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Dragon Quest", id: 3, name: "William", cont: "Great story and characters.", ratedUsers: [], likes: 0, hates: 0 }
      ]
    },
    {
      id: 7,
      title: "Cyber City",
      describe: "Dive into the neon-lit streets of a futuristic city.",
      images: [images3, image1, images6, images14, img0],
      price: 34.99,
      isBuy: false,
      rateCount: 0,
      ratedUsers: [],
      ganres: ["Sci-Fi", "Action"],
      authors: [
        { id: 15, name: "Olivia Lewis", stage: "Community Manager", img: images6 },
        { id: 3, name: "Carol Davis", stage: "Art Director", img: images3 },
        { id: 18, name: "Rachel King", stage: "Visual Effects Artist", img: images3 },
        { id: 9, name: "Isabella Green", stage: "Marketing Manager", img: images14 }
      ],
      comments: [
        { elTitle: "Cyber City", id: 1, name: "Aiden", cont: "Incredible visuals and action.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Cyber City", id: 2, name: "Charlotte", cont: "Loved the cyberpunk setting.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Cyber City", id: 3, name: "Ethan", cont: "Great gameplay mechanics.", ratedUsers: [], likes: 0, hates: 0 }
      ]
    },
    {
      id: 8,
      title: "Treasure Hunt",
      describe: "Find hidden treasures in exotic locations.",
      images: [images6, image1, images3, images14, img0],
      price: 21.99,
      isBuy: false,
      rateCount: 0,
      ratedUsers: [],
      ganres: ["Adventure", "Puzzle"],
      authors: [
        { id: 19, name: "Sam Turner", stage: "Gameplay Programmer", img: images6 },
        { id: 12, name: "Larry Young", stage: "Network Engineer", img: image1 },
        { id: 10, name: "Jack Hall", stage: "Animator", img: image1 },
        { id: 2, name: "Bob Smith", stage: "Senior Programmer", img: image1}
      ],
      comments: [
        { elTitle: "Treasure Hunt", id: 1, name: "Sophia", cont: "Exciting treasure hunts.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Treasure Hunt", id: 2, name: "Liam", cont: "Great puzzles.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Treasure Hunt", id: 3, name: "Emily", cont: "Loved the adventure aspect.", ratedUsers: [], likes: 0, hates: 0 }
      ]
    },
    {
      id: 9,
      title: "Alien Invasion",
      describe: "Defend Earth from an alien invasion.",
      images: [images14, image1, images3, images6, img0],
      price: 26.99,
      isBuy: false,
      rateCount: 0,
      ratedUsers: [],
      ganres: ["Sci-Fi", "Action"],
      authors: [
        { id: 20, name: "Tina Perez", stage: "Concept Artist", img: img0 },
        { id: 16, name: "Paul Walker", stage: "Localization Specialist", img: image1 },
        { id: 6, name: "Frank Wilson", stage: "Sound Engineer", img: images14 },
        { id: 17, name: "Quinn Roberts", stage: "Monetization Specialist", img: images14 }
      ],
      comments: [
        { elTitle: "Alien Invasion", id: 1, name: "Ethan", cont: "Thrilling action sequences.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Alien Invasion", id: 2, name: "Isabella", cont: "Loved the alien designs.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Alien Invasion", id: 3, name: "Jacob", cont: "Great story and gameplay.", ratedUsers: [], likes: 0, hates: 0 }
      ]
    },
    {
      id: 10,
      title: "Haunted Forest",
      describe: "Survive the night in a haunted forest.",
      images: [img0, image1, images3, images6, images14,],
      price: 22.99,
      isBuy: false,
      rateCount: 0,
      ratedUsers: [],
      ganres: ["Horror", "Adventure"],
      authors: [
        { id: 13, name: "Megan Adams", stage: "UI/UX Designer", img: img0 },
        { id: 7, name: "Grace Lee", stage: "QA Tester", img: image1 },
        { id: 1, name: "Alice Johnson", stage: "Lead Game Designer", img: images6 },
        { id: 11, name: "Karen Scott", stage: "Character Designer", img: images14 }
      ],
      comments: [
        { elTitle: "Haunted Forest", id: 1, name: "Chloe", cont: "Scary and fun!", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Haunted Forest", id: 2, name: "Jack", cont: "Great atmosphere.", ratedUsers: [], likes: 0, hates: 0 },
        { elTitle: "Haunted Forest", id: 3, name: "Mia", cont: "Loved the spooky setting.", ratedUsers: [], likes: 0, hates: 0 }
      ]
    },
  ]);

  let [authorsList, setAuthorsList] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      stage: "Lead Game Designer",
      describe: "Alice is an experienced game designer known for her innovative ideas.",
      projectsNames: ["The Adventure Begins", "Mystic Realms", "Zombie Apocalypse", "Haunted Forest"],
      img: images6,
    },
    {
      id: 2,
      name: "Bob Smith",
      stage: "Senior Programmer",
      describe: "Bob specializes in AI programming and has a keen eye for optimization.",
      projectsNames: ["The Adventure Begins", "Mystic Realms", "Dragon Quest", "Treasure Hunt"],
      img: image1,
    },
    {
      id: 3,
      name: "Carol Davis",
      stage: "Art Director",
      describe: "Carol leads the art team with a focus on creating immersive game environments.",
      projectsNames: ["Dragon Quest", "Cyber City"],
      img: images3,
    },
    {
      id: 4,
      name: "David Brown",
      stage: "Game Producer",
      describe: "David ensures the game development process runs smoothly and on schedule.",
      projectsNames: ["The Adventure Begins", "Space Odyssey", "Mystery Manor"],
      img: image1,
    },
    {
      id: 5,
      name: "Eva Martinez",
      stage: "Level Designer",
      describe: "Eva creates engaging and challenging levels for players to explore.",
      projectsNames: ["Mystic Realms"],
      img: img0,
    },
    {
      id: 6,
      name: "Frank Wilson",
      stage: "Sound Engineer",
      describe: "Frank designs and implements the game's soundscapes and effects.",
      projectsNames: ["Mystery Manor", "Alien Invasion"],
      img: images14,
    },
    {
      id: 7,
      name: "Grace Lee",
      stage: "QA Tester",
      describe: "Grace rigorously tests the game to ensure a bug-free player experience.",
      projectsNames: ["Zombie Apocalypse", "Haunted Forest"],
      img: image1,
    },
    {
      id: 8,
      name: "Henry White",
      stage: "Story Writer",
      describe: "Henry crafts compelling narratives and dialogues for the game.",
      projectsNames: ["Dragon Quest"],
      img: images6,
    },
    {
      id: 9,
      name: "Isabella Green",
      stage: "Marketing Manager",
      describe: "Isabella handles the marketing and promotion of the game.",
      projectsNames: ["Mystic Realms", "Cyber City"],
      img: images14,
    },
    {
      id: 10,
      name: "Jack Hall",
      stage: "Animator",
      describe: "Jack brings characters and scenes to life with his animation skills.",
      projectsNames: ["Treasure Hunt"],
      img: img0,
    },
    {
      id: 11,
      name: "Karen Scott",
      stage: "Character Designer",
      describe: "Karen designs unique and memorable characters for the game.",
      projectsNames: ["Space Odyssey", "Haunted Forest"],
      img: images14,
    },
    {
      id: 12,
      name: "Larry Young",
      stage: "Network Engineer",
      describe: "Larry ensures smooth online gameplay and server stability.",
      projectsNames: ["The Adventure Begins", "Mystery Manor", "Treasure Hunt"],
      img: image1,
    },
    {
      id: 13,
      name: "Megan Adams",
      stage: "UI/UX Designer",
      describe: "Megan focuses on creating intuitive and engaging user interfaces.",
      projectsNames: ["Haunted Forest"],
      img: img0,
    },
    {
      id: 14,
      name: "Nathan Clark",
      stage: "Technical Artist",
      describe: "Nathan bridges the gap between art and programming with his technical skills.",
      projectsNames: ["Space Odyssey", "Zombie Apocalypse"],
      img: images3,
    },
    {
      id: 15,
      name: "Olivia Lewis",
      stage: "Community Manager",
      describe: "Olivia engages with the game's community and handles feedback.",
      projectsNames: ["Cyber City"],
      img: images6,
    },
    {
      id: 16,
      name: "Paul Walker",
      stage: "Localization Specialist",
      describe: "Paul adapts the game for different languages and cultures.",
      projectsNames: ["Alien Invasion"],
      img: image1,
    },
    {
      id: 17,
      name: "Quinn Roberts",
      stage: "Monetization Specialist",
      describe: "Quinn develops strategies for in-game purchases and revenue.",
      projectsNames: ["Mystery Manor", "Dragon Quest", "Alien Invasion"],
      img: images14,
    },
    {
      id: 18,
      name: "Rachel King",
      stage: "Visual Effects Artist",
      describe: "images3 creates stunning visual effects to enhance the game experience.",
      projectsNames: ["Cyber City"],
      img: images3,
    },
    {
      id: 19,
      name: "Sam Turner",
      stage: "Gameplay Programmer",
      describe: "Sam focuses on coding the core mechanics and gameplay systems.",
      projectsNames: ["Treasure Hunt"],
      img: images6,
    },
    {
      id: 20,
      name: "Tina Perez",
      stage: "Concept Artist",
      describe: "Tina draws initial sketches and concepts for game assets.",
      projectsNames: ["Zombie Apocalypse", "Alien Invasion"],
      img: img0,
    }
  ])

  let [ganresList, setGanresList] = useState([
    {ganre: "Adventure", isChose: false},
    {ganre: "RPG", isChose: false},
    {ganre: "Fantasy", isChose: false},
    {ganre:"Sci-Fi", isChose: false},
    {ganre: "Horror", isChose: false},
    {ganre: "Survival", isChose: false},
    {ganre: "Mystery", isChose: false},
    {ganre: "Puzzle", isChose: false},
    {ganre: "Action", isChose: false},
  ]);

  let [usersList, setUsersList] = useState([]);

  let [myAccount, setMyAccount] = useState();

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={myAccount == undefined ? <LoginPage myAccount={myAccount} setMyAccount={setMyAccount} usersList={usersList} setUsersList={setUsersList} /> : <Static myAccount={myAccount} setMyAccount={setMyAccount} />}>
          <Route index element={<Store gamesList={gamesList} setGamesList={setGamesList} ganresList={ganresList} setGanresList={setGanresList} myAccount={myAccount} setMyAccount={setMyAccount} usersList={usersList} setUsersList={setUsersList} />}></Route>
          <Route path="/library" element={<Library gamesList={gamesList} myAccount={myAccount} setMyAccount={setMyAccount} usersList={usersList} setUsersList={setUsersList} />}></Route>
          <Route path="/marks" element={<Marks gamesList={gamesList} setGamesList={setGamesList} myAccount={myAccount} setMyAccount={setMyAccount} usersList={usersList} setUsersList={setUsersList}/>}></Route>
          <Route path="/games/:title" element={<GamePage gamesList={gamesList} setGamesList={setGamesList} myAccount={myAccount} setMyAccount={setMyAccount} usersList={usersList} setUsersList={setUsersList} />}></Route>
          <Route path="/authors/:author/:id" element={<AuthorPage gamesList={gamesList} authorsList={authorsList} setAuthorsList={setAuthorsList} myAccount={myAccount} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
