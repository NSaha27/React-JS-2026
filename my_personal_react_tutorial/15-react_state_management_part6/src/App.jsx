import { useState } from "react";
import "./App.css";
import VoteController from "./components/VoteController";
import VotingMachine from "./components/VotingMachine";

const voterList = {
  Kolkata: Array.from({ length: 500 }, (_, i) => {
    const firstNames = [
      "Arjun",
      "Rohit",
      "Priya",
      "Sneha",
      "Anirban",
      "Sourav",
      "Rituparna",
      "Debasish",
      "Mitali",
      "Koushik",
    ];
    const guardianFirstNames = [
      "Satyajit",
      "Anil",
      "Sankar",
      "Ramesh",
      "Prabir",
      "Sudip",
      "Subhas",
      "Haradhan",
      "Madan",
      "Suresh",
    ];
    const lastNames = [
      "Sen",
      "Banerjee",
      "Das",
      "Mukherjee",
      "Ghosh",
      "Chatterjee",
      "Roy",
      "Sarkar",
      "Dutta",
      "Basu",
    ];
    const constituencies = [
      "Kolkata Port",
      "Bhabanipur",
      "Rashbehari",
      "Ballygunge",
      "Chowrangee",
      "Entally",
      "Beleghata",
      "Jorasanko",
      "Shyampukur",
      "Maniktala",
      "Kashipur Belgachhia",
    ];

    const sex = Math.random() > 0.5 ? "M" : "F";
    const voterFirst = firstNames[i % firstNames.length];
    const guardianFirst = guardianFirstNames[i % guardianFirstNames.length];
    const voterLast = lastNames[i % lastNames.length];
    let guardianLast;

    if (sex === "M") {
      guardianLast = voterLast;
    } else {
      guardianLast =
        Math.random() > 0.5 ? voterLast : lastNames[(i * 3) % lastNames.length];
    }

    return {
      voter_id: `KOL${1000 + i}`,
      name: `${voterFirst} ${voterLast}`,
      guardian: `${guardianFirst} ${guardianLast}`,
      age: Math.floor(Math.random() * (80 - 18 + 1)) + 18,
      sex,
      constituency:
        constituencies[Math.floor(Math.random() * constituencies.length)],
      voted_for: "", // set to empty string
    };
  }),

  Howrah: Array.from({ length: 500 }, (_, i) => {
    const firstNames = [
      "Sujit",
      "Ananya",
      "Rakesh",
      "Moumita",
      "Suman",
      "Partha",
      "Kajal",
      "Indrajit",
      "Tanushree",
      "Debjit",
    ];
    const guardianFirstNames = [
      "Bimal",
      "Sankar",
      "Haradhan",
      "Madhusudan",
      "Ranjit",
      "Subir",
      "Satyajit",
      "Prabir",
      "Sudip",
      "Anil",
    ];
    const lastNames = [
      "Roy",
      "Pal",
      "Das",
      "Ghosh",
      "Dey",
      "Mitra",
      "Sen",
      "Choudhury",
      "Basak",
      "Sarkar",
    ];
    const constituencies = [
      "Bally",
      "Howrah Uttar",
      "Howrah Madhya",
      "Shibpur",
      "Howrah Dakshin",
      "Sankrail (SC)",
      "Panchla",
      "Uluberia Purba",
      "Uluberia Uttar (SC)",
      "Uluberia Dakshin",
      "Shyampur",
      "Bagnan",
      "Amta",
      "Udaynarayanpur",
      "Jagatballavpur",
      "Domjur",
    ];

    const sex = Math.random() > 0.5 ? "M" : "F";
    const voterFirst = firstNames[i % firstNames.length];
    const guardianFirst = guardianFirstNames[i % guardianFirstNames.length];
    const voterLast = lastNames[i % lastNames.length];
    let guardianLast;

    if (sex === "M") {
      guardianLast = voterLast;
    } else {
      guardianLast =
        Math.random() > 0.5 ? voterLast : lastNames[(i * 5) % lastNames.length];
    }

    return {
      voter_id: `HWH${2000 + i}`,
      name: `${voterFirst} ${voterLast}`,
      guardian: `${guardianFirst} ${guardianLast}`,
      age: Math.floor(Math.random() * (80 - 18 + 1)) + 18,
      sex,
      constituency:
        constituencies[Math.floor(Math.random() * constituencies.length)],
      voted_for: "", // set to empty string
    };
  }),
};
const candidateList = {
  AITC: {
    Kolkata: [
      {
        AC_No: 158,
        AC_Name: "Kolkata Port",
        Candidate: "Firhad Hakim",
        votes: 0,
      },
      {
        AC_No: 159,
        AC_Name: "Bhabanipur",
        Candidate: "Mamata Banerjee",
        votes: 0,
      },
      {
        AC_No: 160,
        AC_Name: "Rashbehari",
        Candidate: "Debasish Kumar",
        votes: 0,
      },
      {
        AC_No: 161,
        AC_Name: "Ballygunge",
        Candidate: "Sovandeb Chattopadhyay",
        votes: 0,
      },
      {
        AC_No: 162,
        AC_Name: "Chowrangee",
        Candidate: "Nayna Bandopadhyay",
        votes: 0,
      },
      {
        AC_No: 163,
        AC_Name: "Entally",
        Candidate: "Sandipan Saha",
        votes: 0,
      },
      {
        AC_No: 164,
        AC_Name: "Beleghata",
        Candidate: "Kunal Ghosh",
        votes: 0,
      },
      {
        AC_No: 165,
        AC_Name: "Jorasanko",
        Candidate: "Vijay Upadhayay",
        votes: 0,
      },
      {
        AC_No: 166,
        AC_Name: "Shyampukur",
        Candidate: "Dr. Shashi Panja",
        votes: 0,
      },
      {
        AC_No: 167,
        AC_Name: "Maniktala",
        Candidate: "Shrreya Pandey",
        votes: 0,
      },
      {
        AC_No: 168,
        AC_Name: "Kashipur Belgachhia",
        Candidate: "Atin Ghosh",
        votes: 0,
      },
    ],
    Howrah: [
      { AC_No: 169, AC_Name: "Bally", Candidate: "Kailash Mishra", votes: 0 },
      {
        AC_No: 170,
        AC_Name: "Howrah Uttar",
        Candidate: "Goutam Chowdhury",
        votes: 0,
      },
      {
        AC_No: 171,
        AC_Name: "Howrah Madhya",
        Candidate: "Arup Roy",
        votes: 0,
      },
      {
        AC_No: 172,
        AC_Name: "Shibpur",
        Candidate: "Dr Rana Chatterjee",
        votes: 0,
      },
      {
        AC_No: 173,
        AC_Name: "Howrah Dakshin",
        Candidate: "Nandita Choudhary",
        votes: 0,
      },
      {
        AC_No: 174,
        AC_Name: "Sankrail (SC)",
        Candidate: "Priya Paul",
        votes: 0,
      },
      {
        AC_No: 175,
        AC_Name: "Panchla",
        Candidate: "Gulshan Mullick",
        votes: 0,
      },
      {
        AC_No: 176,
        AC_Name: "Uluberia Purba",
        Candidate: "Ritabrata Banerjee",
        votes: 0,
      },
      {
        AC_No: 177,
        AC_Name: "Uluberia Uttar (SC)",
        Candidate: "Bimal Kumar Das",
        votes: 0,
      },
      {
        AC_No: 178,
        AC_Name: "Uluberia Dakshin",
        Candidate: "Pulak Roy",
        votes: 0,
      },
      {
        AC_No: 179,
        AC_Name: "Shyampur",
        Candidate: "Nadebasi Jana",
        votes: 0,
      },
      { AC_No: 180, AC_Name: "Bagnan", Candidate: "Arunava Sen", votes: 0 },
      { AC_No: 181, AC_Name: "Amta", Candidate: "Sukanta Paul", votes: 0 },
      {
        AC_No: 182,
        AC_Name: "Udaynarayanpur",
        Candidate: "Samir Kumar Panja",
        votes: 0,
      },
      {
        AC_No: 183,
        AC_Name: "Jagatballavpur",
        Candidate: "Subir Chatterjee",
        votes: 0,
      },
      { AC_No: 184, AC_Name: "Domjur", Candidate: "Tapas Maity", votes: 0 },
    ],
  },
  BJP: {
    Kolkata: [
      {
        AC_No: 159,
        AC_Name: "Bhabanipur",
        Candidate: "Shri Suvendu Adhikari",
        votes: 0,
      },
      {
        AC_No: 160,
        AC_Name: "Rashbehari",
        Candidate: "Shri Swapan Das Gupta",
        votes: 0,
      },
      {
        AC_No: 162,
        AC_Name: "Chowrangee",
        Candidate: "Shri Santosh Pathak",
        votes: 0,
      },
    ],
    Howrah: [
      {
        AC_No: 169,
        AC_Name: "Bally",
        Candidate: "Shri Sanjay Singh",
        votes: 0,
      },
      {
        AC_No: 170,
        AC_Name: "Howrah Uttar",
        Candidate: "Shri Umesh Rai",
        votes: 0,
      },
      {
        AC_No: 171,
        AC_Name: "Howrah Madhya",
        Candidate: "Shri Biplab Mandal",
        votes: 0,
      },
      {
        AC_No: 172,
        AC_Name: "Shibpur",
        Candidate: "Shri Rudranil Ghosh",
        votes: 0,
      },
      {
        AC_No: 173,
        AC_Name: "Howrah Dakshin",
        Candidate: "Shri Shyamal Hati",
        votes: 0,
      },
      {
        AC_No: 175,
        AC_Name: "Panchla",
        Candidate: "Shri Ranjan Kumar Paul",
        votes: 0,
      },
      {
        AC_No: 178,
        AC_Name: "Uluberia Dakshin",
        Candidate: "Swami Mangalanand Puri Maharaj",
        votes: 0,
      },
      {
        AC_No: 181,
        AC_Name: "Amta",
        Candidate: "Shri Amit Samanta",
        votes: 0,
      },
      {
        AC_No: 184,
        AC_Name: "Domjur",
        Candidate: "Shri Gobinda Hazra",
        votes: 0,
      },
    ],
  },
  CPIM: {
    Kolkata: [
      {
        AC_No: 158,
        AC_Name: "Kolkata Port",
        Candidate: "Faiyaz Khan",
        votes: 0,
      },
      {
        AC_No: 159,
        AC_Name: "Bhabanipur",
        Candidate: "Adv. Srijeeb Biswas",
        votes: 0,
      },
      {
        AC_No: 161,
        AC_Name: "Ballygunge",
        Candidate: "Afrin Begam (Silpi)",
        votes: 0,
      },
      {
        AC_No: 162,
        AC_Name: "Chowrangee",
        Candidate: "Sanjoy Basu",
        votes: 0,
      },
      {
        AC_No: 164,
        AC_Name: "Beleghata",
        Candidate: "Paramita Roy",
        votes: 0,
      },
      {
        AC_No: 165,
        AC_Name: "Jorasanko",
        Candidate: "Bharat Ram Tiwari",
        votes: 0,
      },
      {
        AC_No: 167,
        AC_Name: "Maniktala",
        Candidate: "Mousumi Ghosh",
        votes: 0,
      },
      {
        AC_No: 168,
        AC_Name: "Kashipur-Belgachhia",
        Candidate: "Rajinder Gupta",
        votes: 0,
      },
    ],
    Howrah: [
      { AC_No: 169, AC_Name: "Bally", Candidate: "Sankar Moitra", votes: 0 },
      {
        AC_No: 170,
        AC_Name: "Howrah Uttar",
        Candidate: "Prof. Gautam Roy",
        votes: 0,
      },
      {
        AC_No: 171,
        AC_Name: "Howrah Madhya",
        Candidate: "Adv. Imteaz Ahmed",
        votes: 0,
      },
      {
        AC_No: 172,
        AC_Name: "Shibpur",
        Candidate: "Dr. Jagannath Bhattacharya",
        votes: 0,
      },
      {
        AC_No: 173,
        AC_Name: "Howrah Dakshin",
        Candidate: "Dr. Abhijit Bandyopadhyay",
        votes: 0,
      },
      {
        AC_No: 174,
        AC_Name: "Sankrail (SC)",
        Candidate: "Samir Malick",
        votes: 0,
      },
      { AC_No: 175, AC_Name: "Panchla", Candidate: "Farid Molla", votes: 0 },
      {
        AC_No: 177,
        AC_Name: "Uluberia Uttar (SC)",
        Candidate: "Ashok Dolui",
        votes: 0,
      },
      {
        AC_No: 178,
        AC_Name: "Uluberia Dakshin",
        Candidate: "Amirul Islam Khan",
        votes: 0,
      },
      {
        AC_No: 179,
        AC_Name: "Shyampur",
        Candidate: "Asit Baran Sau",
        votes: 0,
      },
      {
        AC_No: 181,
        AC_Name: "Amta",
        Candidate: "Joshimuddin Mallick",
        votes: 0,
      },
      {
        AC_No: 182,
        AC_Name: "Udaynarayanpur",
        Candidate: "Shasthi Maji",
        votes: 0,
      },
      { AC_No: 184, AC_Name: "Domjur", Candidate: "Dulu Das", votes: 0 },
    ],
  },
};

