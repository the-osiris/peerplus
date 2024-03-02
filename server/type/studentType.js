const z = require("zod");

const studentValidation = z.object({
    username:z.string().email(),
    firstName: z.string().max(30),
    lastName: z.string().max(30),
    password: z.string().min(8) //create for alnumwith special cahr
});

const signinBody = z.object({
    username: z.string().email(),
	password: z.string().min(8)
})
const editBody = z.object({
   firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z.string().optional() //create for alnumwith special cahr
});


module.exports = {
    studentValidation: studentValidation,
    signinBody: signinBody,
    editBody:editBody
}

