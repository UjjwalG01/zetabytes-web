import { Pool } from 'pg'
import { PrismaClient } from "@prisma/client"
import { PrismaPg } from '@prisma/adapter-pg'

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;