import React from 'react';


const About = () => {
    return ( 
    <div class="container text-jindigo text-play">
        <div class="container  text-jindigo text-jsan">

                <div class="text-center">
                    <img src="Images/aboutpage.png" alt="" class="img-fluid w-100 " />
                    <br /><br />
                </div>

                <div class="row text-center text-play bg-diamond p-3">

                    <div class="col-4">
                        <h3 class="text-carmine">1K+</h3>
                        <p>women helped</p>
                    </div>
                    <div class="col-4">
                        <h3 class="text-jindigo">5+</h3>
                        <p>years of service</p>
                    </div>
                    <div class="col-4">
                        <h3 class="text-carmine">10+</h3>
                        <p>community centers</p>
                    </div>
                </div>

                <br /><br />     


            <div class="row container-fluid" id="whoweare">
                <div class="col-12 col-lg-6 text-start">
                    <br />
                    <h2 class="text-play">WHO WE ARE</h2>
                    <p class="text-start " >
                        Artemis is a non-government, non-profit organization founded in 1995 by a group of feminists, political activists, community women leaders and health workers. It was organized to respond to women’s expressed need for sexual and reproductive rights and health services. After more than two decades, Artemis' work has multiplied, and so have the people involved in running its programs. There are more than 70 program staff, 13 Trustees, and 8,000 members of Likhaan-organized community associations. We currently operate in five Metro Manila cities and two provinces—specifically Manila, Malabon, Navotas, Pasay, Quezon City, San Jose del Monte Bulacan, and Eastern Samar.
                    </p>
                </div>
                <div class="col-12 col-lg-6">
                    <img src="Images/1.png" alt="" class="img-fluid w-100 my-5 rounded shadow-lg hover-big" />
                </div>
            </div>
       

            <div class="container-fluid bg-diamond row text-jindigo text-jsan">
                <div class="col-12 col-lg-6 ">
                    <img src="Images/2.png" alt="" class="img-fluid w-100 my-5 rounded shadow-lg hover-big" />
                </div>

                <div class="col-12 col-lg-6 text-start" id="whatwedo">
                    <br />
                    <h2 class="text-play">WHAT WE DO</h2>
                    <h5 class="text-play text-start">Community Education and Organizing</h5>
                    <p class="text-start">
                        Trained women and youth organizers discuss practical aspects of health, gender, culture, human rights, governance and other social issues with neighbors and peers. They organize women’s and youth health associations, examine problems and options, and act collectively on their common concerns—such as lack of work and decent housing; disasters; unintended pregnancies and maternal complications; domestic violence; and poor health services. The associations assist members and engage local officials and health providers to address practical and strategic needs.
                </p>
                </div>
            </div>

            <div class="container-fluid row text-jindigo text-jsan">
            
                <div class="col-12 col-lg-6 text-start">
                    <br />
                    
                    <h5 class="text-play text-start">Primary Care Clinics for Women</h5>
                    <p class="text-start">
                        Trained nurses and midwives run eight primary care
                        clinics for women in poor communities. They also
                        conduct outreach services to hard-to-reach areas.
                        Services include contraception, antenatal and post‐
                        partum care, birthing (in licensed birthing homes), VIA
                        and cryotherapy to prevent cervical cancer, treatment
                        of reproductive tract infections, teaching breast selfexam, and counselling and referral for gender-based
                        violence. Over 40,000 consultations are done annually,
                        mostly for contraception. Clinic services are free of
                        charge. Complicated and surgical cases are referred to
                        nearby public hospitals.                </p>
                </div>

                <div class="col-12 col-lg-6">
                    <img src="Images/3.png" alt="" class="img-fluid w-100 my-5 rounded shadow-lg hover-big"/>
                </div>

            </div>
         </div>
        
        


        <br />
 
        <div class="col-12 pt-5 text-center bg-diamond">
            <h2 id="FAQ">Frequently Asked Questions</h2>
            <div class="container p-5">
                <div class="accordion">
                    <div class="accordion-item bg-diamond">
                      <h2 class="accordion-header text-bubbles hover-maxy">
                        <button class="bg-jindigo text-bubbles hover-maxy accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
                            Can I get birth control that will help me skip my period? Will not having a period lower my chances of pregnancy?
                        </button>
                      </h2>
                      <div id="q1" class="accordion-collapse collapse">
                        <div class="accordion-body text-start bg-bubbles">
                            Hormonal birth control can definitely help you make #PeriodsOptional. With the implant or hormonal IUD, about 30% of women will have no monthly bleeds and the other 70% will have lighter bleeds. On the shot, 70% of women will have no bleeds by the 3rd shot. If you use the pill and skip the bleeding week (aka the placebo pills), 80% have no bleeding by 13 months.                        </div>
                      </div>
                    </div>
                    {/* End of accordion item */}
                    <div class="accordion-item bg-diamond">
                        <h2 class="accordion-header text-diamond hover-maxy">
                          <button class="bg-jindigo text-bubbles hover-maxy accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
                            If I am taking the birth control pill, patch, or ring, why do I need to use condoms?
                          </button>
                        </h2>
                        <div id="q2" class="accordion-collapse collapse">
                        <div class="accordion-body text-start bg-bubbles">
                                We recommend and encourage using condoms to protect yourself and your future children from sexually transmitted infections.                       </div>
                        </div>
                    </div>
                    {/* End of accordion item */}
                    <div class="accordion-item bg-diamond">
                        <h2 class="accordion-header text-diamond hover-maxy">
                          <button class="bg-jindigo text-bubbles hover-maxy accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
                            Can you still get pregnant on birth control?
                          </button>
                        </h2>
                        <div id="q3" class="accordion-collapse collapse">
                        <div class="accordion-body text-start bg-bubbles">
                                Yes it’s possible for several reasons: If you don’t take it every day, if you need a higher dose of hormones than you are on. and some people are just really fertile and get pregnant on the birth control pill even if they take it every day. If you think you might be pregnant, you should check a pregnancy test.  However, if you take your medicine everyday and there isn’t any unusual spotting, then it’s unlikely that you would get pregnant. The chance of pregnancy on the birth control pill, if you take it right, is like 3/1000 women. And 9/100 in “normal use” meaning with errors.                          </div>
                        </div>
                    </div>
                    {/* End of accordion item */}
                    <div class="accordion-item bg-diamond">
                        <h2 class="accordion-header text-diamond hover-maxy">
                          <button class="bg-jindigo text-bubbles hover-maxy accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q4">
                            Are birth control pills really bad for you?
                          </button>
                        </h2>
                        <div id="q4" class="accordion-collapse collapse">
                            <div class="accordion-body text-start bg-bubbles">
                                Birth Control pills are really good for those that want/need them. They are FAR more effective than abstinence or condoms for preventing unplanned pregnancies. They can be used to treat acne, anemia, bad cramps, PCOS. They can be used to turn off your periods Did you know that you can skip your periods??? As Dr. Berg pointed out – they can decrease your risk of several cancers.
                         </div>
                        </div>
                    </div>
                    {/* End of accordion item */}
                    <div class="accordion-item bg-diamond">
                        <h2 class="accordion-header text-diamond hover-maxy">
                          <button class="bg-jindigo text-bubbles hover-maxy accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q5">
                            What’s the best birth control if I don’t want to have any children?
                          </button>
                        </h2>
                        <div id="q5" class="accordion-collapse collapse">
                        <div class="accordion-body text-start bg-bubbles">
                            The best birth control if you don’t want to have children are in order from best/most to least effective:
                            <br />
                            The birth control implant (Nexplanon ®) works better than tubal ligation! Some women do GREAT on it. Some women have a lot of random breakthrough bleeding (BTB).
                            <br />
                            The IUD with hormone (Mirena ®, Liletta ®, Kyleena ®, Skyla ®) are very well tolerated because it is low dose and progesterone only. 30% of women who go on Mirena and Liletta have no periods. yay! 70% get lighter periods. Kyleena and Skyla are more likely to continue to have periods.
                            <br />
                            Then comes, Tubal ligation and then copper IUD in terms of efficacy at preventing pregnancy.
                            <br />
                            If you like the birth control ring (Nuvaring ® or its generics), now there is a 1 year ring. You could just put it in and leave it in for a year!!
                            <br />
                            Know that there are 40 different birth control pills with estrogen and progesterone. so if you didn’t like 1 then there are 39 other formulations of the birth control pill you could try.                          </div>
                        </div>
                    </div>
                    {/* End of accordion item */}
                </div>
            </div>
        </div>
        <br />
    </div>
     );
}
 
export default About;