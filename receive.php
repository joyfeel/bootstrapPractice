<html>
   <head>
      <title>Receive</title>
   </head>
   <body>
<?php
/*
         class myStruct {
            public $a;
            public $b;
         }

         $a = $_POST["a"];
         $b = $_POST["b"];
         echo "<h1>Value a: " . $a ."</h1>";
         echo "<h1>Value b: " . $b ."</h1>";

         $obj = new myStruct();
         $obj->a = $a;
         $obj->b = $b;

 */
	 //shell_exec("shutdown -h now");/
         system ("/var/www/html/emmc/statusFiles/eMMCTester");
      ?>

   </body>
</html>
