function sideNav(){
    var btn = document.querySelector('.icon');
    var btnst = true;
    btn.onclick = function() {
        if(btnst == true) {
          document.getElementById('sidebar').classList.add('sidebarshow');
          btnst = false;
        }else if(btnst == false) {
          document.getElementById('sidebar').classList.remove('sidebarshow');
          btnst = true;
        }
      }
}