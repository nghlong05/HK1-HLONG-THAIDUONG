document.addEventListener("DOMContentLoaded", () => {

    /* CLICK ĐỔI ẢNH */
    const imgList = [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/59/1f/2d/caption.jpg?w=1100&h=1100&s=1",
      "https://i.vietgiaitri.com/2019/10/22/hay-bo-qua-nhung-quan-niem-va-thuong-thuc-sushi-af00c1.jpg",
      "https://maruten.vn/wp-content/uploads/2024/11/465378807_122126053040431230_4440942756372771153_n-1080x675.jpg"
    ];
  
    let index = 0;
    const img = document.getElementById("img-change");
  
    img.addEventListener("click", () => {
      img.style.opacity = 0;
      setTimeout(() => {
        index = (index + 1) % imgList.length;
        img.src = imgList[index];
        img.style.opacity = 1;
      }, 250);
    });
  
    /* DROPDOWN */
    const dropdown = document.querySelector(".dropdown");
    const dropdownBtn = document.querySelector(".dropdown-btn");
  
    dropdownBtn.addEventListener("click", () => {
      dropdown.classList.toggle("show");
    });
  
    /* FADE-IN SCROLL */
    const faders = document.querySelectorAll(".fade-in");
  
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        appearOnScroll.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  
  });
  