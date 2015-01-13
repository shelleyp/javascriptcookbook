
   // set data for both session and cookie
   function setData() {
      var key = document.getElementById("key").value;
      var value = document.getElementById("value").value;

      // set sessionStorage
      var current = sessionStorage.getItem(key);
      if (current) {
         current+=" " + value;
      } else {
         current=value;
      }
      sessionStorage.setItem(key,current);

      // set cookie
      current = getCookie(key);
      if (current) {
         current+=" " + value;
      } else {
         current=value;
      }
      setCookie(key,current);
   }

   function getData() {
      try {
         var key = document.getElementById("key").value;
         var session = document.getElementById("sessionstr");
         var cookie = document.getElementById("cookiestr");
 
         // reset display
         session.innerHTML = cookie.innerHTML = "";

         // sessionStorage
         var value = sessionStorage.getItem(key) || "";
         if (value) 
            session.innerHTML="<p>" + value + "</p>";

         // cookie
         value = getCookie(key) || "";
         if (value) 
            cookie.innerHTML="<p>" + value + "</p>";

      } catch(e) {
         console(e);
      }
   }

   function removeData() {
      var key = document.getElementById("key").value;

      // sessionStorage
      sessionStorage.removeItem(key);

      // cookie
      eraseCookie(key);
   }
