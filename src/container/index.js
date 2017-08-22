import React from 'react';
import { connect } from 'react-redux'
import Header from "../component/header";
import style from './style.scss';
import {fetchData} from "./actions";
import Article from './../component/article';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


export class Index extends React.Component{


    componentWillMount(){
        let {fetchData}=this.props;
        fetchData();
    }
    renderArticleList=(data)=>{
        let i=0;

        return data.map((article)=>{
            console.log(article);
            const location = {
                pathname: '/article',
                state: {
                    article:article
                }
            };
            return <li key={i++}><Link to={location}>{article.key}</Link></li>
        })
    };

    Ul= () =>{
        const {value}=this.props;
        return <ul className={style.articles}>
            {value.article.data && this.renderArticleList(value.article.data)}
        </ul>
    };



    render(){
        const {value}=this.props;


        return <Router><div className={style.index}>
            <Header/>
            <Route exact path="/" component={this.Ul}/>
            <Route  exact path="/article" component={Article}/>
        </div>
        </Router>
    }
}




const mapStateToProps = (state, ownProps) => ({
        value:state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData: () => {
        dispatch(fetchData())
    },
});

const IndexC=connect(mapStateToProps,mapDispatchToProps)(Index);

export default IndexC