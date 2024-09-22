// import * as chaiModule from "chai"
// import chaiHttp from "chai-http"
// import app from "../index.js"
// import User from "../models/user.js"
// import Todo from "../models/todo.js"

// const chai = chaiModule.use(chaiHttp)
// const expect = chai.expect;


// before((done) => {
//     Promise.all([
//         Todo.deleteMany(),
//         User.deleteMany()
//     ]).then(() => done())
// })

// after((done) => {
//     Promise.all([
//         Todo.deleteMany(),
//         User.deleteMany()
//     ]).then(() => done())

// })

// describe('/Login, Register and Refresh', () => {
//     let access_token;
//     let refresh_token;
//     it("should test logic of register", (done) => {
//         const user = {
//             name: "Test",
//             email: "test@gmail.com",
//             password: "test"
//         }
//         chai.request.execute(app)
//             .post("/register")
//             .send(user)
//             .end((err, res) => {
//                 expect(res).to.have.status(201)
//                 expect(res.body).have.property("access_token")
//                 expect(res.body).have.property("refresh_token")
//                 access_token = res.body.access_token
//                 refresh_token = res.body.refresh_token
//                 done(err)
//             })
//     })

//     it("/should test logic of login", (done) => {
//         const user = {
//             email: "test@gmail.com",
//             password: "test"
//         }

//         chai.request.execute(app)
//             .post("/login")
//             .send(user)
//             .end((err, res) => {
//                 res.should.have.status(200)
//                 expect(res.body).to.have.property("refresh_token")
//                 expect(res.body).to.have.property("access_token")
//                 access_token = res.body.access_token
//                 refresh_token = res.body.refresh_token
//                 done(err)
//             })
//     })


//     it("test of logic create todo", (done) => {
//         const todo = {
//             title: "Test title",
//             description: "Test description"
//         }

//         chai.request.execute(app)
//             .post("/")
//             .set("Authorization", `Token ${token}`)
//             .send(todo)
//             .end((err, res) => {
//                 if (err) throw err

//                 res.should.have.status(200)
//                 expect(res.body).to.have.property("_id")
//                 expect(res.body).to.have.property("title", todo.title)
//                 expect(res.body).to.have.property("description", todo.description)
//                 done(err)
//             })
//     })

// })