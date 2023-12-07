import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import todo from "../img/todo.jpg"
import vc from "../img/vc.jpg"
import bank from "../img/bank.jpg"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Vaishnavi",
    lastName: "Ingole",
    initials: "VI", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer 👩‍💻",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Driven software developer seeking exciting job opportunities"
        },
        {
            emoji: "📧",
            text: "vaishnavingole2510@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/vaishnaviingole",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/vaishnavi-ingole/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },{
            link: "mailto:vaishnavingole2510@gmail.com",
            icon: 'fa fa-envelope',
            label: 'email',
            onClick: () => {
              window.location.href = "mailto:vaishnavingole2510@gmail.com";
            }
          },{
            link: "https://leetcode.com/vaishnavi_ingole/",
            icon: 'fa fa-code',
            label: 'leetcode'
        }
      
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: " I am a 2022 CSE graduate and PG-DAC diploma holder.  Seeking exciting opportunities, I am on a code-tastic journey, passionate about crafting innovative solutions.  My academic exploits serve as the source code that fuels my enthusiasm for software development.  Eager to contribute my skills, I thrive on challenges – debugging problems and creating solutions. Let's embark on a coding adventure and create something extraordinary together! 🚀✨",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "E-banking",
           //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/vaishnaviingole/E-Banking-CDAC-Project", // this should be a link to the **repository** of the project, where the code is hosted.
            image: bank,
            imageSize: { width: 160, height: 150 }
        },
        {
            title: "To-Do App",
           
            source: "https://github.com/vaishnaviingole/ToDoList-Project",
            image: todo,
            imageSize: { width: 160, height: 150 }
        },
        {
            title: "Virual ClassRoom",
            
            source: "https://github.com/vaishnaviingole/VirtualClassroom-Git",
            image: vc,
            imageSize: { width:160 , height: 150 }
        }
        
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}