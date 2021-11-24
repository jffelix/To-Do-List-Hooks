// const { iteratee } = require('lodash');
// const { describe } = require('yargs');
const expect = require('chai').expect();
const app = express();
// const router = require('../routers/index.js');
const appComponent = require('../client/src/App.jsx');

describe('CRUD operations', () => {

    it('should receive a response from a GET request', (done) => {
        app.get('/items')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        })
    });

});