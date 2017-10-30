<?php
//$data = json_encode($_POST);
//$data = explode(',',$data);
//$name = $_POST['username'];
//$id = $_POST['id'];
//$name    =    explode(":",$data[0])[1];
//$name =  json_decode($name,"UTF-8");
$name = $_REQUEST['username'];
$id = $_REQUEST['id'];
$start = $_REQUEST['start'];
$end = $_REQUEST['end'];
$last =  strtotime($end) - strtotime($start)-3600;
$last = date("H:i:s",$last);
//$name = iconv("UTF-8","utf8", explode(":",$data[0])[1]);
 //$id    =    explode(":",$data[1])[1];
 //$start    =    explode(":",$data[2])[1];
 //$end    =    explode(":",$data[3])[1];
   // $data = json_decode($_POST)[1];
  /* $name   =    $data[0];
 //  $id    =    explode(":",$data[1])[1];
//   $start    =    json_encode($data[2]);
 //  $end    =    $data[3];*/
 // $last   =    $data[3] -$data[2];
   if(!get_magic_quotes_gpc()){
      $name    =    addslashes($name);
   }

      $db    =    new mysqli('localhost','root','zcyzf','sign');
      if(mysqli_connect_errno()){
         echo "连接数据库失败,请稍后再试!";
         exit;
      }
      $db->set_charset("utf8");


      $query    =    "insert into `student_sign`.`sign` (`student_name`, `stduent_id`, `start`, `end`, `last`) VALUES ('".$name."', '".$id."', '".$start."', '".$end."', '".$last."')";

      $results    =    $db->query($query);

      if($results){
         echo '签到成功!';
      }else{
          echo '签到失败';
      }
      $db->close();

?>