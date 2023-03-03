// news_index
const axios=require('axios');

const news_index =async (req,res)=> {
    //res.render('index');

    try {
        const newsAPI = await axios.get('https://newsapi.org/v2/everything?q=India OR US&from=2023-03-02&to=2023-03-02&sortBy=popularity&apiKey=7956d36b86814ec5995ac09200368d45');
        //console.log(newsAPI.data);
        res.render('index',{articles:newsAPI.data.articles});

    }
    catch(err) {
        if(err.response) {
            res.render('index',{articles:null});
            //console.log(err.response.data);
            //console.log(err.response.status);
            //console.log(err.response.headers);
            
        }
        else if(err.request) {
            res.render('index',{articles:null});
            //console.log(err.request);
        }
        else {
            res.render('index',{articles:null});
            //console.log('Error',err.message);
        }
    }

}
const news_article =async (req,res)=> {
    let articleID =req.params.id;
    console.log(articleID);
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?sources=${articleID}&apiKey=7956d36b86814ec5995ac09200368d45`);
        //console.log(newsAPI.data);
        res.render('particular',{articles:newsAPI.data.articles});

    }
    catch(err) {
        if(err.response) {
            res.render('particular',{articles:null});
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
            
        }
        else if(err.request) {
            res.render('particular',{articles:null});
            console.log(err.request);
        }
        else {
            res.render('particular',{articles:null});
            console.log('Error',err.message);
        }
    }

}
module.exports = {
    news_index,
    news_article
}