const express = require('express');
const app   = express();
const ejs = require('ejs');
const dateUtil = require(__dirname+'/resources/utils/dateUtil');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname + '/resources'));
app.set('view engine', 'ejs');

const items=[];
const workitems=[];
const buchitems=[];

app.get('/', (req, res)=>{

    console.log(dateUtil);

    var formatted_d = dateUtil.getFormatedDate('ddmmmyyyy');

    res.render('index', {listname:formatted_d, items:items, bgcolor:'#7B8FA1'});
});

app.get('/work', (req, res)=>{
    const listname='Liste der Büroarbeiten';
    res.render('index', {listname:listname, items:workitems, bgcolor:'#F48484'});
});

app.get('/book', (req, res)=>{
    const listname='Liste der zu kaufenden Bücher';
    res.render('index', {listname:listname, items:buchitems, bgcolor:'#00337C'});
});


app.post('/', (req, res)=>{
    
    if (req.body.btnsubmit==='Liste der Büroarbeiten'){
        workitems.push(req.body.item);
        res.redirect('/work');
    }else if (req.body.btnsubmit==='Liste der zu kaufenden Bücher'){
        buchitems.push(req.body.item);
        res.redirect('/book');
    }else{
        items.push(req.body.item);
        res.redirect('/');
    }
    
});

app.listen(PORT, ()=>{
    console.log('Server started at ['+PORT+']');
});