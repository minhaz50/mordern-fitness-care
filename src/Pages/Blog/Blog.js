import React from "react";
import blog2 from "../../images/blog2.jpg";
import blog1 from "../../images/blog1.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog__details">
        <div>
          <img className="blog2-img" src={blog1} alt="" />
        </div>
        <div className="blog-text">
          <h1>Nerd Fitness</h1>
          <p>
            Nerd Fitness started in 2009 as a way to help people live a healthy
            life in any way they can. Founder, Steve Kamb aims to help the
            average Joe. They offer programs to help normal people lose weight,
            build muscle, and get strong. The blog part of the Nerd Fitness
            website really focuses on beginners. You only need to read one
            article to understand who their target audience is. It’s all about
            getting started, helping beginners, and taking the first step to a
            healthier lifestyle. The Nerd Fitness site expanded with its Nerd
            Fitness Coaching app so that users can read the blog wherever they
            are.{" "}
          </p>
        </div>
      </div>
      <div className="blog__details">
        <div>
          <img className="blog2-img" src={blog2} alt="" />
        </div>
        <div className="blog-text">
          <h1>Breaking Muscle</h1>
          <p>
            Mindith Rahmat is the founder of Breaking Muscle, which is now
            acquired by BarBend. David Tao is the current co-founder and CEO of
            BarBend.{" "}
          </p>
          <p>
            If you’re looking for training principles, various body workouts,
            and nutrition advice to become stronger, Breaking Muscle is a great
            fitness blog to follow. Here are some of the things you’ll discover
            on this blog; Fitness, news, Training, workouts, Nutrition Health,
            and advice.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
