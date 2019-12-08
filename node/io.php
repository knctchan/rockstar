<?php 

$file = fopen('list.txt','r');

echo "Process one\n";
while($line = fgets($file)){
	// $line = fgets($file);
	echo $line;
}
echo "Process two\n\n";
fclose($file);

?>