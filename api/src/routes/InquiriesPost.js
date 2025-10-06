// const express = require('express');
// const { db } = require('./db/db.js');
// const { users } = require('./db/schema.js');
import express from 'express';
import { db } from '../db/db.js';
import cors from 'cors';
import { tbl_BookNow, tbl_inquiries } from '../db/schema.js';
import { eq } from 'drizzle-orm';

const router = express.Router();

router.get('/users', async (req, res) => {
  const allUsers = await db.select().from(tbl_inquiries);
  res.json(allUsers);
});

router.post('/submitInquiries', async (req, res) => {
  try {
    const { Company, Email, FName, LName, PhoneNumber, Message } = req.body;
    const result = await db.insert(tbl_inquiries).values({
      Fname: FName,
      Lname: LName,
      Company: Company,
      Email: Email,
      PhoneNumber: PhoneNumber,
      Message: Message
    });
    res.status(201).json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/submitBookNow', async (req, res) => {
  try {
    const { FullName, EmailAdd, Companyname, PhoneNum, Services, Product, ScheduleDate, ScheduleTime, Remarks} = req.body;   
    const scheduleDateTime = new Date(`${ScheduleDate}T${ScheduleTime}:00`);
    const result = await db.insert(tbl_BookNow).values({
      FullName: FullName,
      EmailAdd: EmailAdd,
      Companyname: Companyname,
      PhoneNum: PhoneNum,
      Services: Services,
      Product: Product,
      Schedule: scheduleDateTime,
      Remarks: Remarks
    });
    res.status(201).json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;