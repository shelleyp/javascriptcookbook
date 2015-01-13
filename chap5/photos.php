<?php

//If no search string is passed, then we can't search
if(empty($_REQUEST['photo'])) {
  echo "No State Sent";
} else {
  //Remove whitespace from beginning & end of passed search.
  $search = trim($_REQUEST['photo']);
  switch($search) {
    case "dragonfly2" :
       $result = "This photo was taken at the Missouri Botanical Gardens, and features common dragonfly on pink and yellow flower";
       break;
    case "dragonfly4" :
       $result = "This photo as taken at the Missouri Botanical Gardens, and features a small orange dragon fly on a water lily";
       break;
    case "dragonfly6" :
       $result = "Another dragonfly on a purple water lily, again taken at the Missouri Botanical Gardens";
       break;
    case "dragonfly8" :
       $result = "Common dragonfly on pink water lily at the Missouri Botanical Gardens"; 
       break;
    default :
       $result = "No Nice Things  Found";
       break;
    }

    echo $search . "#" . $result;
}
?>
