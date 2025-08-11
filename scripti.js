let year = new Date

Promise.all([
  fetch(`http://localhost:5000/api/contact/Contact?userId=${userId}`).then(res => res.json()),
  fetch(`http://localhost:5000/api/site/get-footer?userId=${userId}`).then(res => res.json()),
  fetch(`http://localhost:5000/api/product/allService?userId=${userId}`).then(res => res.json())
]).then(([contactResult, footerResult,allServices]) => {


  const { address, addressLink, mobileNumber, email } = contactResult

  const { footerLogo, headerLogo, description, facebookLink, InstagramLink, linkedinLink, youtubeLink, xLink } = footerResult

  console.log("All Services:", allServices.data);

  allServices.data.forEach((service, index) => {
    console.log("inside services ",service);
    
      const elements = document.querySelectorAll(`.service${index + 1}-name`);
      elements.forEach(el => {
        el.textContent = service.name;
      });
    });

  const footerLogoUrl =  `http://localhost:5000/${footerLogo.replace(/\\/g, "/")}`;
  const headerLogoUrl =  `http://localhost:5000/${headerLogo.replace(/\\/g, "/")}`;

  document.querySelector(".footer").innerHTML = `
    <section class="footer-section-1">
      <div class="footer-logo-div">
        <img src=${footerLogoUrl} alt="" class="logo">
        <p id="footer-logo-description">${description}</p>
      </div>
      <div class="footer-address-div">
        <div class="footer-address-svg-div">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="footer-address-svg">
            <rect width="24" height="24" fill="none" />
            <path fill="currentColor"
              d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0" />
          </svg>
        </div>
        <div class="footer-address-desription-div">
          <h4 class="footer-address-card">Address</h4>
          <p><a href=${addressLink} class="address">${address}</a></p>
        </div>
      </div>
      <div class="fooer-social-links-heading-div">
        <h4 class="footor-social-links-heading">Follow Our On:</h4>
        <div class="fooer-social-links-div">
        ${facebookLink.trim() !== ""
      ? `<a href="${facebookLink}" class="facebook">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="footer-social-link-svg">
        <rect width="24" height="24" fill="none" />
        <path fill="currentColor"
          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
      </svg>
    </a>`
      : ""
    }
  ${InstagramLink.trim() !== "" ?
      `<a href=${InstagramLink} class="instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              class="footer-social-link-svg">
              <rect width="24" height="24" fill="none" />
              <g fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" />
              </g>
            </svg>
          </a>` :
      ""
    }
          ${linkedinLink.trim() !== "" ?
      `<a href=${linkedinLink} class="linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              class="footer-social-link-svg">
              <rect width="24" height="24" fill="none" />
              <g fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606"
                  clip-rule="evenodd" />
                <path d="M7.2 8.809H4V19.5h3.2z" />
              </g>
            </svg>
          </a>` :
      ""
    }

        ${youtubeLink.trim() !== "" ?
      `<a href=${youtubeLink} class="youtube">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              class="footer-social-link-svg">
              <rect width="24" height="24" fill="none" />
              <g fill="none">
                <path
                  d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path fill="currentColor"
                  d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m0 2c-.825 0-1.674.022-2.5.056l-.978.047l-.939.055l-.882.06l-.808.063a1.8 1.8 0 0 0-1.666 1.623C4.11 9.113 4 10.618 4 12s.11 2.887.227 4.096c.085.872.777 1.55 1.666 1.623l.808.062l.882.06l.939.056l.978.047c.826.034 1.675.056 2.5.056s1.674-.022 2.5-.056l.978-.047l.939-.055l.882-.06l.808-.063a1.8 1.8 0 0 0 1.666-1.623C19.89 14.887 20 13.382 20 12s-.11-2.887-.227-4.096a1.8 1.8 0 0 0-1.666-1.623l-.808-.062l-.882-.06l-.939-.056l-.978-.047A61 61 0 0 0 12 6m-2 3.575a.6.6 0 0 1 .819-.559l.081.04l4.2 2.424a.6.6 0 0 1 .085.98l-.085.06l-4.2 2.425a.6.6 0 0 1-.894-.43l-.006-.09z" />
              </g>
            </svg>
          </a>`
      :
      ""}

         ${xLink.trim !== "" ?
      `<a href={xLink} class="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
              class="footer-social-link-svg">
              <rect width="16" height="16" fill="none" />
              <path fill="currentColor"
                d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
            </svg>
          </a>`
      : ""
    }
        </div>
      </div>
    </section>
    <section class="footer-section-2">
      <div class="footer-contact-details-div">

        <div class="footer-contact-details-crad-div">
          <div class="footer-contact-details-card-svg-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              class="footer-contact-details-svg">
              <rect width="24" height="24" fill="none" />
              <path fill="currentColor"
                d="m21 15.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z" />
            </svg>
          </div>
          <div class="footer-contact-details-description-div">
            <h4 class="footer-contact-details-heading" id="footer-contact-details-mobile-number-heading">Urgent Support?
            </h4>
            <p><a href="tel:${mobileNumber}" class="mobile-number">+91 ${mobileNumber}</a></p>
          </div>
        </div>

        <div class="footer-contact-details-crad-div">
          <div class="footer-contact-details-card-svg-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              class="footer-contact-details-svg">
              <rect width="24" height="24" fill="none" />
              <path fill="currentColor"
                d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" />
            </svg>
          </div>
          <div class="footer-contact-details-description-div">
            <h4 class="footer-contact-details-heading" id="footer-contact-details-mobile-number-heading">E-mail Us</h4>
            <p><a href="${email}" class="email">${email}</a></p>
          </div>
        </div>
      </div>
      <div class="footer-navigation-div">
        <div class="footer-main-navigation-div">
          <h4 class="footer-navigation-heading">Quick Links</h4>
          <ul class="footer-navigation-lists-ul">
            <li class="footer-navigation-list"><a href="index.html">Home</a></li>
            <li class="footer-navigation-list"><a href="aboutus.html">About Us</a></li>
            <li class="footer-navigation-list"><a href="services.html">Services</a></li>
            <li class="footer-navigation-list"><a href="contsctus.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-services-navigation-div">
          <h4 class="footer-navigation-heading">Our Services</h4>
          <ul class="footer-navigation-lists-ul">
            <li class="footer-navigation-list"><a href="services1.html" class="service1-name">${allServices.data[0].name || "Computer / Laptop salse and services"}</a></li>
            <li class="footer-navigation-list"><a href="services2.html" class="service2-name">${allServices.data[1].name || "CCTV Camera Sales and Services"}</a></li>
            <li class="footer-navigation-list"><a href="services3.html" class="service3-name">${allServices.data[2].name || "VDP, EM Lock & Biometric Sales and Services"}</a></li>
            <li class="footer-navigation-list"><a href="services4.html" class="service4-name">${allServices.data[3].name || "Refurbished Laptop/Desktop Sales"}</a></li>
            <li class="footer-navigation-list"><a href="services5.html" class="service5-name">${allServices.data[4].name || "Custom and Gaming PC Builds"}</a></li>
            <li class="footer-navigation-list"><a href="services6.html" class="service6-name">${allServices.data[5].name || "Computer & Laptop Accessories"}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-subcriber-div">
        <h4 class="footer-subscriber-heading">Subscribe Our Newsletter</h4>
        <form action="" class="footer-subscriber-form">
          <input type="email" name="email" placeholder="Your Email" class="footer-subscriber-email-input">
          <input type="submit" value="Subscribe" class="footer-subcriber-subscribe-button">
        </form>
        <p class="footer-subscriber-description">*Stay updated with the latest HR trends expert tips insights your
          inbox.</p>
      </div>
    </section>
    <section class="footer-section-3">
      <h5 class="footer-copyright-heading">Copyright © <span id="year">${year.getFullYear()}</span> All Rights Reserved by Akaay Enterprise. Developed by <a href="https://shriiitrackingsolution.in/">Shriii Tracking Solution</a>.</h5>
    </section>
`

  document.querySelector(".header").innerHTML = `
    <div id="overlay" class="overlay hidden"></div>
    <div class="header-container">
      <!-- Logo -->
      <div class="header-logo-div">
        <a href="index.html">
          <img src=${headerLogoUrl} alt="Logo" class="logo" />
        </a>
      </div>

      <!-- Hamburger (Mobile only) -->
      <div class="hamburger" id="hamburger">&#9776;</div>

      <!-- Navigation -->
      <nav class="nav">
        <ul class="header-navigation-div" id="navMenu">
          <li class="close-btn" id="closeNavBtn">&times;</li>
          <li class="header-list"><a href="index.html">Home</a></li>
          <li class="header-list"><a href="aboutus.html">About Us</a></li>
          <li class="header-list">
            <a href="services.html">Services</a>
            <ul class="header-list-dropdown-ul">
              <li class="header-list-dropdown-list">
                <a href="services1.html" class="service1-name">${allServices.data[0].name || "Computer / Laptop salse and services"}</a>
                <a href="services2.html" class="service2-name">${allServices.data[1].name || "CCTV Camera Sales and Services"}</a>
                <a href="services3.html" class="service3-name">${allServices.data[2].name || "VDP, EM Lock & Biometric Sales and Services"}</a>
                <a href="services4.html" class="service4-name">${allServices.data[3].name || "Refurbished Laptop/Desktop Sales"}</a>
                <a href="services5.html" class="service5-name">${allServices.data[4].name || "Custom and Gaming PC Builds"}</a>
                <a href="services6.html" class="service6-name">${allServices.data[5].name || "Computer & Laptop Accessories"}</a>
              </li>
            </ul>
          </li>
          <li class="header-list"><a href="contsctus.html">Contact Us</a></li>
        </ul>
      </nav>

      <!-- CTA Button -->
      <div class="header-button-div">
        <a href="contsctus.html#c-form" class="header-button-link">Request A Free Quote</a>
      </div>
    </div>
`
    fetch(`http://localhost:5000/api/product/allService?userId=${userId}`)
  .then((response) => response.json())
  .then((result) =>{
    // console.log("result.data :",result.data[0]);

    result.data.map((el,index)=>{
      console.log("el :",el);
      document.querySelectorAll(`service${index}-name`).forEach(elName => elName.textContent = el.name)
    })
  }
)
})

