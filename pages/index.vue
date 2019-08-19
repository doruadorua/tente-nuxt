<template>
  <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
  
  <div class="site-wrap"  id="home-section" style="padding-top: 1rem;">

    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
   
    <div class="container d-none d-lg-block">
      <div class="row">
        <div class="col-12 text-center mb-1 mt-5">
            <img src="/images/tente_logo_white_bg.png" class="mb-0" alt="tente-logo" :style="window.width < 992 ? 'width:60px' : 'width:100px'">
          </div>
      </div>
    </div>
    <header class="site-navbar py-md-4 js-sticky-header site-navbar-target" role="banner">

      <div class="container">
        <div class="row align-items-center">
          <!-- 
          <div class="col-6 col-md-6 col-xl-2  d-block d-lg-none">
            <h1 class="mb-0 site-logo"><a href="index.html" class="text-black h2 mb-0">Landerz<span class="text-primary">.</span> </a></h1>
          </div> -->

          <div class="col-12 col-md-12 main-menu">
            <nav class="site-navigation position-relative text-right" role="navigation">

              <ul class="site-menu main-menu js-clone-nav m-auto d-none d-lg-block" style="padding-left: 0px; text-align: center;">
                <li><nuxt-link tag="a" to="#home-section" class="nav-link" exact-active-class="active">Ana Sayfa</nuxt-link></li>
                <li><nuxt-link tag="a" to="#features-section" class="nav-link" exact-active-class="active">Hizmetlerimiz</nuxt-link></li>
                <li><nuxt-link tag="a" to="#about-section" class="nav-link" exact-active-class="active">Hakkımızda</nuxt-link></li>
                <li><nuxt-link tag="a" to="#contact-section" class="nav-link" exact-active-class="active">İletişim</nuxt-link></li>
              </ul>
            </nav>
          </div>

          <div class="col-12 col-md-12 d-inline-block d-lg-none ml-md-0" style="padding: 1rem; padding-left: 2rem; padding-right: 2rem;"><img src="/images/tente_logo_white_bg.png" class="mb-0" alt="tente-logo" :style="window.width < 992 ? 'width:60px' : 'width:100px'"><a href="#" class="site-menu-toggle js-menu-toggle text-black float-right"><span class="icon-menu h3"></span></a></div>

        </div>
      </div>
      
    </header>
    

    <div class="site-blocks-cover" :style="window.width < 992 ? 'padding-top: 120px; height: auto;' : ''">
      <div class="container">
        <div class="row align-items-center justify-content-center">

          <div class="col-md-12" style="position: relative;" data-aos="fade-up">
            
            <img src="images/hero3.png" alt="Image" class="img-fluid img-absolute">

            <div class="row mb-4">
              <div class="col-lg-5 mr-auto">
                <h1 style="font-size:3rem">İşinizi Dijital Ortama Taşıyın!</h1>
                <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                <div>
                  <nuxt-link to="#features-section" tag="a" class="btn btn-primary mr-2 mb-2">Size Hizmetlerimizden Bahsedelim</nuxt-link>
                </div>
              </div>
              
              
            </div>

          </div>
        </div>
      </div>
    </div>  


    <div class="site-section bg-light" id="features-section" :style="window.width < 992 ? 'padding-top: 160px' : ''">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="section-title mb-3">Hizmetlerimiz</h2>
          </div>
        </div>
        <div class="row align-items-stretch">
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
            
            <div class="unit-4 d-block">
              <div class="unit-4-icon mb-3">
                <span class="icon-wrap"><span class="text-primary icon-autorenew"></span></span>
              </div>
              <div>
                <h3>Logo, Antet & Kartvizit</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>

          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">

            <div class="unit-4 d-block">
              <div class="unit-4-icon mb-3">
                <span class="icon-wrap"><span class="text-primary icon-store_mall_directory"></span></span>
              </div>
              <div>
                <h3>İnternet Sitesi</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" >
            <div class="unit-4 d-block">
              <div class="unit-4-icon mb-3">
                <span class="icon-wrap"><span class="text-primary icon-shopping_basket"></span></span>
              </div>
              <div>
                <h3>Sosyal Medya Danışmanlığı</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>


          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
            <div class="unit-4 d-block">
              <div class="unit-4-icon mb-3">
                <span class="icon-wrap"><span class="text-primary icon-settings_backup_restore"></span></span>
              </div>
              <div>
                <h3>Dijital Pazarlama</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
            <div class="unit-4 d-block">
              <div class="unit-4-icon mb-3">
                <span class="icon-wrap"><span class="text-primary icon-sentiment_satisfied"></span></span>
              </div>
              <div>
                <h3>Arama Motoru Optimizasyonu (SEO)</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>

            
          </div>
          
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
            <div class="unit-4 d-block">
              <div class="unit-4-icon mb-3">
                <span class="icon-wrap"><span class="text-primary icon-power"></span></span>
              </div>
              <div>
                <h3>Strateji Danışmanlığı</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    <div class="feature-big">
      <div class="container">
        <div class="row mb-5 site-section border-bottom">
          <div class="col-lg-7">
            <img src="images/do_ui_kit_download_cta_floating_devices-2x.png" alt="Image" class="img-fluid">
          </div>
          <div class="col-lg-5 pl-lg-5 ml-auto mt-md-5">
            <h2 class="text-black">Falan Filan Inter Milan</h2>
            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.</p>
            <ul class="ul-check mb-5 list-unstyled success">
              <li>Adipisci excepturi aliquam</li>
              <li>Deleniti labore reiciendis</li>
            </ul>
            <div class="author-box">
              <div class="d-flex mb-4">
                <div class="mr-3">
                  <img src="images/person_1.jpg" alt="Image" class="img-fluid rounded-circle">
                </div>
                <div class="mr-auto text-black">
                  <strong class="font-weight-bold mb-0">Amalia G.</strong> <br>
                  Co-Founder, XYZ Inc.
                </div>
              </div>
              <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
            </div>
          </div>
        </div>

        <div class="mt-5 row mb-5 site-section ">
          <div class="col-lg-7 order-1 order-lg-2">
            <img src="images/do_ui_kit_hero_floating_devices-2x.png" alt="Image" class="img-fluid">
          </div>
          <div class="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1">
            <h2 class="text-black">Ali Veli Kırkdokuz Elli</h2>
            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam</p>
            <ul class="ul-check mb-5 list-unstyled success">
              <li>Laborum enim quasi at modi</li>
              <li>Ad at tempore</li>
            </ul>
            

            <div class="author-box">
              <div class="d-flex mb-4">
                <div class="mr-3">
                  <img src="images/person_4.jpg" alt="Image" class="img-fluid rounded-circle">
                </div>
                <div class="mr-auto text-black">
                  <strong class="font-weight-bold mb-0">Darren K.</strong> <br>
                  Co-Founder, XYZ Inc.
                </div>
              </div>
              <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="site-section bg-light" id="about-section" :style="window.width < 992 ? 'padding-top: 160px' : ''">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="section-title mb-3">Hakkımızda</h2>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-lg-6">
            <img src="images/about_1.jpg" alt="Image" class="img-fluid mb-5 mb-lg-0 rounded shadow">
          </div>
          <div class="col-lg-5 ml-auto pl-lg-5">
            <h2 class="text-black mb-4">Create interactive prototypes</h2>
            <p class="mb-4">Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
            <p><a href="#" class="btn btn-primary">Learn More</a></p>
          </div>
        </div>
        
      </div>
    </div>

    <div class="site-section" id="contact-section" :style="window.width < 992 ? 'padding-top: 160px' : ''">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="section-title mb-3">İletşim</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-7 mb-5">

            

            <form action="#" class="p-5 bg-white">
              
              <h2 class="h4 text-black mb-5">Bize yazın, sizi arayalım...</h2> 

              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="text-black" for="fname">İsim</label>
                  <input type="text" id="fname" class="form-control rounded-0">
                </div>
              </div>

              <div class="row form-group">
                
                <div class="col-md-12">
                  <label class="text-black" for="email">Email</label> 
                  <input type="email" id="email" class="form-control rounded-0">
                </div>
              </div>
              
              <div class="row form-group">
                
                <div class="col-md-12">
                  <label class="text-black" for="tel">Telefon</label> 
                  <input type="tel" id="tel" class="form-control rounded-0">
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="message">Konu</label> 
                  <textarea name="message" id="message" cols="30" rows="7" class="form-control rounded-0" placeholder="Lütfen mesajınızı buraya yazın..."></textarea>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <input type="submit" value="Gönder" class="btn btn-primary mr-2 mb-2">
                </div>
              </div>

  
            </form>
          </div>
        
        </div>
        
      </div>
    </div>

    <div class="footer py-5 border-top text-center">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <p class="mb-0">
              <a href="#" class="p-3"><span class="icon-facebook"></span></a>
              <a href="#" class="p-3"><span class="icon-twitter"></span></a>
              <a href="#" class="p-3"><span class="icon-instagram"></span></a>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="mb-0">
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
          </div>
        </div>
      </div>
    </div>

  
     
    
  </div> <!-- .site-wrap -->
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      window: {
        width: 0,
        height: 0},
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
        this.handleResize()

    // From testing, without a brief timeout, it won't work.
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), 1)
    }
  },
  methods: {
    scrollTo: function (hashtag) {
      setTimeout(() => { location.href = hashtag }, 1)
    },
    handleResize() {
        this.window.width = window.innerWidth
        this.window.height = window.innerHeight
    }
  },
  destroyed(){
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>

</style>