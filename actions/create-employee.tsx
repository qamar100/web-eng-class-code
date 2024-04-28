"use server"

import db from "@/lib/db";
import employeeSchema from "@/schemas";
import { z } from "zod";

const createEmployee = async (values: z.infer<typeof employeeSchema>) => {
    console.log(values);
    const employee = await db.employee.create({
        data: {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            phonenumber: values.phonenumber
        }
    })
}

export default createEmployee