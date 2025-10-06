import { mysqlTable, serial, varchar, datetime, timestamp } from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';



export const tbl_inquiries = mysqlTable('tbl_inquiries', {
  id: serial('id').primaryKey(),
  Fname: varchar('FName', { length: 255 }).notNull(),
  Lname: varchar('LName', { length: 255 }).notNull(),
  Company: varchar('Company', { length: 255 }).notNull(),
  Email: varchar('Email', { length: 255 }).notNull(),
  PhoneNumber: varchar('Phone', { length: 20 }).notNull(),
  Message: varchar('Message', { length: 500 }).notNull(),  
  Logs: timestamp('Logs').default(sql`CURRENT_TIMESTAMP`),
});

export const tbl_BookNow = mysqlTable('tbl_BookNow', {
  id: serial('id').primaryKey(),
  FullName: varchar('FullName', { length: 50 }).notNull(),
  EmailAdd: varchar('EmailAdd', { length: 50 }).notNull(),
  Companyname: varchar('Companyname', { length: 255 }).notNull(),
  PhoneNum: varchar('PhoneNum', { length: 20 }).notNull(),
  Services: varchar('Services', { length: 100 }).notNull(),
  Product: varchar('Product', { length: 100 }).notNull(),
  Schedule: datetime('Schedule').notNull(),
  Remarks: varchar('Remarks', { length: 255 }).notNull(),
  Logs: timestamp('Logs').default(sql`CURRENT_TIMESTAMP`),
});


// npx drizzle-kit generate --name initialize
// npx drizzle-kit generate

// npx drizzle-kit drop



