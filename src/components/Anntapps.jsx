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

      >
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
