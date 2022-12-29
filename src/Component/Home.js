import React from 'react'
import vg from "../Asset/2.webp";
import { AiFillGoogleCircle, AiFillFacebook, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

function Home() {
    return (
        <>
            <div className='home' id='home'>
                <main>

                    <h1>HyperTech</h1>
                    <p>One-stop solution for all technology problems </p>
                </main>
            </div>

            <div className='home2'>
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                    Our company is a full-service IT firm that provides a wide range of technology-related services to clients in various industries.
                    We have a team of highly skilled professionals who are experts in areas such as network design and installation, software development, cybersecurity, data analytics, and more.
                    We work closely with our clients to understand their specific needs and objectives, and then design and implement solutions that meet those needs in an efficient and cost-effective manner.
                    We pride ourselves on delivering high-quality services that help our clients improve their operations and achieve their goals.
                    </p>
                </div>
            </div>

            <div className='home3' id='about'>
                <div>

                    <h1>Who we are?</h1>
                    <p>   We are a team of dedicated professionals with a passion for technology and a commitment to helping our clients succeed.
                        In addition to our technical expertise, we are also committed to providing excellent customer service.
                        We strive to build long-term relationships with our clients, and we are always available to provide support and assistance whenever it is needed.
                        Thank you for considering our company for your IT needs. We look forward to the opportunity to work with you and help your business succeed.

                    </p>
                </div>
            </div>

            <div className='home4' id="brands">
                <div>
                    <h1>brands</h1>

                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillFacebook />
                            <p>Facebook</p>
                        </div>

                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home