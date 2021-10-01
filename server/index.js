const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
  const fortunes = ["A person of words and not deeds is like a garden full of weeds.",
    "A pleasant surprise is waiting for you.",
    "A short pencil is usually better than a long memory any day.",
    "A small donation is call for. It’s the right thing to do.",
    "A smile is your personal welcome mat."];

let randomIndex = math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex];
res.status(200).send(randomFortune)
});

app.get("api/inspiration", (req, res) => {
  const inspiratons = ["Martin Luther King Jr.",
  "Charles Darwin",
  "Dalai Lama",
  "Winston Churchill"];
})

app.listen(4000, () => console.log("Server running on 4000"));
