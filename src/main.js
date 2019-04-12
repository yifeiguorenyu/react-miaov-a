import React, { Component } from "react";
import Item from "./item.js";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {
      data,
      isCheckAll,
      setCheckAll,
      setCheck,
      setLike,
      remove
    } = this.props;
    return (
      <table
        className="main"
        style={{ display: data.length ? "table" : "none" }}
      >
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                id="checkAll"
                checked={isCheckAll}
                onChange={e => {
                  setCheckAll(e.target.checked);
                }}
              />
              <label htmlFor="checkAll">全选</label>
            </th>
            <th>歌曲</th>
            <th>歌手</th>
            <th>收藏</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <Item
                item={item}
                setCheck={setCheck}
                key={index}
                setLike={setLike}
                remove={remove}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
