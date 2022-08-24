<?php
$connect = mysqli_connect(
    '127.0.0.1',
    'root',
    '',
    'bd-00065',
);
if (!$connect) exit;
$dishes = mysqli_query(
    $connect,
    "SELECT `dish_name` FROM `dishes`"
);
$dishes_cat_id = mysqli_query(
    $connect,
    "SELECT `dish_cat` FROM `dishes`"
);
$dishes_categories = mysqli_query(
    $connect,
    "SELECT `cat_name` FROM `dishes_categories`"
);
$dishes_arr = [];
$dishes_cat_id_arr = [];
$dishes_categories_arr = [];

function fillList($list_arr, $query, $key)
{
    while ($dish = mysqli_fetch_assoc($query)) {
        array_push($list_arr, $dish[$key]);
    }
    return $list_arr;
}
$dishes_arr = fillList($dishes_arr, $dishes, 'dish_name');
$dishes_cat_id_arr = fillList($dishes_cat_id_arr, $dishes_cat_id, 'dish_cat');
$dishes_categories_arr = fillList($dishes_categories_arr, $dishes_categories, 'cat_name');

$dishes_arr;
$dishes_cat_id_arr;
$dishes_categories_arr;

mysqli_close($connect);
