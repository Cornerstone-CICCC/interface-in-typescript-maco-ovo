// 4.Exercise: Type against Interface

// Define an type alias Participant with properties name (string) and role (string).
// Define an interface Event with properties date (Date), title (string), and participants (array of Participant objects).
// Create an object called event1 using the Event interface.
// Invert the exercise, using Event as a type alias and participants as an interface.



interface Participant {
  name: string;
  role: string;
}

type techEvent = {
  date: Date;
  title: string;
  participants: Participant[];
}


const event1: techEvent = {

  date: new Date('2026-04-28T13:50:00'), 
  title: "Tech Study Session",
  participants: [
    { name: "Makoto", role: "Host" },
    { name: "Takaki", role: "Attendee" },
    { name: "Toa", role: "Attendee" }
  ]
};

console.log("Event:", event1);