function App() {
  const [voters, setVoters] = useState(voterList);
  const [candidates, setCandidates] = useState(candidateList);
  const [constituencyWiseCandidates, setConstituencyWiseCandidates] = useState(
    [],
  );
  const [currentVoter, setCurrentVoter] = useState("");
  const [allowedToVote, setAllowedToVote] = useState(false);
  const [isVoteOver, setIsVoteOver] = useState(true);
  const [constWiseTotalNumOfVotes, setConstWiseTotalNumOfVotes] = useState(0);
  // const [numOfVotesDone, setNumOfVotesDone] = useState(0);

  const constituencies = [];
  for (let party in candidates) {
    for (let district in candidates[party]) {
      candidates[party][district].forEach((cand) => {
        const AC_Name = cand["AC_Name"];
        if (!constituencies.includes(AC_Name)) {
          constituencies.push(AC_Name);
        }
      });
    }
  }

  // let totalNumOfVotes = 0;
  // for (let district in voterList) {
  //   totalNumOfVotes += voterList[district].length;
  // }

  const handleAllowedToVote = (voterID) => {
    setCurrentVoter(voterID);
    setAllowedToVote((curData) => !curData);
    setIsVoteOver(false);
  };

  const handleSetConstWiseCandsTotNumOfVoters = (constituency) => {
    const newConstituencyWiseCandidates = [];
    for (let party in candidates) {
      for (let district in candidates[party]) {
        candidates[party][district].forEach((cand) => {
          if (cand["AC_Name"] === constituency) {
            const candidateObj = { ...cand, party: party };
            newConstituencyWiseCandidates.push(candidateObj);
          }
        });
      }
    }
    setConstituencyWiseCandidates(newConstituencyWiseCandidates);

    let totalNumOfVotes = 0;
    for (let district in voters) {
      voters[district].forEach((votr) => {
        if (votr.constituency === constituency) {
          totalNumOfVotes += 1;
        }
      });
    }
    setConstWiseTotalNumOfVotes(totalNumOfVotes);
  };

  const handleReceivingVote = (constituency, party) => {
    // select the candidate based on the above constituency and party parameters and update the "vote" property by adding 1
    const newCandidateList = { ...candidates };
    for (let prty in newCandidateList) {
      for (let district in newCandidateList[prty]) {
        newCandidateList[prty][district].forEach((cand) => {
          if (prty === party && cand["AC_Name"] === constituency) {
            cand["votes"] += 1;
          }
        });
      }
    }
    setCandidates(newCandidateList);

    // select the voter based on the voter parameter and update the "voted_for" property with the party name
    const newVoterList = { ...voters };
    for (let district in newVoterList) {
      newVoterList[district].forEach((voter) => {
        if (voter["voter_id"] === currentVoter) {
          voter["voted_for"] = party;
        }
      });
    }
    setVoters(newVoterList);

    // // update the number of votes done
    // setNumOfVotesDone((curNum) => curNum + 1);

    // set isVoteOver to default after 3 seconds
    setTimeout(() => {
      setIsVoteOver(true);
      setAllowedToVote((curData) => !curData);
    }, 4000);
  };

  return (
    <div className="grid grid-cols-2">
      <VoteController
        constituencies={constituencies}
        onSetConstituency={handleSetConstWiseCandsTotNumOfVoters}
        voterList={voters}
        onAllowBtnToggle={handleAllowedToVote}
        isAllowedToVote={allowedToVote}
        isVoteOver={isVoteOver}
        constWiseTotalNumOfVotes={constWiseTotalNumOfVotes}
      />
      <VotingMachine
        candidates={constituencyWiseCandidates}
        isAllowedToVote={allowedToVote}
        isVoteOver={isVoteOver}
        onReceivingVote={handleReceivingVote}
      />
    </div>
  );
}

export default App;
