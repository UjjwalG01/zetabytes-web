import { getVerificationTokenByEmail } from "@/data/verification-token";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/lib/db";

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const DURATION = 3600 * 1000; // 1 day
    const expires = new Date(new Date().getTime() + DURATION);

    const existingToken = await getVerificationTokenByEmail(email);
    if (existingToken) {
        await db.verificationToken.delete({
            where: { id: existingToken.id }
        })
    }

    const verificationToken = await db.verificationToken.create({
        data: { expires, email, token }
    });

    return verificationToken;
}