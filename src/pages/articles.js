import React from 'react';

const Articles = () => {
    return ( 
    <div class="container text-jindigo text-play">
        <div class="col-12 pt-5 pb-4 text-jindigo text-center">
            <div class="col-12 text-jindigo text-center">
                <div class="container input-group">
                    <input type="text" class="form-control" />
                    <button class="btn btn-jindigo">Search   <i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>
        <br />
        {/* <div class="row">
            <div class="col-lg-6 col-12">
                <div class="text-center container bg-diamond">
                    <h2 class="p-3">Download Pamphlets and Infographics</h2>
                    <p class="p-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fugiat mollitia neque, cum excepturi maxime delectus amet? In corporis cumque vero quis, aliquam iusto adipisci rerum totam quae pariatur. Aut?
                    </p>
                </div>
            </div>
            <div class="col-lg-6 col-12">
                <div class="text-center bg-carmine text-bubbles container">
                    <h2 class="p-3">Project Highlights</h2>
                    <p class="p-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fugiat mollitia neque, cum excepturi maxime delectus amet? In corporis cumque vero quis, aliquam iusto adipisci rerum totam quae pariatur. Aut?
                    </p>
                </div>
            </div>        
        </div> */} 
        <br />
       
            <div class="bg-jindigo text-bubbles text-center container pt-3">
                <h2>Artemis Organization Blog</h2>
            <p class="p-3">
                Read more about healthy living and birth control.
            </p>
            </div>
            <div class=" col-12 pt-5 text-center bg-diamond" id="articles">
            <div class="container p-3">
                <div class="row">
                    {/* start of an article preview */} 
                    <div class="col-md-4 col-12 my-2 art-img pt-2">
                        <img class="img-fluid img-thumbnail " src="Images/articles page.png" alt="img-asset" />
                    </div>
                    <div class="col-md-8 col-12 text-start pb-2">
                        <h3 class="m-2">5 Interesting Facts about Birth Control</h3>
                        <p>Using birth control and contraceptives isn’t only about limiting unprotected sex and preventing pregnancy. Birth control is a critical tool for reproductive health care delivery and disease control. At the same time, there are so many forms of birth control to choose from, which makes it hard to pick the best option for you! But lucky for you, it doesn’t have to be this way!</p>
                        <a href="articles.htmll">see more...</a>
                    </div>
                    {/* end of an article preview */} 
                    {/* start of an article preview */} 
                    <div class="col-md-4 col-12 my-2 art-img pt-2">
                        <img class="img-fluid img-thumbnail " src="Images/articles page3.png" alt="img-asset" />
                    </div>
                    <div class="col-md-8 col-12 text-start pb-2">
                        <h3 class="m-2">Birth Control for Teens: A Guide for Parents</h3>
                        <p>
                            There’s no perfect age to start having conversations about birth control with your kids. If you haven’t had a discussion about sex and reproduction by their middle school years, that is generally a good time to introduce the topic.

As those conversations progress or as your child ages, you can begin to include more specific and relevant information about effective birth control methods and how to prevent sexually transmitted infections.
                        </p>
                        <a href="articles.htmll">see more...</a>
                    </div>
                    {/* end of an article preview */} 
                    {/* start of an article preview */} 
                    <div class="col-md-4 col-12 my-2 art-img pt-2">
                        <img class="img-fluid img-thumbnail " src="Images/articles page2.png" alt="img-asset" />
                    </div>
                    <div class="col-md-8 col-12 text-start pb-2">
                        <h3 class="m-2">What Age should you Stop taking Birth Controls?</h3>
                        <p>
                            Hormonal birth control pills are among the safest and most effective ways to prevent pregnancy and reduce period symptoms. For people under 40, birth control pills are generally safe with few lasting side effects. However, as you get older it’s important that you be aware of the increased risk of adverse effects from the pill and know your options for pregnancy prevention.  
                        </p>
                        <a href="articles.htmll">see more...</a>
                    </div>
                    {/* end of an article preview */} 
                    {/* start of an article preview */} 
                    <div class="col-md-4 col-12 my-2 art-img pt-2">
                        <img class="img-fluid img-thumbnail " src="Images/articles page4.png" alt="img-asset" />
                    </div>
                    <div class="col-md-8 col-12 text-start pb-2">
                        <h3 class="m-2">Everything you need to know about Acne & Birth Control</h3>
                        <p>
                            Acne can be hard to treat, but birth control pills can help! Acne is a skin condition, where hair follicles on your face and other parts of your body are blocked because of oil and/or dead skin cells. Acne affects 51% of women in their 20s, and more have experienced acne at some previous point in their lives. Women typically suffer from hormonal acne that is caused by periods or hormonal changes. Birth control pills can help alleviate acne prominence, severity, redness, and other hormonal side effects! 
                        </p>
                        <a href="articles.htmll">see more...</a>
                    </div>
                    {/* end of an article preview */} 
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Articles;