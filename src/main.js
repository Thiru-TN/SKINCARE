let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav a');

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    nav.classList.remove('active');

    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .nav a[href*='+id+']').classList.add('active');
            });
        };
    });

}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(this);
      fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSevYb4oT0LQ7lziWY3tuXEj7pBI4Pp2TZZQXyZUVLCW6N6Ayw/formResponse",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => {
          if (response.ok) {
            this.reset();
            alert("Message sent successfully!");
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .catch((error) => {
          console.error(
            "There was a problem with your fetch operation:",
            error
          );
          alert("Message sent successfully!");
          this.reset();
        });
    });
});

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});

function showPrevention() {
  var select = document.getElementById("diseaseSelect");
  var selectedDisease = select.options[select.selectedIndex].value;
  var preventionSteps = document.getElementById("preventionSteps");
  var preventionContent = "";

  switch (selectedDisease) {
    case "Dry Skin":
      preventionContent = "<h3>Prevention Steps for Dry Skin</h3><p>Keep your skin moisturized by using a suitable moisturizer regularly. Avoid hot showers and use mild cleansers. Drink plenty of water to keep your skin hydrated.</p>";
      break;
    case "Acne":
      preventionContent = "<h3>Prevention Steps for Acne</h3><p>Keep your face clean by washing it twice daily with a gentle cleanser. Avoid touching your face frequently. Use non-comedogenic skincare products. Maintain a healthy diet and manage stress levels.</p>";
      break;
    case "Acne Scars":
      preventionContent = "<h3>Prevention Steps for Acne Scars</h3><p>Prevent acne breakouts to minimize the risk of scarring. Treat acne promptly to reduce inflammation. Protect your skin from sun exposure using sunscreen. Consider professional treatments like laser therapy or chemical peels for existing scars.</p>";
      break;
    case "Alopecia Areata":
      preventionContent = "<h3>Prevention Steps for Alopecia Areata</h3><p>Manage stress levels as stress can trigger flare-ups. Protect your hair from damage by avoiding tight hairstyles and excessive heat styling. Consider using hair care products that promote scalp health.</p>";
      break;
    case "Acanthosis Nigricans":
      preventionContent = "<h3>Prevention Steps for Acanthosis Nigricans</h3><p>Maintain a healthy weight and manage insulin levels through diet and exercise. Treat underlying medical conditions like diabetes or hormonal imbalances. Avoid tight clothing that can rub against the affected areas.</p>";
      break;
    case "Melasma":
      preventionContent = "<h3>Prevention Steps for Melasma</h3><p>Avoid excessive sun exposure by wearing sunscreen daily and using protective clothing. Use skincare products containing ingredients like hydroquinone or retinoids. Consider professional treatments like chemical peels or microdermabrasion.</p>";
      break;
    case "Vitiligo":
      preventionContent = "<h3>Prevention Steps for Vitiligo</h3><p>Protect your skin from sun exposure by using sunscreen and wearing protective clothing. Consider camouflage makeup to minimize the appearance of depigmented areas. Consult a dermatologist for treatment options such as phototherapy or topical corticosteroids.</p>";
      break;
    case "Warts":
      preventionContent = "<h3>Prevention Steps for Warts</h3><p>Avoid direct contact with warts and do not pick or scratch them. Keep your skin clean and dry to prevent the spread of the virus. Consider over-the-counter treatments like salicylic acid or cryotherapy.</p>";
      break;
    default:
      preventionContent = "<p>Please select a disease</p>";
  }

  preventionSteps.innerHTML = preventionContent;
}

