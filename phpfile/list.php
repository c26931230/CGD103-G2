<?php
// //跨域(正式開發不能這樣)
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");

require_once("../connectBooks.php");

<<<<<<< HEAD
$sql = "select * from `product`";
=======
$sql = "select * from `product` where product_state=1 && product_name is not null";
>>>>>>> b236b4971c985d95551e463ae00636739844b942
$book = $pdo->query($sql);
$books = $book->fetchAll();
$data = [];
foreach ($books as $i => $page) {
    $data[] = $page;
}
echo json_encode($data);
?>