-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;

SET
    @OLD_FOREIGN_KEY_CHECKS = @ @FOREIGN_KEY_CHECKS,
    FOREIGN_KEY_CHECKS = 0;

SET
    @OLD_SQL_MODE = @ @SQL_MODE,
    SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------

-- Schema blog

-- -----------------------------------------------------

-- -----------------------------------------------------

-- Schema blog

-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 ;

USE `blog` ;

-- -----------------------------------------------------

-- Table `blog`.`autores`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `blog`.`autores` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `nombre` VARCHAR(45) NOT NULL,
        `email` VARCHAR(50) NOT NULL,
        `imagen` VARCHAR(250) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE UNIQUE INDEX `email_UNIQUE` ON `blog`.`autores` (`email` ASC);

-- -----------------------------------------------------

-- Table `blog`.`posts`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `blog`.`posts` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `titulo` VARCHAR(45) NOT NULL,
        `descripcion` VARCHAR(5000) NOT NULL,
        `fecha_creacion` DATE NOT NULL,
        `categoria` VARCHAR(45) NOT NULL,
        `autores_id` INT NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE UNIQUE INDEX `titulo_UNIQUE` ON `blog`.`posts` (`titulo` ASC);

SET SQL_MODE=@OLD_SQL_MODE;

SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;