<?php 
    include_once('conn.php');
    if (!isset($_SESSION)) {
           session_start();
           ob_start();
       }   
?> 
<div class="shopping__cart">
    <a href="cart-info.php" class="shopping__cart-icon shopping__cart-icon--hover">
        <i class="fal fa-shopping-cart" ></i>
        <span class="number__cart"><?php if($_SESSION != NULL){echo count($_SESSION['cart-info']['Book']);}else{echo '0';} ?></span>
    </a>
    <div class="header__notify header__notify--cart">
        <div class="header__notify-item">
            <!-- <img src="./images/notify-2.png" alt="" class="header__notify-image">
            <p class="header__notify-text">Chưa có sản phẩm</p> -->
            <div class="header__notify-wrap">
                <div class="header__notify-title">Sản phẩm đã thêm</div>
                <?php
                    if($_SESSION != NULL){
                        foreach ($_SESSION['cart-info']['Book'] as $key => $value) {
                            $idBook = $_SESSION['cart-info']['Book'][$key];
                            $qr = "SELECT * FROM Book WHERE BookID = ?";
                            $stmt = $pdo->prepare($qr);
                            $stmt->execute([$idBook]);
                            while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                ?>
                <div class="header__notify-inner">
                    <div class="header__notify-image-product">
                        <img src="./images/img/<?php echo $row['Picture'] ?>" alt="">
                    </div>
                    <div class="header__notify-content">
                        <div class="header__notify-content-name"><?php echo $row['Name'] ?></div>
                        <div class="header__notify-content-price"><?php echo number_format($row['Price']) ?>đ
                            <span class="header__notify-content-multipy">x</span>
                            <span class="header__notify-content-quantity"><?php echo $_SESSION['cart-info']['sl'][$key] ?></span>
                        </div>
                    </div>
                    <form action="cart-info.php?idBook=<?php echo $row['BookID'] ?>" method="POST">
                    <button name="del-ses" class="btn__del-cart header__notify-content-btn">Xóa</button>
                    </form>
                </div>
                <?php  
                            }
                        }
                    }
                    else{
                        echo 'Giỏ hàng trống!';
                    }
                ?>
            </div>
            <a  href="cart-info.php" class="header__notify-wrap-btn">Xem giỏ hàng</a>
        </div>
    </div>
</div>
<?php  
    ob_flush();
?>