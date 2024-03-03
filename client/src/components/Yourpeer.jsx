import React, { useEffect } from "react";
import { GoPerson } from "react-icons/go";
import { AiFillGolden } from "react-icons/ai";

function Yourpeer() {
  const [activeButton, setActiveButton] = React.useState("");
  const subjectsList = ["CS483", "CS484", "CS485", "CS486", "CS487", "CS488"];
  const peersList = [
    {
      name: "Morgan Freeman",
      username: "Morgan123",
      points: 100,
      subjects: ["CS483", "CS485"],
      image: "https://images.squarespace-cdn.com/content/v1/57e49a19414fb5b5169a9161/1527278590305-IQUVXUPMHN39NPVXJHM0/%28TR%29HeroMFBlack_MG_1168MDF%281244%29FINAL_WEB.jpg",
    },
    {
      name: "Elon Musk",
      username: "Elon123",
      points: 140,
      subjects: ["CS484", "CS486", "CS487"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    },
    {
      name: "Dolly Chai",
      username: "dolly123",
      points: 120,
      subjects: ["CS485", "CS488"],
      image: "https://preview.redd.it/dolly-ki-tapri-multiverse-of-madness-cool-art-v0-eg2djq48w2z81.jpg?width=640&crop=smart&auto=webp&s=1d3fc244a6aab43fc19db7844d8f45d227684332",
    },
    {
      name: "Ada Lovelace",
      username: "AdaLovelace",
      points: 150,
      subjects: ["CS483", "CS487"],
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
    },
    {
      name: "Grace Hopper",
      username: "GraceHopper",
      points: 130,
      subjects: ["CS486", "CS488"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/1200px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
    },
    {
      name: "Margaret Hamilton",
      username: "MargaretHamilton",
      points: 110,
      subjects: ["CS484", "CS485"],
      image: "https://www.eu-startups.com/wp-content/uploads/2020/07/Deborah-Choi-by-Katja.jpg",
    },
    {
      name: "Katherine Johnson",
      username: "KatherineJohnson",
      points: 160,
      subjects: ["CS483", "CS484"],
      image: "https://images.sifted.eu/wp-content/uploads/2021/01/27133749/Leigh-Farmer-Photography-41-scaled.jpg?w=2048&h=1365&q=75&fit=crop&auto=compress,format",
    },
    {
      name: "Marie Curie",
      username: "MarieCurie",
      points: 170,
      subjects: ["CS486", "CS487"],
      image: "https://www.philadelphiaaward.org/wp-content/uploads/2020/03/sylvester-mobley-headshot-683x1024-1-683x720.jpg",
    }
  ];
  const [filteredPeers, setFilteredPeers] = React.useState([]);

  const handleActiveButton = (subject) => () => {
    activeButton === subject ? setActiveButton("") : setActiveButton(subject);
  
  };

  useEffect(() => {
    const newFilteredPeers = peersList.filter((peer) =>
      peer.subjects.includes(activeButton)
    );
    setFilteredPeers(newFilteredPeers);
  }, [activeButton]);

  return (
    <div className="w-[20%] h-screen pt-4 flex flex-col gap-6">
      <div className="flex items-center justify-center gap-3">
        <GoPerson className="text-3xl text-[#4461F2]" />
        <p className="text-xl font-semibold text-[#4461F2]">Your Peers</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        {subjectsList.map((subject) => (
          <button
            key={subject}
            className={`text-black bg-white border border-gray-400 px-1 text-xs font-semibold py-1 rounded-md ${
              activeButton === subject ? "bg-slate-900 text-neutral-100" : ""
            }`}
            onClick={handleActiveButton(subject)}
          >
            {subject}
          </button>
        ))}
      </div>

      {activeButton !== "" ? (
         <div className="flex flex-col items-start gap-4 px-9">
         
         {filteredPeers !== undefined && filteredPeers.map((peer) => (
           <div
             key={peer.username}
             className="flex items-center justify-between gap-4 w-full py-2 px-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
           >
             <div className="flex items-center justify-center gap-4">
             <img
               src={peer.image}
               alt="profile"
               className="w-12 h-12 rounded-full"
             />
             <div className="flex flex-col items-start justify-center">
               <p className="text-sm font-semibold">{peer.name}</p>
               <p className="text-xs font-semibold text-gray-500">
                 {peer.username}
               </p>
             </div>
             </div>
 
             <div className="flex items-center justify-center gap-1">
               <AiFillGolden className="text-2xl text-[#4461F2]" />
               <p className="text-xs font-semibold text-[#4461F2]">{peer.points}</p>
               </div>
           </div>
         ))}
         </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <p className="text-lg font-semibold text-gray-500">Select a subject</p>
        </div>
      )}

     
    </div>
  );
}

export default Yourpeer;
