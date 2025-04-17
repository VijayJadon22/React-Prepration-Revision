import React from "react";

const Greet = (props) => {
  console.log("Hi i re-rendered");
  return (
    <div>
      <h2>Hi {props.name}, i re-rendered</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis vitae laboriosam cupiditate accusantium hic dolore quae, praesentium vero nulla consectetur id, ipsam eos. Distinctio, consequuntur? Magnam eos facer
      Quaerat, assumenda dignissimos. Asperiores porro quaerat fugiat animi enim saepe cumque a dignissimos reprehenderit assumenda quas modi, minima eos nisi laboriosam nobis soluta, voluptas optio error repellendus! Nemo, omnis reprehenderit.</p>
    </div>
  );
};

export default React.memo(Greet);
