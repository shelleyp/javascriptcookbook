<?php

//If no search string is passed, then we can't search
if(empty($_REQUEST['nicething'])) {
  echo "No State Sent";
} else {
  //Remove whitespace from beginning & end of passed search.
  $search = trim($_REQUEST['nicething']);
  switch($search) {
    case "cuddles" :
       $result = "puppies,kittens,gerbils";
       break;
    case "sweets" :
       $result = "licorice,cake,cookies,custard";
       break;
    case "bird" :
       $result = "robin,mockingbird,finch,dove";
       break;
    case "flower" :
       $result = "roses,lilys,daffodils,pansies"; 
       break;
    default :
       $result = "No Nice Things  Found";
       break;
    }

    echo $result;
}
?>
