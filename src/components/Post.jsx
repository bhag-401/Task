import React from "react";
import { FaCalendarAlt, FaUser, FaComments,FaTag } from "react-icons/fa"; 
import style from "../style/Post.module.css";

const Post = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.box}>
        <div className={style.header}>
          <h2>Worth A Thousand Words</h2>
          <div className={style.meta}>
            <span className={style.date}>
              <FaCalendarAlt /><span>October 17, 2008</span> 
            </span>
            <span className={style.author}>
              <FaUser /> <span>Theme Admin</span>
            </span>
          </div>
        </div>

        <div className={style.categories}>
          <a href="#"><FaTag size={15} color="gray" />Uncategorized</a>
        </div>

        <div className={style.content}>
          <p>
            Boat.
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className={style.box}>
        <div className={style.header}>
          <h2>Elements</h2>
          <div className={style.meta}>
            <span className={style.date}>
              <FaCalendarAlt /><span>September 5, 2008</span> 
            </span>
            <span className={style.author}>
              <FaUser /> <span>Theme Admin</span>
            </span>
          </div>
        </div>

        <div className={style.categories}>
          <a href="#"><FaTag size={15} color="gray" />Uncategorized</a>
        </div>

        <div className={style.content}>
        <p>
        The purpose of this HTML is to help determine what default settings are with CSS and to make sure that all possible HTML Elements are included in this HTML so as to not miss any possible Elements when designing a site. Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 [top] Paragraph …
            <a href="#">Read More »</a>
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className={style.box}>
        <div className={style.header}>
          <h2>More Tags</h2>
          <div className={style.meta}>
            <span className={style.date}>
              <FaCalendarAlt /> <span>June 21, 2008</span>
            </span>
            <span className={style.author}>
              <FaUser /> <span>Theme Admin</span>
            </span>
          </div>
        </div>

        <div className={style.categories}>
          <a href="#"><FaTag size={15} color="gray" />Uncategorized</a>
        </div>

        <div className={style.content}>
          <p>
            More of these posts need tags.
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className={style.box}>
        <div className={style.header}>
          <h2>HTML</h2>
          <div className={style.meta}>
            <span className={style.date}>
              <FaCalendarAlt /> <span>June 21, 2008</span>
            </span>
            <span className={style.author}>
              <FaUser /> <span>Theme Admin</span>
            </span>
            <span className={style.comments}>
              <FaComments /> <span>1 Comments</span>
            </span>
          </div>
        </div>

        <div className={style.categories}>
          <a href="#"><FaTag size={15} color="gray" />Uncategorized</a>
        </div>

        <div className={style.content}>
          <p>
          What HTML tags would you like to see? Let’s start with an unordered list: One Two Three Four And then move on to a more interesting ordered list: one, two buckle my shoe three, four knock at the door Five, six pick up sticks Seven, eight, lay them straight Nine, ten, a big fat hen …
            <a href="#">Read More »</a>
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className={style.box}>
        <div className={style.header}>
          <h2>Links</h2>
          <div className={style.meta}>
            <span className={style.date}>
              <FaCalendarAlt /> <span>June 20, 2008</span>
            </span>
            <span className={style.author}>
              <FaUser /> <span>Theme Admin</span>
            </span>
          </div>
        </div>

        <div className={style.categories}>
          <a href="#"><FaTag size={15} color="gray" />Uncategorized</a>
        </div>

        <div className={style.content}>
          <p>
          A few well known WordPress links: WordPress.org, the Codex and the download page.
          </p>
        </div>
      </div>
      <hr className="divider" />
      
      <div className={style.box}>
        <div className={style.header}>
          <h2>Category Hierarchy</h2>
          <div className={style.meta}>
            <span className={style.date} style={{textAlign:'center'}}>
              <FaCalendarAlt /> <span>June 20, 2008</span>
            </span>
            <span className={style.author}>
              <FaUser /> <span>Theme Admin</span>
            </span>
          </div>
        </div>

        <div className={style.categories}>
          <a href="#"> <FaTag size={15} color="gray" /> First Child Category</a>, 
          <a href="#">One Grandchild Category</a>, 
          <a href="#">Parent</a>, 
          <a href="#">Second Child Category</a>
        </div>

        <div className={style.content} style={{height:170}}>
          <p>
            This post has 4 categories, part of a hierarchy that is 3 deep. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
            commodo ante. Suspendisse potenti. Nunc pellentesque quam vel pede.
            Ut a lorem non urna molestie euismod. Fusce consequat tortor eu urna.
            Pellentesque aliquam, pede eget tincidunt feugiat, nunc massa
            hendrerit magna, non ...
            <a href="#">Read More »</a>
          </p>
        </div>
      </div>

     
      <hr className="divider" />

      
      <div className={style.box}>
        <div className={style.header}>
          <h2>Hello world!</h2>
          <div className={style.meta}>
            <span className={style.date}>
              <FaCalendarAlt /><span>June 4, 2008</span> 
            </span>
            <span className={style.author}>
              <FaUser /> <span>Theme Admin</span>
            </span>
            <span className={style.comments}>
              <FaComments /> <span>2 Comments</span>
            </span>
          </div>
        </div>

        <div className={style.categories}>
          <a href="#"><FaTag size={15} color="gray" />Uncategorized</a>
        </div>

        <div className={style.content}>
          <p>
            Welcome to WordPress. This is your first post. Edit or delete it, then
            start blogging!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
