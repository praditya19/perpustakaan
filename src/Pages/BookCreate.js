import React, { Component } from 'react';
import Axios from 'axios';
export default class BookCreate extends Component {
  state = {
    author: [],
    judul: '',
    id_author: 0
  };
  getAuthor = () => {
    Axios.get('https://api-demo.koding.sch.id/api/author/')
      .then(res => {
        console.log(res.data.data);
        this.setState({
          author: res.data.data
        });
        console.log(this.state.author);
      })
      .catch(err => {
        console.log(err);
      });
  };
  postBook = () => {
    Axios.post('https://api-demo.koding.sch.id/api/book/', {
      judul: this.state.judul,
      id_author: this.state.id_author
    })
      .then(() => {
        alert('transfer Succes');
      })
      .catch(() => {
        alert('Failed');
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  componentDidMount = () => {
    this.getAuthor();
  };

  render() {
    console.log(this.state.judul);
    console.log(this.state.id_author);
    return (
      <div className="Form">
        <input
          id="judul"
          type="text"
          value={this.state.judul}
          onChange={this.handleChange}
          placeholder="typing Title"
        />
        <br />
        <select id="id_author" onChange={this.handleChange}>
          {this.state.author.map((value, index) => {
            return <option value={value.id}>{value.name}</option>;
          })}
        </select>
        <br />
        <button
          onClick={() => {
            this.postBook();
          }}>
          simpan
        </button>
        <button>batal</button>
      </div>
    );
  }
}
