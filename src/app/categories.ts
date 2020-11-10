import { Category } from "./category";
import { Quote } from "./quote"

export let firstCategories: Category[] = [
  {title: "Sports", "image": "sports.jpg", quotes: [
    {text: "If you quit once it becomes a habit. Never quit!", author: "Micheal Jordan", username: "jason12"},
    {text: "I do it because I love it and that's all I care about", author: "Lionel Messi", username: "ilovefootball"},
    {text: "Dreams are not what you see in your sleep, dreams are things which do not let you sleep.", author: "Cristiano Ronaldo", username: "hardwork28"},
  ]},
  {title: "TV Shows", "image": "tv.jpg", quotes: [
    {text: "We want to be sedated. Because it's painful not to pretend, because we're cowards", author: "Elliot Alderson", username: "hackerboy123"},
    {text: "The only time a man can be brave is when he's afraid", author: "Ned Stark", username: "mythrone"},
    {text: "I'm not in the meth business. I'm in the empire business", author: "Walter White", username: "businessman"},
    {text: "Mozart, Beethoven and Chopin never died. They simply became music", author: "Ford", username: "harshworld27"},
    {text: "You come at the King, you best not miss", author: "Omar Little", username: "wires@28"},
  ]},
  {title: "Science", "image": "science.jpg", quotes: [
    {text: "Science is simple the word we use to describe a method of organizing our curiosity", author: "Tom Minchin", username: "iseeworld"},
    {text: "Science is a way of thinking much more than it is a body of knowledge", author: "Carl Sagan", username: "third@eye"},
    {text: "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology", author: "Carl Sagan", username: "hardwork28"},
  ]},
  {title: "Other", "image": "question.png", quotes: [
    {text: "Who are you to judge the life I live? I am not perfect and i don't have to be! Before you start pointing fingers, make sure your hands are clean.", author: "Bob Marley", username: "iseeworld"},
  ]},
];
