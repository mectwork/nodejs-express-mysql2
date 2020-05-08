CREATE TABLE `children` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

insert into children values (1, 'Manuel', 'Carpio', 34);
insert into children values (2, 'Sam', 'Smith', 30);
insert into children values (3, 'Steve', 'Aragon', 34);
insert into children values (4, 'Julio', 'Jordan', 80);
insert into children values (5, 'John', 'Carter', 90);
insert into children values (6, 'Luca', 'Modric', 70);