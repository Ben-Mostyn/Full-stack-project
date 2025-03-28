// import request from 'supertest';
// import app from '../..';

// describe('User queries', () => {
//     it('gets all users', async () => {
//         const response = await request(app)
//             .post('/graphql')
//             .send({
//                 query: `
//           query {
//             getAllUsers {
//               id
//               username
//               email
//             }
//           }
//         `,
//             });
//         expect(response.status).toBe(200);
//         expect(response.body.data.getAllUsers).toBeInstanceOf(Array);
//     });
// });
