import React from 'react';
import style from './style.scss';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active:1
        }
    }
    onClicked=(index)=>{
        console.log(index)
        this.setState({
            active:index
        })
    };
    render(){
        return <nav className={style.header}>
           <Link to="/">当然我也是在扯谈</Link>

            <ul className={style.headerRight}>
                <li onClick={this.onClicked.bind(this,1)} className= {this.state.active===1 ? style.active:""}><Link to="/">博客</Link></li>
                <li onClick={this.onClicked.bind(this,2)} className= {this.state.active===2 ? style.active:""}><a href="http://weibo.com/u/6347862377">微博</a></li>
                <li onClick={this.onClicked.bind(this,3)} className= {this.state.active===3 ? style.active:""}><Link to="/">收费</Link></li>
            </ul>
        </nav>
    }
}