import React from "react";

const Anntapps = () => {
  return (
    <div name="anntapps"
      className="padding-bottom--large margin-bottom--zero--tablet padding-bottom--zero--tablet"
      style={{ marginTop: 64 }}>
      <div
        id="vision"
        className="width--100--desktop-wide width--100--desktop-wide text--center position--relative z-index--10 margin-bottom--3xlarge margin-bottom--zero--tablet"
        style={{ marginBottom: 24 }}
      >
        <h2
          className="font-weight--bold font--3xlarge color--text-white-bright position--relative z-index--10"
          style={{ marginTop: 32, paddingTop: 64 }}
        >
          Vision
        </h2>
      </div>

      <div
        className="text--center--tablet text--center--mobile line-height--16 color--about-bg padding--5xlarge box--rounded--2xlarge margin-bottom--1xlarge--tablet margin--center text--center position--relative z-index--10"
        style={{
          paddingTop: 32,
          paddingBottom: 32,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <div
          className=" color--text-white-base display--inline-block--tablet display--inline-block--mobile display--inline-block margin-top--large position--relative z-index--10 text--left"
          style={{ marginTop: 0 }}
        >
          <p>
            At ANNT, our vision is to create a new, decentralised
            economy in Nigeria that is inclusive, transparent,
            <br />
            and empowering for all citizens, especially those that have
            been at the receiving end of the ineptitudes
            <br />
            of successive government, since independence.
            <br />
            We envision a future where citizens of Nigeria have access
            to a decentralised and transparent economy
            <br />
            through the use of blockchain technology. ANNT will be at
            the forefront of this change, providing a<br />
            secure, fast, and low-cost means of storing and transferring
            value.
            <br />
            We also see ANNT as a catalyst for economic growth and
            development in Nigeria, by facilitating the
            <br />
            creation of new businesses and industries built on
            blockchain technology. We believe that the adoption
            <br />
            of ANNT and blockchain technology will lead to the creation
            of new job opportunities and the growth of
            <br />
            the Nigerian economy.
            <br />
            In addition, we see ANNT as a powerful tool for promoting
            social and economic justice in Nigeria. By
            <br />
            providing citizens with a new means of storing and
            transferring value, we believe that ANNT can help to
            <br />
            reduce poverty and inequality and promote greater financial
            inclusion for all.
            <br />
            Overall, our vision for ANNT is to empower the citizens of
            Nigeria to take control of their financial
            <br />
            future and build a more prosperous life for themselves and a
            future for their unborn generation.
            <br />
            Ultimately, to end the vicious circle of poverty, one family
            at a time. We are committed to making this
            <br />
            vision a reality, and we look forward to working with you to
            achieve it.
          </p>
        </div>
      </div>
      <div className="margin-top--1xlarge padding-top--4xlarge padding-top--zero--tablet color--white">
        <div className="wrapper--inner margin--center margin-top--small--mobile">
          <div className="width--80--desktop-wide width--80--desktop width-100--tablet margin--center">
            <h2 className="font-weight--bold font--1xlarge color--text-white text--center margin-bottom--1xlarge">
              Connect with ANNT
            </h2>
            <ul className="list--reset list--inline margin--center text--center font--2xlarge margin-bottom--4xlarge">
              <li className="margin-right--large">
                <a
                  href="https://twitter.com/Annt2363"
                  target="_blank"
                  className="color--text-comu-base"
                >
                  {" "}
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li className="margin-right--large">
                <a
                  href="https://medium.com/@anntoken23"
                  target="_blank"
                  className="color--text-comu-base"
                >
                  {" "}
                  <ion-icon name="logo-medium"></ion-icon>
                </a>
              </li>
              <li className="margin-right--large">
                <a
                  href="https://www.instagram.com/anntoken23/"
                  target="_blank"
                  className="color--text-comu-base"
                >
                  {" "}
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li className="margin-right--large">
                <a
                  href="https://www.facebook.com/profile.php?id=100089909078977"
                  target="_blank"
                  className="color--text-comu-base"
                >
                  {" "}
                  <ion-icon name="logo-facebook"> </ion-icon>
                </a>
              </li>
              <li className="margin-right--zero">
                <a
                  href="mailto:info@annt23.com"
                  target="_blank"
                  className="color--text-comu-base"
                >
                  {" "}
                  <ion-icon name="mail-sharp"> </ion-icon>
                </a>
              </li>
            </ul>
            <div className="margin--center text--center">
              &copy; Copyright 2022{" "}
              <strong>
                <span>ANNT</span>
              </strong>
              . All rights reserved
            </div>
            <div className="margin--center text--center margin-vertical--4xlarge">
              {" "}
              <a
                href="https://www.team.finance/view-coin/0xf951ead486490bD64193fD2ea475697a9Fd5d582?name=A%20New%20Nigeria%20Token&symbol=ANNT"
                target="_blank"
              >
                <img src="img/LiquidityBadgeWhite.svg" />
              </a>{" "}
            </div>
            <div className="margin--center text--center margin-vertical--4xlarge">

              <img src="img/annt_logonew.svg" width="120px" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anntapps;
