const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:8081',
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get("/students", async (req, res) => {
    const allStudents = await prisma.student.findMany({});
    res.json(allStudents);
})

app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.get("/students/:id", async(req, res) => {
    const id = parseInt(req.params.id);
    const student = await prisma.student.findUnique({where: {id: id}});
    res.json(student);
})

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.post("/students", async (req, res) => {
    const student = {
      name: req.body.name,
      lang: req.body.lang,
      missionCommander: req.body.missionCommander,
      enrollments: req.body.enrollments 
    };
    const message = 'Student creado.';
    await prisma.student.create({data: student});
    return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	});
	return res.json({message: "Actualizado correctamente"});
});

app.put("/students/:id", async (res, req) => {
    const id = parseInt(req.params.id);
    await prisma.student.update({
      where: {
        id: id
      },
      data: {
        lang: req.body.lang,
      }
    });
    return res.json({message: "Actualizado correctamente"});
})

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.delete("/students/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.student.delete({where: {id: id}});
    return res.json({message: "Eliminado correctamente"});
})

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});