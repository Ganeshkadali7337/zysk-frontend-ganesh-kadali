import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <div className="header-part1">
            <div className="logo">
              <img
                className="logo-img"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732115913/Logomark_wsgrox.svg"
                alt="logo"
              />
              <h1 className="title">Untitled UI</h1>
            </div>
            <ul className="nav-list">
              <li>Home</li>
              <li>
                <select id="Products">
                  <option hidden disabled selected>
                    Products
                  </option>
                </select>
              </li>
              <li>
                <select id="Resources">
                  <option hidden disabled selected>
                    Resources
                  </option>
                </select>
              </li>
              <li>Pricing</li>
            </ul>
          </div>
          <img
            className="profile"
            src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732115917/Avatar_ayy0uw.svg"
            alt="profile"
          />
          <img
            className="bars"
            src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732118112/menu-01_uihln5.svg"
            alt="bars"
          />
        </div>
      </div>
      <div className="home-section">
        <div className="section1">
          <div className="feature">
            <div className="f1">
              <p>New feature</p>
            </div>
            <p className="p2">
              Check out the team dashboard{" "}
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732120148/arrow-right_t2uskt.svg"
                alt="arrow"
              />
            </p>
          </div>
          <h2 className="head1">Beautiful analytics to grow smarter</h2>
          <p className="para1">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className="btn-container">
            <button className="btn1">
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732115913/Icon_1_n9ymii.svg"
                alt="btn"
              />
              Demo
            </button>
            <button className="btn2">Sign up</button>
          </div>
          <div className="dashboard">
            <img
              className="dashboard-img"
              src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732125580/Screen_mockup_REPLACE_FILL_omfpzo.jpg"
              alt="dashboard"
            />
            <img
              className="dashboard-sm"
              src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732126180/Screen_mockup_REPLACE_FILL_1_km6iea.jpg"
              alt="dashboard-sm"
            />
          </div>
          <div className="section2">
            <p className="para2">Join 4,000+ companies already growing</p>
            <div className="social-container">
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732127493/Fictional_company_logo_xs5sfx.svg"
                alt="bolt"
              />
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732127493/Fictional_company_logo_1_ksxfsy.svg"
                alt="light"
              />
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732127492/Fictional_company_logo_2_rje0cq.svg"
                alt="feather"
              />
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732127492/Fictional_company_logo_3_h8vcep.svg"
                alt="sphere"
              />
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732127492/Fictional_company_logo_4_rdlnbt.svg"
                alt="global"
              />
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732127492/Fictional_company_logo_5_crmpga.svg"
                alt="net"
              />
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="s3-part1">
            <p className="para3">Features</p>
            <h2 className="head3">
              Analytics that feels like it’s from the future
            </h2>
            <p className="para4">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="s3-part2">
            <div className="s3-box">
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732157696/Featured_icon_yxsnb8.svg"
                alt="box"
              />
              <h2>Share team inboxes</h2>
              <p>
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
            <div className="s3-box">
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732158820/Featured_icon_1_eyrgk9.svg"
                alt="box"
              />
              <h2>Deliver instant answers</h2>
              <p>
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
            </div>
            <div className="s3-box">
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732158819/Featured_icon_2_m1zgym.svg"
                alt="box"
              />
              <h2>Manage your team with reports</h2>
              <p>
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple
                clicks.
              </p>
            </div>
            <div className="s3-box">
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732158819/Featured_icon_3_koriuo.svg"
                alt="box"
              />
              <h2>Connect with customers</h2>
              <p>
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </p>
            </div>
            <div className="s3-box">
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732158819/Featured_icon_4_phujy7.svg"
                alt="box"
              />
              <h2>Connect the tools you already use</h2>
              <p>
                Explore 100+ integrations that make your day-to-day workflow
                more efficient and familiar. Plus, our extensive developer
                tools.
              </p>
            </div>
            <div className="s3-box">
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732158819/Featured_icon_5_pqj87x.svg"
                alt="box"
              />
              <h2>Our people make the difference</h2>
              <p>
                We’re an extension of your customer service team, and all of our
                resources are free. Chat to our friendly team 24/7 when you need
                help.
              </p>
            </div>
          </div>
        </div>
        <div className="section4">
          <img
            src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732160597/Fictional_company_logo_6_yfbtoo.svg"
            alt="img"
          />
          <h2>
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it.
          </h2>
          <div>
            <img
              src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732160601/Avatar_1_aogazc.svg"
              alt="img"
            />
            <p className="para5">Candice Wu</p>
            <p className="para6">Product Manager, Sisyphus</p>
          </div>
        </div>
        <div className="section5">
          <div className="s5-part1">
            <div className="f7">
              <p>Features</p>
            </div>
            <h2>Cutting-edge features for advanced analytics</h2>
            <p>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
            <img
              src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732164030/Content_mnkljq.svg"
              alt="features"
            />
            <img
              id="img-sm"
              src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732162510/iPhone_12_Pro_mockup_ypmglb.png"
              alt="features"
            />
          </div>
          <div className="s5-part2">
            <div className="s3-box">
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732157696/Featured_icon_yxsnb8.svg"
                alt="box"
              />
              <h2>Share team inboxes</h2>
              <p>
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
              <p id="para8">
                Learn more{" "}
                <img
                  src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732120148/arrow-right_t2uskt.svg"
                  alt="arrow"
                />
              </p>
            </div>
            <div className="s3-box">
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732158820/Featured_icon_1_eyrgk9.svg"
                alt="box"
              />
              <h2>Deliver instant answers</h2>
              <p>
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
              <p id="para8">
                Learn more{" "}
                <img
                  src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732120148/arrow-right_t2uskt.svg"
                  alt="arrow"
                />
              </p>
            </div>
            <div className="s3-box">
              <img
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732158819/Featured_icon_2_m1zgym.svg"
                alt="box"
              />
              <h2>Manage your team with reports</h2>
              <p>
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple
                clicks.
              </p>
              <p id="para8">
                Learn more{" "}
                <img
                  src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732120148/arrow-right_t2uskt.svg"
                  alt="arrow"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="section6">
          <h2>Frequently asked questions</h2>
          <p>Everything you need to know about the product and billing.</p>
          <div className="details-contaier">
            <details>
              <summary>Is there a free trail available?</summary>
              <p>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </details>
            <details id="detail">
              <summary>Can I change my plan later?</summary>
              <p>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </details>
            <details id="detail">
              <summary>What is your cancellation policy?</summary>
              <p>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </details>
            <details id="detail">
              <summary>Can other info be added to an invoice?</summary>
              <p>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </details>
            <details id="detail">
              <summary>How does billing work?</summary>
              <p>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </details>
            <details id="detail">
              <summary>How do I change my account email?</summary>
              <p>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </details>
          </div>
          <div className="s6-part3">
            <img
              src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1732171599/Avatar_group_raeh5q.svg"
              alt=""
            />
            <h2>Still have questions?</h2>
            <p>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <button className="btn6">Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
