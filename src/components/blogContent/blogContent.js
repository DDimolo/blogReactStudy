import { Component } from "react";
import { posts } from "../../shared/projectData";
import { BlogItem } from "./components/BlogItem";
import "./main.css";

export class BlogContent extends Component {
  state = {
    showBlog: true,
    blogArr: JSON.parse(localStorage.getItem("blogPosts")) || posts,
  };

  likePost = (pos) => {
    const temp = [...this.state.blogArr];
    temp[pos].liked = !temp[pos].liked;

    this.setState({
      blogArr: temp,
    });

    localStorage.setItem("blogPosts", JSON.stringify(temp));
  };

  toggleBlog = () => {
    this.setState((state) => {
      return {
        showBlog: !state.showBlog,
      };
    });
  };

  deletePost = (pos) => {
    if (window.confirm(`Вы собираетесь удалить пост ${this.state.blogArr[pos].title}`)) {
      const temp = [...this.state.blogArr];
      temp.splice(pos, 1);

      this.setState({
        blogArr: temp,
      });

      localStorage.setItem('blogPosts', JSON.stringify(temp))
    }
  };

  render() {
    const blogPosts = this.state.blogArr.map((item, pos) => {
      return (
        <BlogItem
          key={item.id}
          title={item.title}
          description={item.description}
          liked={item.liked}
          likePost={() => this.likePost(pos)}
          deletePost={() => this.deletePost(pos)}
        />
      );
    });
    return (
      <>
        {this.state.showBlog ? "Блог показан" : "Блог скрыт"}
        <button onClick={this.toggleBlog}>
          {this.state.showBlog ? "Скрыть блог" : "Показать блог"}
        </button>

        {this.state.showBlog ? (
          <>
            <h1>Simple Blog</h1>
            <div class="posts">{blogPosts}</div>
          </>
        ) : null}
      </>
    );
  }
}
