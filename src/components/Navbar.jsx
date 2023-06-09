import React, { useState } from 'react';


{/*import { Link } from 'react-scroll';*/ }

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div class="padding-top--2xlarge margin-bottom--2xlarge--mobile padding-top--large--mobile">
      <div class="header">
        <div class="wrapper--inner margin--center text--center--mobile padding--zero--mobile">
          <div class="display--flex justify--space-between align-items--center flex--wrap">
            <div class="header__left width--100--mobile display--inline-block position--relative link--white">
              <img src="img/annt_logonew.svg"
                class="header__logo" /></div>
            <div class="header__right margin-top--large--mobile font--small width--100--mobile position--relative">
              <ul class="list--reset">
                <li
                  class="margin-left--large display--inline-block margin-left--zero--tablet margin-horizontal--medium--tablet">
                  <a href="#about"
                    class="link--underline--none font--medium link--white--hover color--text-green1-base">About</a>
                </li>
                <li
                  class="margin-left--large display--inline-block margin-left--zero--tablet margin-horizontal--medium--tablet">
                  <a href="#motive"
                    class="link--underline--none font--medium link--white--hover color--text-green1-base">Motive</a>
                </li>
                <li
                  class="margin-left--large display--inline-block margin-left--zero--tablet margin-horizontal--medium--tablet">
                  <a href="#vision"
                    class="link--underline--none font--medium link--white--hover color--text-green1-base">Vision</a>
                </li>
                <li
                  class="margin-left--large display--inline-block margin-left--zero--tablet margin-horizontal--medium--tablet">
                  <a href="#tokenomics"
                    class="link--underline--none font--medium link--white--hover color--text-green1-base">Tokenomics</a>
                </li>
                <li
                  class="margin-left--large display--inline-block margin-left--zero--tablet margin-horizontal--medium--tablet">
                  <a href="#community"
                    class="link--underline--none font--medium link--white--hover color--text-green1-base">Community</a>
                </li>
                <li
                  class="margin-left--large display--inline-block margin-left--zero--tablet margin-horizontal--medium--tablet">
                  <a href="/anntapps"
                    target="_blank"
                    class="link--underline--none font--medium link--white--hover color--text-green1-base"><strong>anntAPPS</strong></a>
                </li>
                <div
                  class="padding-horizontal--large--mobile display--inline-block display--block--mobile margin-left--large margin-left--large--tablet margin-top--zero--tablet margin-top--large--mobile">
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0xf951ead486490bD64193fD2ea475697a9Fd5d582"
                    target="_blank"
                    class="button--small display--inline-block button--white--outline link--underline--none button--pill margin-right--large"><span
                      class="font--small font-weight--bold">Buy Now</span></a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
