import React from 'react';
import { getHeaders } from './utils';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
class Post extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            post: this.props.postData
        }
        this.fetchPost = this.fetchPost.bind(this)
    }
    fetchPost(){
        fetch(`/api/posts/${this.state.post.id}`,{
            headers: getHeaders()
        }).then(res => res.json()).then(data => {
            console.log(data)
            this.setState({
                post:data
            })
        });
    }
    
    
    render (){
        
        const post = this.state.post;
        console.log('post', post)
        if (!post) {
            return (
                <div></div>  
            );
        }
        return (
            <section className="card">
                <div className="header">
                    <h3>{ post.user.username }</h3>
                    <i className="fa fa-dots"></i>
                </div>
                
                <img 
                    src={ post.image_url } 
                    alt={'Image posted by ' +  post.user.username } 
                    width="300" 
                    height="300" />
                
                <div className="info">
                    <div id="buttons">
                        <LikeButton
                            postId={post.id}
                            likeId={post.current_user_like_id}
                            fetchPost={this.fetchPost}/>
                        <BookmarkButton
                            postId={post.id}
                            bookmarkId={post.current_user_bookmark_id}
                            fetchPost={this.fetchPost}/>
                    </div>
                    <p>{ post.caption }</p>
                </div>
            </section> 
        );     
    }
}

export default Post;