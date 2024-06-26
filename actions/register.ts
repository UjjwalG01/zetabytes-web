"use server"

import * as z from "zod";
// import bcrypt from "bcryptjs"
const bcrypt = require("bcryptjs");

import { db } from "@/lib/db";

import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    // validating the client data into server
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" }
    }

    const { email, name, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    // existing user check with email
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already exists" }
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    const verificationEmail = await generateVerificationToken(email);
    // TODO: send verification email

    return { success: "Verification token sent!" }
}