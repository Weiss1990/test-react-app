const categories = [{
            id: 1,
            name: 'books'
        }, {
            id: 2,
            name: 'cars'
        },{
            id: 3,
            name: 'boats'
        }
];

const productList = [{
    id: 1,
    category: 1,
    productName: 'War and Peace',
    price: 80
}, {
    id: 2,
    category: 1,
    productName: 'Parfumer',
    price: 50
}, {
    id: 3,
    category: 1,
    productName: 'javascript: from nube to master',
    price: 200
}, {
    id: 4,
    category: 1,
    productName: 'James Bond',
    price: 100
}, {
    id: 5,
    category: 1,
    productName: 'Taras Shevchenko',
    price: 90
}, {
    id: 6,
    category: 1,
    productName: 'Buratino',
    price: 35
}, {
    id: 7,
    category: 2,
    productName: 'BMW X5',
    price: 800000
}, {
    id: 8,
    category: 2,
    productName: 'Lada',
    price: 150000
}, {
    id: 9,
    category: 2,
    productName: 'Tavria',
    price: 20000
}, {
    id: 10,
    category: 2,
    productName: 'Nissan',
    price: 300000
}, {
    id: 11,
    category: 2,
    productName: 'Skoda',
    price: 350000
}, {
    id: 12,
    category: 2,
    productName: 'KRAZ',
    price: 400000
}, {
    id: 13,
    category: 3,
    productName: 'boat with engine',
    price: 20000
}, {
    id: 14,
    category: 3,
    productName: 'barkas',
    price: 5000
}, {
    id: 15,
    category: 3,
    productName: 'plot',
    price: 1000
}, {
    id: 16,
    category: 3,
    productName: 'plot with parus',
    price: 2500
}];

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(3001, () => {
    console.log('Example app listening on port 3001!');
});

app.use(bodyParser.json());

app.all('*',function(req,res,next)
{
    if (!req.get('Origin')) return next();

    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Methods','GET,POST');
    res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');

    if ('OPTIONS' == req.method) return res.send(200);

    next();
});

app.get('/categories', (req, res) => {

    res.send(JSON.stringify(categories));
});

app.get('/products', (req, res) => {

    res.send(JSON.stringify(productList));
});

app.post('/getproductbycategory', (req, res) => {

    if (req.body && req.body.category) {
        const products = productList.filter((product) => {
            return product.category === +req.body.category;
        })

        res.send(products);
    }
});

app.post('/getproductbyid', (req, res) => {

    if (req.body && req.body.id) {
        const product = productList.find((product) => {
            return product.id === +req.body.id;
        })

        res.send(product);
    }
});

app.post('/getproductbyname', (req, res) => {

    if (req.body && req.body.name) {
        const product = productList.find((product) => {
            return product.productName === req.body.name;
        })

        res.send(product);
    }
});