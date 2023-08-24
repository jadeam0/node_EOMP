<template>
    <header id="navbar1" class="navbar">
      <div class="wrapper">
        <div class="header">
          <img class="logo" src="https://i.postimg.cc/k5wLD4DK/1692782513021-thumbnail-removebg-preview.png">
          <div class="text">
            <ul class="nav-list">
                <li class="display">
                    <router-link to="/">
                        <img src="https://i.postimg.cc/x8bXZ5CJ/output-onlinegiftools.gif">
                        Home
                    </router-link>
                </li>
                <li class="display">
                    <router-link to="/About">
                        <img src="https://i.postimg.cc/vT0dWgfP/output-onlinegiftools-1.gif">    
                        About
                    </router-link>
                </li>
                <li class="display">
                    <router-link to="/Contact">
                        <img src="https://i.postimg.cc/x8vBRkHr/output-onlinegiftools-2.gif">
                        Feedback
                    </router-link>
                </li>
                <li class="display">
                    <router-link to="/Admin">
                        <img src="https://i.postimg.cc/FHGtJJbw/output-onlinegiftools-3.gif"> 
                        Admin
                    </router-link>
                </li>
                <li class="display">
                    <router-link to="/Products">
                        <img src="https://i.postimg.cc/SKWMrkR0/output-onlinegiftools-4.gif"> 
                        Products
                    </router-link>
                </li>
                <li class="display">
                    <router-link to="#">
                        <img src="https://i.postimg.cc/zfQ5QRc4/icons8-modal-popup-66.png"> 
                        Modal pop
                    </router-link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
</template>
  
<script>
export default {
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {
        const navbar = document.querySelector(".navbar");
        const navbarRect = navbar.getBoundingClientRect();
        const isIntersecting = navbarRect.top <= 0;
        navbar.classList.toggle("sticking", isIntersecting);
        },
    },
};

</script>
  
<style scoped>
li img {
    width: 35px;
    aspect-ratio: 3/2;
    object-fit: contain;
}
.display {
    padding-top: 20px;
}
.navbar {
    --_bg: #DFF8EB;
    --_logo-width: 90px;
    --_nav-link-color: black;
    
    padding: 1rem;
    background-color: var(--_bg);
    position: sticky;
    top:0;
    /* padding-top: 20px; */
    opacity: 0.97;
    z-index: 9999;
}

.navbar * {
    transition: 500ms;
}
.navbar.sticking {
    --_bg: #cdcdcd;
    --_logo-width:90px;
    --_nav-link-color: white;
}
.navbar ul li a {
    color: var(--_nav-link-color);
}

.header {
    display: flex;
    justify-content: space-between;
}

.navbar a:hover,
.navbar a:focus {
    opacity: 0.8;
}
.logo {
    width: var(--_logo-width);
}

.nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap:clamp(0.5rem, 5vw, 2rem);
}

.wrapper {
    width: min(65rem , 100% - 2rem);
    margin-inline: auto;
}



@media (min-width: 315px) and (max-width: 350px) {
    .navbar {
        width: 745px !important;
    }
}
@media (min-width: 350px) and (max-width: 400px) {
    .navbar {
        width: 747px !important;
    }
}
@media (min-width: 400px) and (max-width: 450px) {
    .navbar {
        width: 750px !important;
    }
}
@media (min-width: 450px) and (max-width: 531px) {
    .navbar {
        width: 777px;
    }
}
@media (min-width: 531px) and (max-width: 605px) {
    .navbar {
        width: 815px;
    }
}
@media (min-width: 700px) and (max-width: 919px)  {
    .navbar {
        width: 950px;
    }
}
</style>