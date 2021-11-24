-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sweet_avenue
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_post` int(11) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_post` (`id_post`),
  CONSTRAINT `comments_ibfk_29` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_30` FOREIGN KEY (`id_post`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,3,1,'Re bueno','2021-11-11 23:22:38','2021-11-11 23:22:38'),(2,1,2,'Me gustó','2021-11-11 23:22:38','2021-11-11 23:22:38'),(3,1,3,'Muy malo','2021-11-11 23:22:38','2021-11-11 23:22:38'),(4,2,4,'no me salió','2021-11-11 23:22:38','2021-11-11 23:22:38'),(5,1,5,'Se me quemó','2021-11-11 23:22:38','2021-11-11 23:22:38'),(6,5,6,'Me encantó','2021-11-11 23:22:38','2021-11-11 23:22:38'),(7,4,7,'épico','2021-11-11 23:22:38','2021-11-11 23:22:38'),(8,3,8,'Riquísimo','2021-11-11 23:22:38','2021-11-11 23:22:38'),(9,2,9,'Asqueroso','2021-11-11 23:22:38','2021-11-11 23:22:38'),(10,2,10,'No lo recomiendo','2021-11-11 23:22:38','2021-11-11 23:22:38'),(11,4,1,'Muy difícil','2021-11-11 23:22:38','2021-11-11 23:22:38'),(12,4,2,'Fácil y rápido','2021-11-11 23:22:38','2021-11-11 23:22:38'),(13,4,3,'tremendo','2021-11-11 23:22:38','2021-11-11 23:22:38'),(14,2,4,'re malo','2021-11-11 23:22:38','2021-11-11 23:22:38'),(15,3,10,'ni se gasten','2021-11-11 23:22:38','2021-11-11 23:22:38'),(16,5,1,'malísimo','2021-11-11 23:22:38','2021-11-11 23:22:38'),(17,3,2,'Riquísimo','2021-11-11 23:22:38','2021-11-11 23:22:38'),(18,2,3,'Asqueroso','2021-11-11 23:22:38','2021-11-11 23:22:38'),(19,5,4,'No lo recomiendo','2021-11-11 23:22:38','2021-11-11 23:22:38'),(20,5,5,'Muy difícil','2021-11-11 23:22:38','2021-11-11 23:22:38'),(21,4,6,'Fácil y rápido','2021-11-11 23:22:38','2021-11-11 23:22:38'),(22,3,7,'tremendo','2021-11-11 23:22:38','2021-11-11 23:22:38'),(23,1,8,'re malo','2021-11-11 23:22:38','2021-11-11 23:22:38'),(24,1,9,'ni se gasten','2021-11-11 23:22:38','2021-11-11 23:22:38'),(25,5,10,'malísimo','2021-11-11 23:22:38','2021-11-11 23:22:38'),(57,2,9,'no lo prueben','2021-11-23 12:10:44','2021-11-23 12:10:44');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `follower_id` int(11) DEFAULT NULL,
  `following_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `follower_id` (`follower_id`),
  KEY `following_id` (`following_id`),
  CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`follower_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`following_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (7,2,3),(8,3,2),(9,3,4),(10,4,2),(11,4,1),(12,5,3),(13,5,4),(14,2,5),(16,NULL,2),(17,2,1);
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like`
--

DROP TABLE IF EXISTS `like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `like` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_post` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `like_ibfk_3` (`id_post`),
  KEY `like_ibfk_4` (`id_user`),
  CONSTRAINT `like_ibfk_3` FOREIGN KEY (`id_post`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `like_ibfk_4` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like`
--

