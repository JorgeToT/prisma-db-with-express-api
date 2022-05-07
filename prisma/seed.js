const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
      where: { name: 'Woopa 4' },
      update: {},
      create: {
        name: 'Woopa 4',
				username: 'ajolonauta4',
				mission: 'Java'
      },
    });

    const woopa_ = await prisma.student.upsert({
      where: {name : 'Woopa'},
      update: {},
      create: {
        name: 'Woopa',
        lang: 'Node',
        missionCommander: 'Carlo',
        enrollments: 5
      },
    });

    const woopa_1 = await prisma.student.upsert({
      where: {name : 'Woopa 1'},
      update: {},
      create: {
        name: 'Woopa 1',
        lang: 'Java',
        missionCommander: 'Fer',
        enrollments: 3
      },
    });

    const woopa_2 = await prisma.student.upsert({
      where: {name : 'Woopa 2'},
      update: {},
      create: {
        name: 'Woopa 2',
        lang: 'Node',
        missionCommander: 'Carlo',
        enrollments: 1
      },
    });

    console.log('Create 7  explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  throw e
}).finally(async () => {
  await prisma.$disconnect()
})
