import React, { Component } from 'react';
import Card from '../Component/Card';
import Axios from 'axios';
export default class Book extends Component {
  state = {
    books: []
  };
  getDataBook = () => {
    Axios.get('https://api-demo.koding.sch.id/api/book/')
      .then(res => {
        console.log(res.data.data);
        this.setState({
          books: res.data.data
        });
        console.log(this.state.books, '>>>>>>>>> ini data buku');
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getDataBook();
  }
  render() {
    return (
      <div>
        {this.state.books.map((value, index) => {
          return <Card title={value.judul} id={value.author.name} />;
        })}
      </div>
    );
  }
}
