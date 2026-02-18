/**
 * Seed all problems from problems.json into MongoDB.
 * 
 * Usage:  npx ts-node scripts/seedProblems.ts
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import Problem from '../models/problem';

dotenv.config();

const PROBLEMS_FILE = path.join(__dirname, '..', 'problems', 'problems.json');

async function seed() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error('❌ MONGODB_URI not set in .env');
        process.exit(1);
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(uri);
    console.log('✅ Connected\n');

    // Load problems
    const raw = fs.readFileSync(PROBLEMS_FILE, 'utf-8');
    const problems = JSON.parse(raw);
    console.log(`Loaded ${problems.length} problems from JSON\n`);

    // Check existing count
    const existingCount = await Problem.countDocuments();
    console.log(`Existing problems in DB: ${existingCount}`);

    if (existingCount > 0) {
        console.log('⚠️  Clearing existing problems before seeding...');
        await Problem.deleteMany({});
        console.log('   Cleared.\n');
    }

    // Insert in batches of 50
    const BATCH_SIZE = 50;
    let inserted = 0;
    let skipped = 0;
    const errors: { title: string; error: string }[] = [];

    for (let i = 0; i < problems.length; i += BATCH_SIZE) {
        const batch = problems.slice(i, i + BATCH_SIZE);

        try {
            const result = await Problem.insertMany(batch, { ordered: false });
            inserted += result.length;
            process.stdout.write(`\r  Inserted: ${inserted} / ${problems.length}`);
        } catch (err: any) {
            // insertMany with ordered:false continues on error
            if (err.insertedDocs) {
                inserted += err.insertedDocs.length;
            }
            if (err.writeErrors) {
                for (const we of err.writeErrors) {
                    const title = batch[we.index % BATCH_SIZE]?.title || 'unknown';
                    errors.push({ title, error: we.errmsg || String(we) });
                    skipped++;
                }
            }
            process.stdout.write(`\r  Inserted: ${inserted} / ${problems.length} (${skipped} skipped)`);
        }
    }

    console.log('\n');

    // Final count
    const finalCount = await Problem.countDocuments();

    console.log('═══════════════════════════════════════');
    console.log(`  ✅ Seeding complete!`);
    console.log(`  Total in JSON:   ${problems.length}`);
    console.log(`  Inserted:        ${inserted}`);
    console.log(`  Skipped/Errors:  ${skipped}`);
    console.log(`  Final DB count:  ${finalCount}`);
    console.log('═══════════════════════════════════════');

    if (errors.length > 0) {
        console.log('\n⚠️  Errors:');
        errors.slice(0, 10).forEach(e => console.log(`  - ${e.title}: ${e.error}`));
        if (errors.length > 10) console.log(`  ... and ${errors.length - 10} more`);
    }

    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB.');
}

seed().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
