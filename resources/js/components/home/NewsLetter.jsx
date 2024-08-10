import React from "react";
import { Link } from "react-router-dom";

function NewsLetter() {
    return (
        <section class="section-space pt-0">
            <div class="container">
                <div
                    class="newsletter-content-wrap"
                    data-bg-img="assets/images/photos/bg1.webp"
                >
                    <div class="newsletter-content">
                        <div class="section-title mb-0">
                            <h2 class="title">Join with us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam.
                            </p>
                        </div>
                    </div>
                    <div class="newsletter-form">
                        <form>
                            <input
                                type="email"
                                class="form-control"
                                placeholder="enter your email"
                            />
                            <button class="btn-submit" type="submit">
                                <i class="fa fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsLetter;