LOCK TABLES `like` WRITE;
/*!40000 ALTER TABLE `like` DISABLE KEYS */;
INSERT INTO `like` VALUES (56,2,1),(60,2,8),(63,2,5),(65,2,4),(75,2,9),(76,2,3),(77,3,6),(78,3,3),(79,4,2),(80,4,4),(81,4,3),(82,4,10),(83,5,2),(84,5,9),(85,2,6),(87,2,2);
/*!40000 ALTER TABLE `like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `ingredients` varchar(255) DEFAULT NULL,
  `instructions` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,'82533300590735813c92047288d119aa','La pasta frolla más rica del mundo.','200 g de manteca, 150 g de azúcar, 1/2 cucharadita de sal, 2 huevos, Ralladura de 1/2 limón, 1/2 cucharada de esencia de vainilla, 400 g de harina 0000, 10 g de polvo leudante, 400 g de dulce de membrillos, 400 g de dulce de membrillos, 50 cc de vino opor','Estirar 3/4 de la masa con ayuda de un palote hasta lograr unos 5 mm de espesor. Forrar una tartera de 26 a 28 cm de diámetro. Presionar ligeramente la masa sobre los bordes de la tartera y cortar el excedente. Unir la masa sobrante a los recortes y estir','pasta frola','2021-11-11 23:23:02','2021-11-23 11:50:27'),(2,2,'5ced101cf30bfa357c3c04e45af4ced9','El postre más rico que vas a probar!','6 huevos, 6 huevos, 140 g de harina 0000, 40 g de cacao amargo, 40 g de cacao amargo, 200 g de guindas o cerezas al natural sin carozos, 100 cc de almíbar de las guindas, 100 cc de almíbar de las guindas, 100 cc de almíbar de las guindas, 360 g de crema d','Batir los huevos con el azúcar sobre baño María hasta entibiar, a unos 45 °C aproximadamente. Retirar del calor y batir hasta llegar a punto letra. Retirar del calor y batir hasta llegar a punto letra. Finalmente añadir la manteca derretida. Volcar la mas','TORTA DE LA SELVA NEGRA','2021-11-23 12:12:42','2021-11-23 12:23:42'),(3,3,'d745b2506379ff560309a6ea9e8cd83d','Prueben esta receta!! No se van a arrepentir','250 g de azúcar orgánico, 2 yemas, 6 huevos, 200 g de harina 0000, 100 g de nueces procesadas, 80 cc de aceite de maíz, Ralladura de la piel de 1 naranja, 100 g de nueces en mitades, 50 g de azúcar, 2 cucharadas de agua, 3 claras, 240 g de azúcar, 300 g d','Colocar los huevos, las yemas y el azúcar orgánico en un bol metálico. Calentar sobre baño María y batir constantemente hasta llegar a 40 oC. Luego, fuera del calor, batir con batidora eléctrica hasta alcanzar el punto letra. Perfumar con la ralladura de ','TORTA MOKA','2021-11-11 23:23:04','2021-11-23 11:52:17'),(4,1,'a93d7e8442e521be123043d8be546016','Con esta receta vas a impresionar a todos tus amigos','3 huevos, 250 g de azúcar, 200 g de manteca, 125 g de chocolate amargo, 130 g de harina, 20 g de cacao amargo, 125 g de nueces3 claras, 220 g de azúcar, 70 cc de agua, Gotas de jugo de limón','Fundir el chocolate con la manteca y entibiar. Batir ligeramente los huevos con el azúcar hasta que formen una espuma blanca. Tamizar la harina con el cacao y unir al batido junto con el chocolate fundido y tibio. Finalmente unir las nueces picadas groser','BROWNIE MERENGADA','2021-11-11 23:23:05','2021-11-23 11:49:37'),(5,2,'3110b97b30630aa2f7db579618e7887e','Si preparas este postre, toda tu familia te va a amar.','6 huevos, 120 g de azúcar, 120 g de harina, Esencia de vainilla 800 g de crema de leche, 150 g de azúcar, 150 g de azúcar, 250 g de ricotta, 100 g de nueces peladas, 200 g de castañas en almíbar, 200 g de merengue seco','Batir los huevos con el azúcar hasta montar a punto letra. Perfumar con la esencia de vainilla. Incorporarle la harina tamizada con movimientos envolventes. Disponer la preparación en una placa enmantecada y empapelada de 50x40 cm de lado y llevar a un ho','POSTRE BALCARCE','2021-11-11 23:23:06','2021-11-23 11:46:42'),(6,3,'a579a3626e0f2c332b8c4d44f12df0c0','La receta de mi abuela :)','380 g de harina, 20 g de polvo para hornear, 1 cucharadita de sal fina, 15 g de cacao amargo, 170 g de manteca, 450 g de azúcar, 3 huevos, Ralladura de 2 naranjas, 340 cc de leche, 20 cc de jugo de limón, 2 cucharadas de colorante rojo carmín, 1 y 1/2 cuc','Mezclar la leche con el jugo de limón y dejar reposar 10 minutos. Luego incorporarle el colorante y diluirlo. Tamizar la harina con el polvo para hornear, la sal y el cacao. Batir los huevos con la manteca, el azúcar y la ralladura de naranjas. Mezclar lo','RED VELVET CAKE','2021-11-11 23:23:07','2021-11-23 11:52:05'),(7,1,'ce6953fdf42f9308c50a889f6ea0dd07','Comparto con ustedes mi receta favorita!','250 g de manteca, 330 g de azúcar, 4 huevos, 100 cc de leche de coco, 100 cc de pulpa de maracuyá, 100 cc de pulpa de maracuyá, 1 pizca de sal fina, 380 g de harina, 20 g de polvo de hornear, 1 clara, 250 g de azúcar impalpable, 50 g de puré de mango o pu','Blanquear la manteca con el azúcar. Agregar los huevos de a uno por vez. Remojar el coco rallado en la leche y el maracuyá. Tamizar la harina con la sal y el polvo leudante. Integrar los secos al batido alternando con el coco húmedo. Volcar la masa en un ','TROPICAL COCONUT CAKE','2021-11-11 23:23:08','2021-11-23 11:47:37'),(8,2,'41d5a5577b0615bae732c0b312e3936f','Este postre es lo más','250 g de azúcar orgánico, 140 g de manteca, 140 cc de aceite de maíz, girasol o canola, 160 cc de leche, 5 huevos, 350 g de harina, 50 g de almidón de maíz, 20 g de polvo de hornear, Una pizca de sal fina, Esencia de vainilla, c/n, 1 kg de manzanas verdes','Blanquear la manteca con el azúcar y perfumar con la vainilla. Incorporar el aceite, y luego los huevos de a uno. Tamizar los secos e incorporar alternando con la leche. Para el relleno, pelar y cortar las manzanas en láminas o bastones delgados. Mezclar ','KUCHEN DE MANZANA','2021-11-11 23:23:09','2021-11-24 14:18:25'),(9,3,'e48b52f081a3e66db21e5b27f9359f8e','Esta torta es re rica, no te vas a arrepentir','260 g de manteca, 180 g de queso Philadelphia, 450 g de azúcar, 1 cucharada de esencia de vainilla, Ralladura de 1 limón y de 1 naranja, 5 huevos, 1 pizca de sal fina, 350 g de harina, 15g de polvo de hornear, 1/2 cucharadita de bicarbonato de sodio','Mezclar los huevos, la sal, y la esencia de vainilla. Batir rápidamente solo para desligar los huevos. Colocar la manteca pomada en la batidora. Blanquear 1 o 2 minutos sola, luego incorporar el queso, las ralladuras y el azúcar, y continuar el batido. Co','torta naranja','2021-11-11 23:23:10','2021-11-23 11:51:40'),(10,1,'2b3ae8b337d09b5acd81bc4aa9710f07','No se pierdan de probar esta receta!!!','100 g de semillas de amapolasrecién molidas, 100 cc de leche, 100 g de manteca, 100 g de azúcar impalpable, 4 yemas, 50 g de almendras en polvo, 80 g de harina, 5 g de polvo de hornear, 4 claras, 60 g de azúcar, Ralladura de la piel de 1/2 limón, 14 g de ','Calentar la leche a primer hervor y volcar sobre las semillas molidas de amapola. Dejar en infusión por algunos minutos. Blanquear la manteca con el azúcar impalpable. Agregar la ralladura de limón y las yemas de a una. Incorporar las semillas hidratadas.','torta verde','2021-11-11 23:23:00','2021-11-23 11:50:42');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `date_birth` varchar(255) DEFAULT NULL,
  `biography` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'nicolelapidus','Nicole','Lapidus','d3684f572da61786c01e3c1d3c41e212','$2a$10$8W.Ab0/k.rEd/D2754ucwu8c1.YNokmcfCPidTxvMajqy4e4SfXV6','nicolelapidus@hotmail.com','2001-09-18','Mi nombre es Nicole Lapidus. Me apasiona cocinar y mucho mas comer. Hice varios cursos de cocina y partícipe en Masterchef.','3','2021-11-11 23:22:38','2021-11-23 11:47:23'),(2,'carolinacamblor','Carolina','Camblor','1e3024d9fd89eb3920370eceb8f81f13','$2a$10$8W.Ab0/k.rEd/D2754ucwu8c1.YNokmcfCPidTxvMajqy4e4SfXV6','caroc@hotmail.com','2002-04-09','Me dicen Caro. Recién a partir de la cuarentena empecé a cocinar y me súper copa!!','2','2021-11-11 23:22:38','2021-11-24 14:18:50'),(3,'tatianakatz','Tatiana','Katz','9287ee714ca64286cdd04c8cec04f74d','$2a$10$8W.Ab0/k.rEd/D2754ucwu8c1.YNokmcfCPidTxvMajqy4e4SfXV6','katz.tati@hotmail.com','2002-03-19','Hola!! Mi nombre es Tatiana. Hace un tiempo empece a cocinar y me encanta vender todas mis tortas. Es por eso que hice este perfil! Si te interesa alguna, no dudes en escribirme!','1','2021-11-11 23:22:38','2021-11-23 11:52:38'),(4,'nicorodri','Nicolás','Rodriguez','1442948839b85bc0af9175f43a29a3ef','$2a$10$8W.Ab0/k.rEd/D2754ucwu8c1.YNokmcfCPidTxvMajqy4e4SfXV6','nicorodri@hotmail.com','2001-09-18','Mi nombre es Nico y son fan n1 de la cocina! Me re copa hacer cosas locas!','1','2021-11-11 23:22:38','2021-11-23 11:54:17'),(5,'juligomez_','Julián','Gomez','9e36d5fe41ddf41a8a48a1ea994bbff2','$2a$10$8W.Ab0/k.rEd/D2754ucwu8c1.YNokmcfCPidTxvMajqy4e4SfXV6','gomezjulian@hotmail.com','2002-03-19','Mi nombre es Julian. Desde chico cocino junto a mis hermanos.','1','2021-11-11 23:22:38','2021-11-23 21:53:16');
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

-- Dump completed on 2021-11-24 11:31:52
