var menu = document.getElementById('menu');
menu.addEventListener('click', function() {
    var nav = document.getElementById('rnav');
        if (nav.style.height == 'auto') {
            nav.style.height = '0';
        }else{
            nav.style.height = 'auto';
        }

        // they are same
        // manv.style.height = 'auto';
        // manv.setAttribute('style', 'height: auto !important');
        // manv.style.setProperty( 'height',' auto', 'important');
}, false);

function setTab(name,cursel){
  let tlinks = document.getElementById("act-cn-tabs").getElementsByTagName('li')
  for(var i=1; i<=tlinks.length; i++){
      var menu = document.getElementById(name+i);
      var menudiv = document.getElementById("con_"+name+"_"+i);
      if(i==cursel){
          menu.className="off";
          menudiv.style.display="block";
      }
      else{
          menu.className="";
          menudiv.style.display="none";
      }
  }
}