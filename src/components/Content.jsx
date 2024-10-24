import React from 'react'
import style from '../style/Content.module.css'
const items = [
    { category: "First Child Category", title: "Category Hierarchy", date: "june 20, 2008" },
    { category: "Uncategorized", title: "Elements", date: "September 5, 2008" },
    { category: "Uncategorized", title: "Worth A Thousand Words", date: "October 17, 2008" },
    { category: "Uncategorized", title: "HTML", date: "June 21, 2008" },
    { category: "Uncategorized", title: "Hello world!", date: "June 4, 2008" },
    { category: "Uncategorized", title: "Links", date: "June 20, 2008" },
    

  ];
const Content = () => {
  return (
    <div className={style.container}>
      {items.map((item, index) => (
        <div className={style.box} key={index}>
          <p className={style.category}>{item.category}</p>
          <h2 className={style.title}>{item.title}</h2>
          <span className={style.line}></span>
          <p className={style.date}>{item.date}</p>
          
        </div>
      ))}
    </div>
  )
}

export default Content