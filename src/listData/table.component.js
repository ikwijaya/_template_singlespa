import React from 'react';
import PropsTypes from 'prop-types';

export default class TableReact extends React.Component {
  constructor(props){
    super(props);
    const { headers,body,items } = props;

    this.headers = typeof headers === 'array' ? headers : [];
    this.items = typeof items === 'array' ? items : [];
    this.body = typeof body === 'array' ? body : [];
  }

  _get(arr,elm){
    elm = elm.replace(/\[(\w+)\]/g, '.$1');
    elm = elm.replace(/^\./, '');
    let el = elm.split('.');

    for (let i = 0, n = el.length; i < n; ++i) {
        let k = el[i];
        if (k in arr) {
            arr = arr[k];
        } else {
            return;
        }
        return arr;
    }
  }

  _renderBody(body,item){
    const td=[];
    if(body.length == 0 || item.length == 0) return null;
    for(let i=0;i<body.length;i++){
      td.push(
        <td key={i}>{this._get(item,body[i].value)}</td>
      );
    }
    return td;
  }

  _renderTable(headers,body,items){
    const buildBody = [];
    for(let i=0; i<items.length;i++){
      buildBody.push(
        <tr key={i}>{this._renderBody(body,items[i])}</tr>
      );
    }

    const buildHead = [];
    for(let i=0; i<headers.length;i++){
      buildHead.push(<th key={i} scope="col">{headers[i].title}</th>);
    }

    return { head:buildHead,data:buildBody }
  }

  render(){
    const { items,headers,body } = this.props;
    if(headers.length === 0) return null;
    if(body.length === 0) return null;
    const data = this._renderTable(headers,body,items);
    
    return (
      <div>
        <table className="responsive-table striped">
          <thead><tr>{data.head}</tr></thead>
          <tbody>{data.data}</tbody>
        </table>
      </div>
    );
  };
}