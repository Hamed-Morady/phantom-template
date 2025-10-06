import React from 'react';
import {Link} from 'react-router-dom'
import "../templet.css";

const information = [
  {
    id: 1,
    name: "MAGNA",
    content:
      "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
    image: "/assest/images/pic01.jpg",
    boxClass: "rgb(228, 134, 153)",
  },
  {
    id: 2,
    name: "LOREM",
    content:
      "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
    image: "/assest/images/pic02.jpg",
    boxClass: "rgb(124, 194, 236)",
  },
  {
    id: 3,
    name: "FEUGIAT",
    content:
      "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
    image: "/assest/images/pic03.jpg",
    boxClass: "rgb(110, 180, 168)",
  },
  {
    id: 4,
    name: "TEMPUS",
    content:
      "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
    image: "/assest/images/pic04.jpg",
    boxClass: "rgb(195, 105, 154)",
  },
  {
    id: 5,
    name: "ALIQUAM",
    content:
      "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
    image: "/assest/images/pic05.jpg",
    boxClass: "rgb(178, 146, 205)",
  },
  {
    id: 6,
    name: "VEROEROS",
    content:
      " Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
    image: "/assest/images/pic06.jpg",
    boxClass: "rgb(133, 149, 213)",
  },
  {
    id: 7,
    name: "IPSUM",
    content:
      "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
    image: "/assest/images/pic07.jpg",
    boxClass: "rgb(125, 189, 223)",
  },
  {
    id: 8,
    name: "DOLOR",
    content:
      "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
    image: "/assest/images/pic08.jpg",
    boxClass: "rgb(121, 188, 178)",
  },
  {
    id: 9,
    name: "NULLAM",
    content:
      "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
    image: "/assest/images/pic09.jpg",
    boxClass: "rgb(210, 117, 142)",
  },
  {
    id: 10,
    name: "ULTRICIES",
    content:
      "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
    image: "/assest/images/pic10.jpg",
    boxClass: "rgb(162, 130, 184)",
  },
  {
    id: 11,
    name: "DICTUM",
    content:
      "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
    image: "/assest/images/pic11.jpg",
    boxClass: "rgb(120, 134, 196)",
  },
  {
    id: 12,
    name: "PRETIUM",
    content:
      "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
    image: "/assest/images/pic12.jpg",
    boxClass: "rgb(197, 110, 162)",
  },
];
export default function Tils() {
  const boxInfo = information;
  return boxInfo.map((box) => (
    <article key={box.id} className="style-1">
      <Link
        to="/generic.html"
        className={`zoom-link ${box.boxClass}`}
        style={{ background: `url(${box.image})`,"--bgColor":box.boxClass }}
        state={{name:box.name,image:box.image}}
      >
        <h2>{box.name}</h2>
        <p className="content">{box.content}</p>
      </Link>
    </article>
  ));
}

