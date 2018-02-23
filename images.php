<?php
header( "Content-type: application/json" );
$url = "http://18.195.225.57/articles.php";
$json = file_get_contents($url);
$json_data = json_decode($json, true);


class Images {
   public $id;
   public $url;
   public $type;

}

$images_url = array();
foreach($json_data as $item) {
    $images = $item['images'];
    foreach ($images as $image){

            $type = $image['type'];
            $url = $image['url'];
            $id = $image['id'];

            $obj = new Images();
            $obj->id = $id;
            $obj->url = $url;
            $obj->type = $type;
           $images_url[]= $obj;
    }
}
echo    json_encode($images_url, JSON_PRETTY_PRINT);

?>
