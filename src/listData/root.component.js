import React from "react";
import axios from 'axios';
import Table from './table.component.js';
import Pagination from './pagination.component.js';

export default class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      headers:[
        { title:'User ID',value:'userId'},
        { title:'ID',value:'id'},
        { title:'Title',value:'title'},
        { title:'Body',value:'body'},
      ],
      body:[
        { value:'userId' },
        { value:'id' },
        { value:'title' },
        { value:'body' }
      ],
      currentItems: [],
      pageSize:5,
      search:''
    }

    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      const items = res.data;
      this.setState({ items });
    });
  }

  onChangePage(currentItems){
    this.setState({ currentItems: currentItems });
  }

  render(){
    const {
      items,
      headers,
      body,
      currentItems,
      pageSize,
      search
    } = this.state;
    const totalItems = items.length;
    if(totalItems === 0) return null;
    
    return (
      <div className="container">
        <div className="row">
        
        </div>
        <Table items={currentItems} headers={headers} body={body} />
        <Pagination items={items} pageSize={pageSize} onChangePage={this.onChangePage} />
      </div>
    );
  }
}