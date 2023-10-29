import React from "react"

export class Admin extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          posts: [], 
        };
      }
    render()
    {
        return(
            <div>
            <h1> Admin Dashboard</h1>
            <button onClick={this.createPost}>Create New Post</button>
            {this.state.posts.map((post, index) => (
              <div key={index}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <button onClick={() => this.editPost(index)}>Edit</button>
                <button onClick={() => this.deletePost(index)}>Delete</button>
              </div>
            ))}
          </div>      
            );
    }
    createPost = () => {
        
        const newPost = {
          title: 'New Post Title',
          content: 'New Post Content',
        };
    
        this.setState((prevState) => ({
          posts: [...prevState.posts, newPost],
        }));
      };
    
      editPost = (index) => {
    
        const editedPost = {
          title: 'Edited Post Title',
          content: 'Edited Post Content',
        };
    
        const updatedPosts = [...this.state.posts];
        updatedPosts[index] = editedPost;
    
        this.setState({
          posts: updatedPosts,
        });
      };
    
      deletePost = (index) => {
        // Implement logic to delete a blog post
        const updatedPosts = [...this.state.posts];
        updatedPosts.splice(index, 1);
    
        this.setState({
          posts: updatedPosts,
        });
      };
    }
