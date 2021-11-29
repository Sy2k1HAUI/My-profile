  var header  = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight;
        //đóng mở header mobile menu
        mobileMenu.onclick= function(){
           var isClosed= header.clientHeight === headerHeight;
           if(isClosed){
               header.style.height= 'auto';
           }else{
               header.style.height=null;
           }
        }
        //đóng mở menu khi click vào item menu
        var menuItems = document.querySelectorAll('#nav-menu-list li a');
        for(var i=0 ;i<menuItems.length;i++){
            var menuItem = menuItems[i];
            menuItem.onclick = function(){
                header.style.height=null;
            }
        }
