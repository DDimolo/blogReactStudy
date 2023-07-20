import { Component } from "react";
import { posts } from "../../shared/projectData";
import { BlogItem } from "./components/BlogItem";
import "./main.css";
import { AddPostForm } from "../AddPostForm/AddPostForm";

export class BlogContent extends Component {
  state = {
    showAddForm: false,
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

  handleShowAddForm = () => {
    this.setState({
      showAddForm: true,
    });
  };

  handleHideAddForm = () => {
    this.setState({
      showAddForm: false,
    });
  };

  deletePost = (pos) => {
    if (
      window.confirm(
        `Вы собираетесь удалить пост ${this.state.blogArr[pos].title}`
      )
    ) {
      const temp = [...this.state.blogArr];
      temp.splice(pos, 1);

      this.setState({
        blogArr: temp,
      });

      localStorage.setItem("blogPosts", JSON.stringify(temp));
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
        {this.state.showAddForm ? (
          <AddPostForm handleHideAddForm={this.handleHideAddForm} />
        ) : null}
        <>
          <div className="containerMain">
            <div className="pageTitle">
              <h1>Simple Blog</h1>
              <button className="accentBtn" onClick={this.handleShowAddForm}>
                Создать новый пост
              </button>
            </div>

            <div class="posts">{blogPosts}</div>
          </div>
        </>
      </>
    );
  }
}
