import { useState } from 'react'
import './App.css'

const data = [
  {
    id: 1,
    image: 'https://course-api.com/images/people/person-1.jpeg',
    name: 'Susan Smith',
    job: 'Web Developer',
    quote: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
      id: 2,
      image: 'https://course-api.com/images/people/person-2.jpeg',
      name: 'Anna Johnson',
      job: 'Web Designer',
      quote: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
      id: 3,
      image: 'https://course-api.com/images/people/person-4.jpeg',
      name: 'Peter Jones',
      job: 'Intern',
      quote: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  },
  {
      id: 4,
      image: 'https://course-api.com/images/people/person-3.jpeg',
      name: 'Bill Anderson',
      job: 'The Boss',
      quote: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
  },
  {
      id: 5,
      image: 'https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/319868150_499606642151898_4437795773371077517_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFwjStoGfuujabzHiNFukNMs7GQCgfG0-WzsZAKB8bT5Rqaj-fj1hhxjx1tsn6hrtWDl4OQzzVKE__XPgHzeh6u&_nc_ohc=zbfFFOjRzSUAX8hsEUe&_nc_ht=scontent.fceb2-1.fna&oh=03_AdQ7tjPHB02RALtRQbbco4ZrD8AWo0G_7BD5dkgkp8oJzQ&oe=6549D264',
      name: 'Lance Abella',
      job: 'The LILBoss',
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
      id: 6,
      image: 'https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/319222842_704270644380829_422420772491351485_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHxEVXatgQNqhqc8NNf5YfjNkHffnP5agc2Qd9-c_lqBw3jqWPs0-EXIj4ITGzFO_oK4IWkMob5ntWodMzINL7C&_nc_ohc=Xc8O3huaFL8AX-59vnG&_nc_ht=scontent.fceb2-1.fna&oh=03_AdRs5_sHkVWgjCOYlMG5pnH21RELrxnI6iNYi0xbvTceOA&oe=6549BFD5',
      name: 'Pearkie Veern Ceniza',
      job: 'Front-End Developer',
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
}
];

function App() {
  const [currentRev, setCurrentRev] = useState(0);

  const prevRev = () => {
    setCurrentRev((prevRev) => {
      if(prevRev === 0) {
        return data.length - 1;
      } else {
        return prevRev - 1;
      }
    });
  }

  const nextRev = () => {
    setCurrentRev((prevRev) => {
      if(prevRev === data.length - 1) {
        return 0;
      } else {
        return prevRev + 1;
      }
    });
  }

  const surpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentRev(randomIndex);
  }
  return (
    <main>
      <div className="revcontainer">
        <div className="imgcontainer">
          <img src={data[currentRev].image} alt={data[currentRev].name} className="imgperson"/>
          <span className="quotations">&quot;</span>
        </div>
        <h4 className="author">{data[currentRev].name}</h4>
        <p className="job">{data[currentRev].job}</p>
        <p className="quotes">{data[currentRev].quote}</p>
        <div className="btnscontainer">
          <button className="prev" onClick={prevRev}>&lt;</button>
          <button className="next" onClick={nextRev}>&gt;</button>
        </div>
        <button className="surprisebtn" onClick={surpriseMe}>Surprise Me!</button>
      </div>
    </main>
  );
}

export default App
