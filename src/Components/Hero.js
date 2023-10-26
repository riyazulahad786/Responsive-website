import React from "react";

function Hero() {
  return (
    <div className="hero vh-100 d-flex align-items-center" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 text-white">
          <h1 className="display-4 text-white">
            Building Home page for Tourism around the world
          </h1>
          <p className="text-white mt-1">
            ChatGPT is a language model developed by OpenAI, based on the
            GPT-3.5 architecture. It is designed for natural language
            understanding and generation, making it capable of having human-like
            conversations. ChatGPT can answer questions, provide explanations,
            generate text, and engage in interactive dialogues.
          </p>
          <div className="d-flex mt-2">
            <button className="btn btn-primary mx-3">Get started</button>
            <button className="btn btn-outline premium">Premium</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Hero;
