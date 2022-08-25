<?php
$title = 'Random-Food-Selection';
require_once './header.php';
require_once './bd.php';
?>
<div class="data">
    <div id="dishList" data-attr="<?php foreach ($dishes_arr as $v) echo $v . ','; ?>"></div>
    <div id="dishCatIdList" data-attr="<?php foreach ($dishes_cat_id_arr as $v) echo $v . ','; ?>"></div>
    <div id="dishCatList" data-attr="<?php foreach ($dishes_categories_arr as $v) echo $v . ','; ?>"></div>
</div>
<main>

    <div class="container main">

        <div id="sound_player" style="display:none;">
            <audio id="player" src="./baraban_1995_hq.mp3"></audio>
            <audio id="player_winner" src="./winner-of-tour.mp3"></audio>
            <button id='button_play' onclick="document.getElementById('player').play()"></button>
            <button id='button_stop' onclick="document.getElementById('player').pause()"></button>
            <button id='button_play_winner' onclick="document.getElementById('player_winner').play()"></button>
        </div>

        <div class="rand-group">
            <h2>Первое</h2>
            <span class="arrow"></span>
            <div class="circle" id="first">
                <span class="center"></span>
            </div>
            <div class="rand-btn">
                <button id="first-btn" onclick="twister(first, firstBtn);">ПУСК</button>
            </div>
        </div>
        <div class="rand-group">
            <h2>Второе</h2>
            <span class="arrow"></span>
            <div class="circle" id="second">
                <span class="center"></span>
            </div>
            <div class="rand-btn">
                <button id="second-btn" onclick="twister(second, secondBtn);">ПУСК</button>
            </div>
        </div>
        <div class="rand-group">
            <h2>Десерт</h2>
            <span class="arrow"></span>
            <div class="circle" id="dessert">
                <span class="center"></span>
            </div>
            <div class="rand-btn">
                <button id="dessert-btn" onclick="twister(dessert, dessertBtn);">ПУСК</button>
            </div>
        </div>
    </div>
</main>

<div id="div" align="center">
    <canvas id="canvas" style="border: 0px">
    </canvas>
</div>


<?php
require_once './footer.php';
?>
<!-- <script>
    // function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = './priroda.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
    // }
    // soundClick();
</script> -->


<script>

</script>