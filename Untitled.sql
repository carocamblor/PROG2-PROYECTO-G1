-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: sweet_avenue_integrador
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_post` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `text` text,
  `date_creation` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,4,'Muy bueno!','2021-09-09'),(2,2,2,'Muy malo','2021-09-09'),(3,3,4,'Medio pelo','2021-09-09'),(4,4,4,'Epico','2021-09-09'),(5,5,2,'Muy bueno!','2021-09-09'),(6,6,4,'Muy malo','2021-09-09'),(7,7,3,'Medio pelo','2021-09-09'),(8,8,4,'Epico','2021-09-09'),(11,9,4,'Muy bueno!','2021-09-09'),(12,10,2,'Muy malo','2021-09-09'),(13,11,4,'Medio pelo','2021-09-09'),(14,12,4,'Epico','2021-09-09'),(15,13,4,'Muy bueno!','2021-09-09'),(16,14,2,'Muy malo','2021-09-09'),(17,15,4,'Medio pelo','2021-09-09'),(18,16,3,'Epico','2021-09-09'),(19,17,4,'Muy bueno!','2021-09-09'),(20,18,4,'Muy malo','2021-09-09'),(22,19,3,'Medio pelo','2021-09-09'),(23,20,4,'Epico','2021-09-09'),(24,21,3,'Muy bueno!','2021-09-09'),(25,22,4,'Muy malo','2021-09-09'),(26,23,4,'Medio pelo','2021-09-09'),(27,24,3,'Epico','2021-09-09'),(28,25,4,'Muy bueno!','2021-09-09'),(29,26,3,'Muy malo','2021-09-09'),(30,27,4,'Medio pelo','2021-09-09'),(31,28,4,'Epico','2021-09-09'),(32,29,1,'Muy bueno!','2021-09-09'),(33,30,1,'Muy malo','2021-09-09'),(34,31,1,'Medio pelo','2021-09-09'),(35,32,2,'Epico','2021-09-09'),(36,33,1,'Muy bueno!','2021-09-09'),(37,34,1,'Muy malo','2021-09-09'),(38,35,2,'Medio pelo','2021-09-09'),(39,36,1,'Epico','2021-09-09'),(40,37,1,'Muy bueno!','2021-09-09'),(41,38,1,'Muy malo','2021-09-09'),(42,39,2,'Medio pelo','2021-09-09'),(43,40,1,'Epico','2021-09-09'),(44,10,2,'a',NULL),(45,1,2,'A',NULL),(46,10,2,',m\r\n',NULL);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `picture` varchar(155) DEFAULT NULL,
  `description` text,
  `date_creation` date DEFAULT NULL,
  `ingredients` text,
  `instructions` text,
  `name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,'pastafrola.png','La pasta frolla más rica del mundo.','2020-09-08','200 g de manteca, 150 g de azúcar, 1/2 cucharadita de sal, 2 huevos, Ralladura de 1/2 limón, 1/2 cucharada de esencia de vainilla, 400 g de harina 0000, 10 g de polvo leudante, 400 g de dulce de membrillos, 400 g de dulce de membrillos, 50 cc de vino oporto','Estirar 3/4 de la masa con ayuda de un palote hasta lograr unos 5 mm de espesor. Forrar una tartera de 26 a 28 cm de diámetro. Presionar ligeramente la masa sobre los bordes de la tartera y cortar el excedente. Unir la masa sobrante a los recortes y estirar. Cortar bandas de 2 cm de largo. Pincelar con huevo batido. Enfriar. Rellenar la tarta con el dulce de membrillos. Alisar. Trazar un enrejado con las tiras de masa. Hornear a 180 °C por 40 a 45 minutos.','PASTA FROLLA'),(2,1,'selvanegra.png','El postre más rico que vas a probar!','2021-09-07','6 huevos, 6 huevos, 140 g de harina 0000, 40 g de cacao amargo, 40 g de cacao amargo, 200 g de guindas o cerezas al natural sin carozos, 100 cc de almíbar de las guindas, 100 cc de almíbar de las guindas, 100 cc de almíbar de las guindas, 360 g de crema de leche, 40 g de azúcar','Batir los huevos con el azúcar sobre baño María hasta entibiar, a unos 45 °C aproximadamente. Retirar del calor y batir hasta llegar a punto letra. Retirar del calor y batir hasta llegar a punto letra. Finalmente añadir la manteca derretida. Volcar la masa en tres moldes de 22 cm empapelados y enmantecados. Hornear a 180 °C durante 15 a 18 minutos. Para el relleno colocar el almíbar con el kirsch y el almidón en una cacerolita y cocinar hasta espesar, luego un minuto más. Incorporar rápidamente las guindas y dejar enfriar. Batir la crema fría con el azúcar hasta lograr una crema tipo chantilly.','TORTA DE LA SELVA NEGRA'),(3,1,'moka.png','El postre más rico que vas a probar!','2021-09-06','250 g de azúcar orgánico, 2 yemas, 6 huevos, 200 g de harina 0000, 100 g de nueces procesadas, 80 cc de aceite de maíz, Ralladura de la piel de 1 naranja, 100 g de nueces en mitades, 50 g de azúcar, 2 cucharadas de agua, 3 claras, 240 g de azúcar, 300 g de manteca, 1 cucharadita de esencia de vainilla, 1 cucharadita de esencia de vainilla','Colocar los huevos, las yemas y el azúcar orgánico en un bol metálico. Calentar sobre baño María y batir constantemente hasta llegar a 40 oC. Luego, fuera del calor, batir con batidora eléctrica hasta alcanzar el punto letra. Perfumar con la ralladura de naranja. Perfumar con la ralladura de naranja. Incorporarlos al batido con espátula, mezclando con movimientos suaves y envolventes. Retirar un cuarto del batido y mezclarlo con el aceite. Unirlo a la preparación. Volcar en un molde redondo de 24x6 cm, enmantecado y enharinado. Hornear a 180 °C por 35 a 40 minutos. Retirar del horno. Desmoldar, enfriar. Cortar tres capas y rellenar con la crema de café. Decorar con la misma crema y con nueces caramelizadas. Para la crema, hacer un almíbar con azúcar y agua a 120 °C. Batir las claras con un puñado extra de azúcar. Volcar el almíbar hirviendo sobre la espuma batiendo como en el merengue italiano hasta que tome temperatura ambiente. Aplastar la manteca para que se vuelva maleable. Unirla al batido en trozos pequeños. Homogeneizar. Disolver el café con la esencia de vainilla y agregar a la crema.','TORTA MOKA'),(4,1,'browniemerengada.png','Con esta receta vas a impresionar a todos tus amigos','2021-09-05','3 huevos, 250 g de azúcar, 200 g de manteca, 125 g de chocolate amargo, 130 g de harina, 20 g de cacao amargo, 125 g de nueces3 claras, 220 g de azúcar, 70 cc de agua, Gotas de jugo de limón','Fundir el chocolate con la manteca y entibiar. Batir ligeramente los huevos con el azúcar hasta que formen una espuma blanca. Tamizar la harina con el cacao y unir al batido junto con el chocolate fundido y tibio. Finalmente unir las nueces picadas groseramente. Colocar en un molde de 20x30 cm, o en uno circular de 24 cm de diámetro. El molde debe estar forrado con papel manteca o aluminio y enmantecado. Hornear a 180 °C por 20 minutos. Dejar enfriar antes de desmoldar. Con respecto al merengue, Poner en una cacerolita 200 g de azúcar y el agua, y llevar a hervor hasta lograr un almíbar a punto bolita media o con termómetro medir 120 °C. Cuando el almíbar comienza a hervir, poner las claras a batir y espumar. Agregar los 20 g de azúcar restante y mantener a velocidad media hasta que el almíbar alcance su temperatura. Volcar el almíbar sobre las claras. Agregar unas 10 gotas de jugo de limón. Continuar batiendo hasta enfriar. Cuando se detiene la batidora debemos decorar la torta de inmediato.','BROWNIE MERENGADA'),(5,1,'balcarce.png','Si preparas este postre, toda tu familia te va a amar.','2021-09-04','6 huevos, 120 g de azúcar, 120 g de harina, Esencia de vainilla 800 g de crema de leche, 150 g de azúcar, 150 g de azúcar, 250 g de ricotta, 100 g de nueces peladas, 200 g de castañas en almíbar, 200 g de merengue seco','Batir los huevos con el azúcar hasta montar a punto letra. Perfumar con la esencia de vainilla. Incorporarle la harina tamizada con movimientos envolventes. Disponer la preparación en una placa enmantecada y empapelada de 50x40 cm de lado y llevar a un horno a 180 °C por 12 a 15 minutos. Retirar del horno y pasar una rejilla por debajo para evitar que la masa se seque. Cubrir con un lienzo seco o una hoja de papel manteca. Respecto a la crema, batir la crema de leche con el azúcar y la esencia de vainilla. Asegurarse de que el azúcar este disuelta por completo en la crema de leche. Batir la ricotta y agregársela con espátula para evitar que se corte. Reservar aproximadamente de ella, y agregar al resto las castañas en trocitos, el merengue seco triturado y las nueces cortadas en trozos pequeños.','POSTRE BALCARCE'),(6,2,'velvet.png','La receta de mi abuela :)','2021-08-15','380 g de harina, 20 g de polvo para hornear, 1 cucharadita de sal fina, 15 g de cacao amargo, 170 g de manteca, 450 g de azúcar, 3 huevos, Ralladura de 2 naranjas, 340 cc de leche, 20 cc de jugo de limón, 2 cucharadas de colorante rojo carmín, 1 y 1/2 cucharada de vinagre de alcohol, 1 y 1/2 cucharada de bicarbonato de sodio, 400 g de crema no láctea, 100 cc de leche de coco, Gotas de esencia de naranja o limón','Mezclar la leche con el jugo de limón y dejar reposar 10 minutos. Luego incorporarle el colorante y diluirlo. Tamizar la harina con el polvo para hornear, la sal y el cacao. Batir los huevos con la manteca, el azúcar y la ralladura de naranjas. Mezclar los secos y luego agregar la mezcla de color rojo. Por último, mezclar el vinagre con el bicarbonato, y cuando espume, agregar a la preparación. Batir la masa por 1 minuto. Colocarla en tres moldes de 22 cm de diámetro enmantecados y empapelados. Hornear a 180 °C por 25 a 30 minutos. Retirar del horno. Dejar reposar 5 minutos y desmoldar. Respecto al relleno, batir la crema no láctea con la leche de coco y la esencia hasta punto sostenido. Rellenar y cubrirla torta con esta crema. Otra opción es usar una crema chantilly hecha a base de una crema de leche doble.','RED VELVET CAKE'),(7,2,'coconut.png','Comparto con ustedes mi receta favorita!','2021-08-13','250 g de manteca, 330 g de azúcar, 4 huevos, 100 cc de leche de coco, 100 cc de pulpa de maracuyá, 100 cc de pulpa de maracuyá, 1 pizca de sal fina, 380 g de harina, 20 g de polvo de hornear, 1 clara, 250 g de azúcar impalpable, 50 g de puré de mango o pulpa de maracuyá, Gotas de jugo de limón','Blanquear la manteca con el azúcar. Agregar los huevos de a uno por vez. Remojar el coco rallado en la leche y el maracuyá. Tamizar la harina con la sal y el polvo leudante. Integrar los secos al batido alternando con el coco húmedo. Volcar la masa en un molde de tubo central de 22 a 24 cm de diámetro y 10 cm de altura. Hornear a 175 °C por 55 minutos. Desmoldar y glasear. Respecto al glaseado, batir todos los ingredientes hasta unir y conseguir una consistencia espesa pero corrediza. Glasear sobre el budín tibio o caliente. Si usamos maracuyá, podemos decorar con sus semillas oscuras.','TROPICAL COCONUT CAKE'),(8,2,'kuchen.png','Este postre es lo más','2021-08-08','250 g de azúcar orgánico, 140 g de manteca, 140 cc de aceite de maíz, girasol o canola, 160 cc de leche, 5 huevos, 350 g de harina, 50 g de almidón de maíz, 20 g de polvo de hornear, Una pizca de sal fina, Esencia de vainilla, c/n, 1 kg de manzanas verdes, 50 g de polvo para flan, Canela molida','Blanquear la manteca con el azúcar y perfumar con la vainilla. Incorporar el aceite, y luego los huevos de a uno. Tamizar los secos e incorporar alternando con la leche. Para el relleno, pelar y cortar las manzanas en láminas o bastones delgados. Mezclar con el polvo de flan y la canela molida.','KUCHEN DE MANZANAS'),(9,2,'citrus.png','Esta torta es re rica, no te vas a arrepentir','2021-08-05','260 g de manteca, 180 g de queso Philadelphia, 450 g de azúcar, 1 cucharada de esencia de vainilla, Ralladura de 1 limón y de 1 naranja, 5 huevos, 1 pizca de sal fina, 350 g de harina, 15g de polvo de hornear, 1/2 cucharadita de bicarbonato de sodio','Mezclar los huevos, la sal, y la esencia de vainilla. Batir rápidamente solo para desligar los huevos. Colocar la manteca pomada en la batidora. Blanquear 1 o 2 minutos sola, luego incorporar el queso, las ralladuras y el azúcar, y continuar el batido. Comenzar a incorporar los huevos en forma de hilo, muy lentamente, tomando 2 o 3 minutos para incorporar todo. Por último, incorporar la harina tamizada con el polvo leudante y el bicarbonato en dos veces. Una vez incorporados los secos, detener el batido para evitar que el budín tenga una textura apretada y dura. Colocar en un molde enmantecado y frío. Hornear a 170 °C por 50 a 60 minutos. Revisar la cocción con un palito de brochette. Dejar en el molde unos 10 minutos antes de desmoldar para que la masa se contraiga y sea más fácil hacerlo. Se puede glasear aún tibio con una mezcla de 100 g de azúcar impalpable y 2 cucharadas de jugo de limón.','CITRUS POUND CAKE'),(10,2,'cerezaypist.png','El postre más rico que vas a probar!','2021-08-01','100 g de semillas de amapolasrecién molidas, 100 cc de leche, 100 g de manteca, 100 g de azúcar impalpable, 4 yemas, 50 g de almendras en polvo, 80 g de harina, 5 g de polvo de hornear, 4 claras, 60 g de azúcar, Ralladura de la piel de 1/2 limón, 14 g de gelatina, 300 g de cerezas, 300 g de puré de frutas rojas procesadas, 160 g de azúcar, 70 cc de agua','Calentar la leche a primer hervor y volcar sobre las semillas molidas de amapola. Dejar en infusión por algunos minutos. Blanquear la manteca con el azúcar impalpable. Agregar la ralladura de limón y las yemas de a una. Incorporar las semillas hidratadas. Merengar las claras con el azúcar. Incorporar al batido intercalando con los secos. Volcar la preparación en un molde de 22 cm o en un molde anillo de 24 cm. Hornear a 170 °C por 25 a 30 minutos. Retirar del horno y cubrir la superficie con un papel film. Luego, cuando enfríe, al quitarlo el film arrastrará la capa superficial de la masa. Respecto a la gelatina, mezclar el puré con el azúcar, calentándolo sobre fuego suave o en horno de microondas, hasta que se disuelva. Hidratar la gelatina con el agua. Fundir al calor e incorporar al puré de frutas. Por último, agregar las cerezas descarozadas o en cuartos si son muy grandes.','2021-08-01'),(11,NULL,NULL,'aa',NULL,'aa','','aa');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(25) DEFAULT NULL,
  `name` varchar(25) DEFAULT NULL,
  `surname` varchar(25) DEFAULT NULL,
  `profile_picture` varchar(155) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `date_birth` date DEFAULT NULL,
  `biography` text,
  `level` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'nicolelapidus','Nicole','Lapidus','nicole.jpg','holaaa','nicolelapidus@hotmail.com','2001-09-18','Mi nombre es Nicole Lapidus. Me apasiona cocinar y mucho mas comer. Hice varios cursos de cocina y partícipe en Masterchef.',3),(2,'carolinacamblor','Carolina','Camblor','carolina.jpg','holaaa123','caroc@hotmail.com','2002-04-09','Me dicen Caro. Recien a partir de la cuarentena empece a cocinar y me súper copa!',2),(3,'tatianakatz','Tatiana','Katz','tatiana.jpg','contrasena','katz.tati@hotmail.com','2002-03-19','Hola!! Mi nombre es Tatiana. Hace un tiempo empece a cocinar y me encanta vender todas mis tortas. Es por eso que hice este perfil! Si te interesa alguna, no dudes en escribirme!',1),(4,'nicorodri','Nicolas','Rodriguez','nicolas.jpeg','nico123','nicorodri@hotmail.com','1960-12-02','Mi nombre es Nico y son fan n1 de la cocina! Me re copa hacer cosas locas!',2),(5,'juligomez_','Julian','Gomez','julian.jpeg','juliangomez','gomezjulian@hotmail.com','1990-08-08','Mi nombre es Julian. Desde chico cocino junto a mis hermanos.',3),(6,'allo',NULL,NULL,NULL,'$2a$10$D6Uyrl6823FvVcfCLYMboe9gyqdbdTe0qDEk8Iv5FBUvAtjd7mecW','nicolelapidus@hotmail.com','2001-01-01',NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-21 18:04:11
