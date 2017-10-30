<?php
$name = $_REQUEST['username'];
$id = $_REQUEST['id'];
$start = $_REQUEST['start'];
$end = $_REQUEST['end'];
$last =  strtotime($end) - strtotime($start)-3600;
$last = date("H:i:s",$last);
  //对数据进行过滤
  $name    =    htmlspecialchars($name);
  $id    =    htmlspecialchars($id);
   if(!get_magic_quotes_gpc()){
      $name    =    addslashes($name);
      $id    =    addslashes($id);
   }
  if(!preg_match("/^[\x{4e00}-\x{9fa5}]+$/u",$name)){
    echo "姓名不正确";
    exit;
  }
  if(!preg_match("/^[0-9]{8}$/",$id)){
     echo "学号输入不正确";
     exit;
  }
    /*  $db    =    new mysqli('localhost','stu_sign','stu_sign','student_sign');
      if(mysqli_connect_errno()){
         echo "连接数据库失败,请稍后再试!";
         exit;
      }*/
      $dbms='mysql';
      $host='localhost';
      $user='root';
      $pass='zcyzf';
      $dbname='test';
      //$dsn="$dmbs:host=$host;dbname=$dbname";
      $dsn="$dbms:host=$host;dbname=$dbname";
      try{
        $dbh=new PDO($dsn,$user,$pass);
      }catch(PDOException $e){
          die ("Error!: " . $e->getMessage() . "<br/>");
      }
      $db = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT => true));
      $db->query("SET NAMES utf8");   //设置发送的字符集

      $query    =    "insert into `test`.`sign` (`student_name`, `stduent_id`, `start`, `end`, `last`) VALUES ('".$name."', '".$id."', '".$start."', '".$end."', '".$last."')";

      $results    =    $db->query($query);

      if($results){
         echo '签到成功!';
      }else{
          echo '签到失败';
      }
     // $db->close();
  

?>