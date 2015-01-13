   // set session cookie
   function setCookie(cookie,value) {
      var cookieVal=cookie + "=" + 
         encodeURIComponent(value) + ";path=/";
      document.cookie=cookieVal;
      console.log(cookieVal);
   }

   // each cookie separated by semicolon;
   function getCookie(key) {
      key = key.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
      var cookie = document.cookie; 
      var regex = new RegExp('(?:^|;)\\s?' + key + '=(.*?)(?:;|$)','i');
      var match = cookie.match(regex);

      return match && decodeURIComponent(match[1]);
   }

   // set cookie date to the past to erase
   function eraseCookie (key) {
      var cookie = key + 
                    '=;path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
      document.cookie = cookie;
      console.log(cookie);
   }

