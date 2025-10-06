CREATE TABLE `tbl_BookNow` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`FullName` varchar(50) NOT NULL,
	`EmailAdd` varchar(50) NOT NULL,
	`Companyname` varchar(255) NOT NULL,
	`PhoneNum` varchar(20) NOT NULL,
	`Services` varchar(100) NOT NULL,
	`Product` varchar(100) NOT NULL,
	`Schedule` datetime NOT NULL,
	`Remarks` varchar(255) NOT NULL,
	`Logs` timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `tbl_BookNow_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `tbl_inquiries` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`FName` varchar(255) NOT NULL,
	`LName` varchar(255) NOT NULL,
	`Company` varchar(255) NOT NULL,
	`Email` varchar(255) NOT NULL,
	`Phone` varchar(20) NOT NULL,
	`Message` varchar(500) NOT NULL,
	`Logs` timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `tbl_inquiries_id` PRIMARY KEY(`id`)
);
