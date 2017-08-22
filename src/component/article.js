import React from 'react';
import style from './style.scss';

export default class Article extends React.Component{
    render(){
       const {location} =this.props;
       const article=location.state.article;
       let value=article.value;
       let aa=value.replace(/\r\n/g, '<br/><br/>');
        return <article className={style.article}>
            <h1>{article.key}</h1>
            <div>
                <p dangerouslySetInnerHTML={{__html:aa}} />
            </div>

        </article>
    }
}

