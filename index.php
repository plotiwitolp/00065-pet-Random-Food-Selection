<?php
$title = 'Random-Food-Selection';
require_once './header.php';
require_once './bd.php';
?>
<main>

    <div class="container main">
        <div class="rand-group">
            <h2>Первое</h2>
            <span class="arrow"></span>
            <div class="circle" id="first">
                <span class="center"></span>
            </div>
            <div class="rand-btn">
                <button onclick="twister(first);">ПУСК</button>
            </div>
        </div>
        <div class="rand-group">
            <h2>Второе</h2>
            <span class="arrow"></span>
            <div class="circle" id="second">
                <span class="center"></span>
            </div>
            <div class="rand-btn">
                <button onclick="twister(second);">ПУСК</button>
            </div>
        </div>
        <div class="rand-group">
            <h2>Десерт</h2>
            <span class="arrow"></span>
            <div class="circle" id="dessert">
                <span class="center"></span>
            </div>
            <div class="rand-btn">
                <button onclick="twister(dessert);">ПУСК</button>
            </div>
        </div>
    </div>
</main>
<div class="container">
    <div class="data">
        <div id="dishList" data-attr="<?php foreach ($dishes_arr as $v) echo $v . ','; ?>"></div>
        <div id="dishCatIdList" data-attr="<?php foreach ($dishes_cat_id_arr as $v) echo $v . ','; ?>"></div>
        <div id="dishCatList" data-attr="<?php foreach ($dishes_categories_arr as $v) echo $v . ','; ?>"></div>
    </div>
</div>
<?php
require_once './footer.php';
?>
<script>

</script>