# TimeVoyage

Mini Project For Angular
----------------------------------------------
TimeVoyage: A Journey Through History

Description:
TimeVoyage is a user-friendly  Angular web application that presents a chronological timeline of historical events in a simple and intuitive interface.

- Timeline Interface: The main feature of TimeVoyage is a horizontal timeline that users can scroll through to explore different time periods.
 
- Event Cards: Each historical event is represented by a clickable card on the timeline. The card displays basic information like the event title, date, and a thumbnail image.
 
- Event Details: Clicking on an event card opens a pop-up window (Modal) with more detailed information about the event, including a description, images, videos, and related resources.
 
- Interactive Features: Users can interact with the timeline by zooming in/out to focus on specific time periods and by clicking on events to learn more about them.
 
- Search and Filter: TimeVoyage includes search and filter functionality, allowing users to quickly find specific events or narrow down their exploration by category or keyword.

Example:
The interface features a clean design with the timeline prominently displayed across the top of the screen. Event cards are neatly arranged along the timeline, and users can easily click on them to access additional information. The search bar and filter options are located above the timeline for easy access, making it simple for users to navigate and explore history at their own pace.

Note: You are free to use your creativity
Steps to consider:
Setup: Create a new Angular project using Angular CLI.

Component Creation: Generate components for the timeline interface, event cards, and event details popup.

Data Integration: Incorporate the provided dataset of historical events into the application using Angular services.

UI Design: Design a clean and user-friendly interface for the timeline, event cards, and event details popup. Utilize CSS for styling UI components.

Interactive Features: Implement features such as zooming on the timeline, clicking event cards for details, and searching/filtering events.

Example dataset :
[
  {
    "id": 1,
    "title": "The Renaissance Begins",
    "date": "14th Century",
    "description": "The Renaissance period marks the revival of art, culture, and learning in Europe, leading to significant advancements in science, art, and philosophy.",
    "image": "renaissance.jpg",
    "video": "https://www.youtube.com/watch?v=1"
  },
  {
    "id": 2,
    "title": "Declaration of Independence",
    "date": "1776",
    "description": "The Declaration of Independence was adopted by the Continental Congress, declaring the 13 American colonies independent from British rule and laying the foundation for the United States.",
    "image": "declaration_of_independence.jpg",
    "video": "https://www.youtube.com/watch?v=1"
  },
  {
    "id": 3,
    "title": "Fall of the Berlin Wall",
    "date": "1989",
    "description": "The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.",
    "image": "berlin_wall.jpg",
    "video": "https://www.youtube.com/watch?v=1"
  }
]

You can add more events to the dataset to make it look more meaningful.

