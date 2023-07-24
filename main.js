//Top App Bar
function changeAppBarColorOnScroll() {
    const appBar = document.getElementById('appBar');

    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        appBar.classList.add('scrolled');
      } else {
        appBar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll);
  }

  changeAppBarColorOnScroll();

//Modal Navigation Drawer
function show() {
    document.getElementById('sidebar').classList.toggle('active');
}